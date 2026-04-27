import React, { useMemo, useState } from "react";
import { Rnd } from "react-rnd";
import "./macWindow.scss";

const MINIMIZED_HEIGHT = 44;
let WINDOW_Z_INDEX_COUNTER = 100;

const nextWindowZIndex = () => {
  WINDOW_Z_INDEX_COUNTER += 1;
  return WINDOW_Z_INDEX_COUNTER;
};

const toNumber = (value, fallback) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const MacWindow = ({
  children,
  className = "",
  title = "sonukumar - zns",
  width = 600,
  height = 400,
  x = 100,
  y = 100,
  onClose
}) => {
  const initialRect = useMemo(
    () => ({
      x: toNumber(x, 100),
      y: toNumber(y, 100),
      width: toNumber(width, 600),
      height: toNumber(height, 400)
    }),
    [x, y, width, height]
  );

  const [position, setPosition] = useState({ x: initialRect.x, y: initialRect.y });
  const [size, setSize] = useState({ width: initialRect.width, height: initialRect.height });
  const [normalRect, setNormalRect] = useState(initialRect);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [zIndex, setZIndex] = useState(nextWindowZIndex);

  const bringToFront = () => {
    setZIndex(nextWindowZIndex());
  };

  const captureNormalRect = () => {
    setNormalRect({
      x: position.x,
      y: position.y,
      width: Number(size.width),
      height: Number(size.height)
    });
  };

  const handleClose = () => {
    if (typeof onClose === "function") {
      onClose();
    }
  };

  const handleMinimizeToggle = () => {
    if (!isMinimized) {
      if (!isMaximized) {
        captureNormalRect();
      }
      setSize((prev) => ({ ...prev, height: MINIMIZED_HEIGHT }));
      setIsMinimized(true);
      setIsMaximized(false);
      return;
    }

    setPosition({ x: normalRect.x, y: normalRect.y });
    setSize({ width: normalRect.width, height: normalRect.height });
    setIsMinimized(false);
  };

  const handleMaximizeToggle = () => {
    if (!isMaximized) {
      if (!isMinimized) {
        captureNormalRect();
      }
      setPosition({ x: 0, y: 0 });
      setSize({ width: window.innerWidth, height: window.innerHeight });
      setIsMaximized(true);
      setIsMinimized(false);
      return;
    }

    setPosition({ x: normalRect.x, y: normalRect.y });
    setSize({ width: normalRect.width, height: normalRect.height });
    setIsMaximized(false);
  };

  const handleDragStop = (_event, data) => {
    setPosition({ x: data.x, y: data.y });
  };

  const handleResizeStop = (_event, _direction, ref, _delta, newPosition) => {
    setSize({
      width: ref.offsetWidth,
      height: ref.offsetHeight
    });
    setPosition({ x: newPosition.x, y: newPosition.y });
  };

  return (
    <Rnd
      size={size}
      position={position}
      style={{ zIndex }}
      onMouseDown={bringToFront}
      onDragStart={bringToFront}
      onResizeStart={bringToFront}
      onDragStop={handleDragStop}
      onResizeStop={handleResizeStop}
      minWidth={300}
      minHeight={MINIMIZED_HEIGHT}
      bounds="parent"
      dragHandleClassName="nav"
    >
      <div className={`window ${className} ${isMinimized ? "window-minimized" : ""}`.trim()}>
        <div className="nav">
          <div className="dots">
            <button type="button" className="red" onClick={handleClose} aria-label="Close window"></button>
            <button type="button" className="yellow" onClick={handleMinimizeToggle} aria-label="Minimize window"></button>
            <button type="button" className="green" onClick={handleMaximizeToggle} aria-label="Maximize window"></button>
          </div>
          <div className="title">
            <p>{title}</p>
          </div>
        </div>

        <div className="main">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
