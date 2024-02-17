import React from 'react'
import Topbar from './Topbar'
import Book from './Book'
import Sidebar from './Sidebar'


function Dashboard() {
  return (
  
      <div>
        <div id="wrapper">
        <Sidebar/>
        <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar/>
          <Book/>
          </div>

</div>
</div>
</div>
  )
}

export default Dashboard