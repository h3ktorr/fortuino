import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links, informations } from "../data";
import { useGlobalContext } from "../context";
import { motion } from "framer-motion";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  const sidebarVariant = {
    hidden: {
      x: "-100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      className={isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"}
      variants={sidebarVariant}
      initial="hidden"
      animate="visible"
    >
      <motion.aside className="sidebar">
        <button className="btn close-sidebar" onClick={closeSidebar}>
          <FaTimes />
        </button>

        <ul className="sidebar-links">
          {links.map((link) => {
            const { id, name, route } = link;
            return (
              <li key={id} className="sidebar-link">
                <Link to={route} onClick={closeSidebar}>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>

        <ul>
          {informations.map((item) => {
            const { id, name, route } = item;
            return (
              <li key={id} className="sidebar-link">
                <Link to={route} onClick={closeSidebar}>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.aside>
    </motion.div>
  );
};

export default Sidebar;
