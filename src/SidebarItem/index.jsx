import React from "react";
import "../SidebarItem/styles.css";

function SidebarItem(props) {
  const { name, activeIndex, sidebarIndex, setSidebarActiveIndex } = props;
  return (
    <div
      className={`sidebar-item ${activeIndex === sidebarIndex ? "sidebar-active" : ""}`}
      onClick={() => setSidebarActiveIndex(sidebarIndex)}
    >
      {name}
    </div>
  );
}
export default SidebarItem;
