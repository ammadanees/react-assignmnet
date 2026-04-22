import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    {
      name: 'Employee Salary',
      path: '/emp'
    },
    {
      name: 'To-Do List',
      path: '/todo'
    },
    {
      name: 'Word Summary',
      path: '/wc'
    },
    {
      name: 'Quiz Application',
      path: '/quiz'
    },

    {
      name: 'Privacy Policy',
      path: '/privacy'
    },
     {
      name: 'React Topic List',
      path: '/reacttopiclist'
    }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>React Grand Assignment</h2>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) => 
              isActive ? 'nav-link-custom active' : 'nav-link-custom'
            }
          >
            <span className="icon">{item.icon}</span>
            <span className="name">{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
