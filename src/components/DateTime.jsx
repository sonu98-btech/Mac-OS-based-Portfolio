import React, { useEffect, useState } from 'react'

const formatDateTime = (date) => {
  const dateParts = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  }).formatToParts(date)

  const weekday = dateParts.find((part) => part.type === 'weekday')?.value.toLowerCase()
  const month = dateParts.find((part) => part.type === 'month')?.value.toLowerCase()
  const day = dateParts.find((part) => part.type === 'day')?.value
  const time = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: false,
  }).format(date)

  return `${weekday} ${month} ${day} ${time}`
}

const DateTime = () => {
  const [dateTime, setDateTime] = useState(() => formatDateTime(new Date()))

  useEffect(() => {
    const updateDateTime = () => setDateTime(formatDateTime(new Date()))
    const intervalId = window.setInterval(updateDateTime, 1000)

    return () => window.clearInterval(intervalId)
  }, [])

  return <div>{dateTime}</div>
}

export default DateTime