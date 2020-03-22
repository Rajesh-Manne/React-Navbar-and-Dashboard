import React, { Component } from 'react'
//import {FaAlignRight} from "react-icons/fa";
//import {Link,Route} from "react-router-dom";
import './Navbar.css'
import DrawerToggleButton  from "./components/SideDrawer/DrawerToggleButton"


function Navbar(props)  {
    // state = { isOpen:false}

    // handleToggle = ()=> {
    //   this.setState({
    //       isOpen: !this.state.isOpen
    //   })

    // }

    
        
       return (
            // <nav className="navbar">
                
            //     <div className="nav-header">
            //         <div className="nav-center">
            //          <div className="header">   
            //         <div className="nav-brand">
            //             <img src="https://www.sony.net/template/2018/v50/en/img/h1_sonylogo_x2.gif" alt="logo" />
            //             </div>
            //         <div className="spacer"></div>
            //        <div className="nav-btn" onClick={this.handleToggle}>
            //         <FaAlignRight className="nav-icon" />
            //        </div>
            //        </div>
            //        <ul className={this.state.isOpen? "show-nav show-nav li": "nav-links"}>
            //            <li>Home</li>
            //            <li>Rooms</li>
            //        </ul>
            //        </div>
                     
            //        </div>
                
                
            // </nav>
         <header className="toolbar">
         <nav className="toolbar_navigation">
             <div>
                 <DrawerToggleButton click={props.clickHandler}/>
             </div>
          <div className="toolbar_logo"> 
              <a href="#">Logo</a>
          </div>
          <div class="spacer"/>
          <div className="toolbar_navigation-items">
             <ul>
                 <li>
                     <a href="#">Products</a>
                 </li>
                 <li>
                     <a href="#">Users</a>
                 </li>
             </ul>
          </div>
         </nav>
         </header>
        )
    }


export default Navbar
