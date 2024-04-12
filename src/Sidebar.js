import {Avatar} from "@mui/material";
import React from 'react';
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  )
  return (
    <div className='sidebar'>
    <div className="sidebar__top">
      <img src="https://images.unsplash.com/photo-1643631961497-238f8c59d171?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wtRUlxMjkyaldYNHx8ZW58MHx8fHx8" alt="" />
      <Avatar className="sidebar__avatar"/>
      <h2>Oshani Sharma</h2>
      <h4>ossharma1703@gmail.com</h4>
    </div>
    <div className="sidebar__stats">
      <div className="sidebar__stat">
        <p>Who viewed you</p>
        <p className="sidebar__statNumber">2,543</p>
      
      </div>
      <div className="sidebar__stat">
      <p>Views on post</p>
        <p className="sidebar__statNumber">2,448</p>
      
      </div>
    </div>
    <div className="sidebar__bottom">
      <p>Recent</p>
      {recentItem("reactjs")}
      {recentItem("react-hook")}
      {recentItem("javascript")}
      {recentItem("material-ui")}
      {recentItem("programming")}
    
    </div>
    </div>
  );
}

export default Sidebar;