import React, {useState} from 'react'

function Sidebar() {
    const [collapsible, setCollapsible] = useState(false)

    return (
    <>
        <aside className={`${collapsible ? 'w-20': 'w-64'} text-white h-screen fixed top-16 left-0 bg-gray-900 flex flex-col transition-[width] duration-300 ease-out`}>
            {/* TOGGLE BUTTON */}
            <button
                onClick={()=>setCollapsible(!collapsible)}
                className=" bg-gray-900 text-white px-6 py-4 hover:bg-gray-800 focus:outline-none"

            >
                {collapsible ? '➡️' : '⬅️'}

            </button>
            {/* <div className='text-2xl p-6 font-bold'>{!collapsible && 'Abox Darshboard'}</div> */}
            
            <nav>
            <div className='flex flex-col gap-2 px-6 '>
                <a href="#" className='hover:bg-gray-800 block p-2 w-full rounded text-left '>📊{ !collapsible && 'Dashboard'}</a>
                <a href="#" className='hover:bg-gray-800 block p-2 w-full rounded text-left'>📋{ !collapsible && 'Tasks'}</a>
                <a href="#" className='hover:bg-gray-800 block p-2 w-full rounded text-left'>⚙️ { !collapsible && 'Settings'}</a>
                <a href="#" className='hover:bg-gray-800 block p-2 w-full rounded text-left'>📨 { !collapsible && 'Messages'}</a>
                <a href="#" className='hover:bg-gray-800 block p-2 w-full rounded text-left'>👤 { !collapsible && 'Profile'}</a>
            </div>
            </nav>
        </aside>
    </>
  )
}

export default Sidebar