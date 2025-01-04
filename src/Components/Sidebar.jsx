import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='sidebar'>
      
       <h1>Sidebar</h1>
      
          <div className='link'>
              <Link to = '/dashboard'><h2>Show Task</h2></Link>
              <Link to= '/add'><h2>Add Task</h2></Link>
          </div>

    </div>
  );
}

export default Sidebar;
