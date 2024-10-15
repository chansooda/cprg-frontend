import React from 'react';
import '../styles/Sidebar.css';  // styles 폴더에서 CSS를 가져옴

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li>Dashboard</li>
        <li>Tasks</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
