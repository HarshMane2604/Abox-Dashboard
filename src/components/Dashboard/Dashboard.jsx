import React, { useState } from 'react'
import notifications from '../Data/Notification'
import NotificationCard from '../NotificatiionCard/NotificationCard'
function Dashboard() {
    const [selectedNotification, setSelectedNotification] = useState(null)

    const priorityOrder = {
        Urgent: 1,
        High: 2,
        Medium: 3,
        Low: 4
    }


    const handleClick = (notifications)=>{
        setSelectedNotification(notifications);
        // logic for opening model
    }

    const sortedNotification = [...notifications].sort(
        (a,b) => priorityOrder[a.priority] - priorityOrder [b.priority]
    )
  return (
    <>
        <div>
            {sortedNotification.mao((note)=>(
                <NotificationCard
                    key={note.id}
                    notifications={note}
                    onClick={handleClick}
                />
            ))}
        </div>
    </>
  )
}

export default Dashboard