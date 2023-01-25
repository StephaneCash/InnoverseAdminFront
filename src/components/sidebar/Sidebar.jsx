import React, { useState } from 'react'
import "./Sidebar.css";
import { SidebarData } from "../../data/Data";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion"
import { useSelector } from 'react-redux';
import cookie from "js-cookie";
import { baseUrl } from '../../bases/baseUrl';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {

  const [selected, setSelected] = useState(0);
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const userData = useSelector((state) => state.userReducer);

  const sidebarVariants = {
    true: {
      left: '0'
    },
    false: {
      left: '-60%'
    }
  };

  const removeCookie = (key) => {
    if (window !== undefined) {
      cookie.remove(key, { expires: 1 });
    }
  };

  const logutFunction = async () => {
    await axios.get(`${baseUrl}/users/logout`)
      .then(() => {
        removeCookie('jwt')
        navigate("/");
      })
      .catch(err => {
        console.log(err.response)
      });
  };


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
                    {
                      index === 0 ?
                        <Link to="/dashboard">
                          {item.heading}
                        </Link> :
                        index === 1 ?
                          <Link to="/compte/affiliation">
                            {item.heading}
                          </Link> :
                          index === 2 ?
                            <Link to="/compte/transactions">
                              {item.heading}
                            </Link> :
                            index === 3 ?
                              <Link to="/compte/sendMoney">
                                {item.heading}
                              </Link> :
                              index === 4 ?
                                <Link to="/compte/rechargeMobie">
                                  {item.heading}
                                </Link> :
                                index === 5 &&
                                <Link to="/compte/config">
                                  {item.heading}
                                </Link>
                    }
                  </span>
                </div>
              )
            })
          }
          <div className='menuItem'>
            <UilSignOutAlt onClick={logutFunction} style={{ cursor: "pointer" }} />
          </div>
          <div className='menuItem'>
            <Link to="/user/compte">
              Bonjour {userData && userData.pseudo}
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Sidebar