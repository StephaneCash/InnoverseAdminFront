import React, { useState } from 'react'
import "./Sidebar.css";
import logo from "../../images/logo.png";
import { SidebarData } from "../../data/Data";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion"

const Sidebar = () => {

  const [selected, setSelected] = useState(0);

  const [show, setShow] = useState(true);

  const sidebarVariants = {
    true: {
      left: '0'
    },
    false: {
      left: '-60%'
    }
  }

  return (
    <>
      <div className='bars' style={show ? { left: "60%" } : { left: "5%" }}
        onClick={() => setShow(!show)}
      >
        <UilBars />
      </div>

      <motion.div className='sidebar'
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${show}` : ""}
      >
        <div className='logo'>
          <img src={logo} alt='Logo' />
          <span>
            In<span>nov</span>erce
          </span>
        </div>

        <div className='menu'>
          {
            SidebarData && SidebarData.map((item, index) => {
              return (
                <div
                  className={selected === index ? 'menuItem active' : 'menuItem'}
                  key={index}
                  onClick={() => setSelected(index)}
                >
                  <item.icon />
                  <span>
                    {item.heading}
                  </span>
                </div>
              )
            })
          }
          <div className='menuItem'>
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Sidebar