import React from 'react'

function SideBar({HandlerShowForm}) {
  return (
    <div className='sideBar'>
        <button onClick={()=>HandlerShowForm(true)} class="button-64" role="button"><span class="text">Show Form</span></button>
        <button onClick={()=>HandlerShowForm(false)} class="button-64" role="button"><span class="text">Form Data</span></button>
    </div>
  )
}

export default SideBar