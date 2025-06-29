import React from 'react'

const priorityColors = {
  Urgent: "bg-red-600",
  High: "bg-orange-500",
  Medium: "bg-yellow-400",
  Low: "bg-green-400"

}
function NotificationCard({notifications, onClick}) {
  const {title, description, date, priority, status, assignedTo} = notifications

  
  return (
    <>
      <div
        onClick={ ()=> notifications}
      >

      </div>
    </>
  )
}

export default NotificationCard