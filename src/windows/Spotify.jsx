import React from 'react'
import MacWindow from './MacWindow'
import "./spotify.scss"
const Spotify = ({ onClose }) => {
    return (
        <MacWindow x={472} y={168} width={684} height={528} title="Spotify" onClose={onClose}>
            <div className='spotify-window'>
                <iframe
                    data-testid="embed-iframe"
                    style={{ borderRadius: '12px' }}
                    src="https://open.spotify.com/embed/playlist/7n5N3lRIClwOgH75VSHEwt?utm_source=generator&theme=0"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
            </div>
        </MacWindow>
    )
}

export default Spotify