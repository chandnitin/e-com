import React, {useState, Fragment}from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {SidebarData} from './SidebarData';
import './Navbar.css';
import {IconContext} from 'react-icons';
function Navbar() {
    const [ sidebar,setSidebar]=useState(false);
    const [ submenu,setSubmenu]=useState(false);
    // const showSidebar =() => setSidebar(!sidebar);
    // const showSubmenu =() => setSubmenu(!submenu);
    const showSidebar = ()=>{
         (!sidebar)? setSidebar(true) : setSidebar(false);
    }

    const showSubmenu = ()=>{
        (!submenu)? setSubmenu(true) : setSubmenu(false);
   }
var  i =0;
    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
            <div className="navbar">
            
                <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
                <ul className='nav-menu-items' >
                    <li className='navbar-toggle'>
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose onClick={showSidebar} />
                        </Link>
                    </li>
<li>

    {SidebarData.map((item,index)=>{
        console.warn("ITEM",item)
        if(!item.items){
            return(
                <li key={index} className={item.cName}>
                    <Link to ={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                    </Link>
                </li>   
            )
        }
       
        if(item.items){
            
            let childMenu = item.items;
            console.warn("Menu",childMenu.length)
            for(i=0; i < childMenu.length+1 ; i++){
                 console.warn("Menu"+i,childMenu[i])
                 
                return (
                    <Fragment>
                    <li key={index} className={item.cName} >
                        <Link to={item.path} onClick={showSubmenu}>
                            {item.icon}
                            <span >{item.title}</span>
                        </Link>
                        <ul className={submenu ? 'sub-navmenu show' : 'sub-navmenu'}>
                            <li className={childMenu[i].cName}>
                                <Link to={childMenu[i].path}>
                                    {childMenu[i].icon}
                                    <span>{childMenu[i].title}</span>
                                </Link>
                            </li>      
                            <li className={childMenu[i].cName}>
                                <Link to={childMenu[i].path}>
                                    {childMenu[i].icon}
                                    <span>{childMenu[i].title}</span>
                                </Link>
                            </li>                        
                            <li className={childMenu[i].cName}>
                                <Link to={childMenu[i].path}>
                                    {childMenu[i].icon}
                                    <span>{childMenu[i].title}</span>
                                </Link>
                            </li>  
                        </ul>
                    </li>
                    </Fragment>
                )
            }


            // {Object.keys(item).map((chaiditem, i)=>{
            //     console.warn("TESTTT",chaiditem);
            //     // let childs =item.items[i];
            //     // console.warn("TEST",childs)
               
            //     return (
            //         <li key={index} className={item.cName} >
            //             <Link to={item.path} onClick={showSubmenu}>
            //                 {item.icon}
            //                 <span >{item.title}</span>
            //             </Link>
            //             <ul className={submenu ? 'sub-navmenu show' : 'sub-navmenu'}>
            //                 <li className={childMenu[i].cName}>
            //                     <Link to={childMenu[i].path}>
            //                         {childMenu[i].icon}
            //                         <span>{childMenu[i].title}</span>
            //                     </Link>
            //                 </li>                           
            //             </ul>
            //         </li>
            //     )
               
                 
            // })}

        //    {item.map((chaiditem,index)=>{
        //         console.warn("chaiditem",chaiditem);
         
        //     })
        // }
        
        

            // return(
            //     <li key={index} className={item.cName} >
            //         <Link to ={item.path} onClick={showSubmenu}>
            //             {item.icon}
            //             <span >{item.title}</span>
            //         </Link>
            //         <ul className={submenu ? 'sub-navmenu show': 'sub-navmenu'}>
                        
                        
            //             <li className={item.items.cName}>
            //                 <Link to ={item.items.path}>
            //                 {item.icon}
            //                 <span>{item.items.title}</span>
            //             </Link>
            //             </li>
            //             <li></li>
            //         </ul>
            //     </li>   
            // )
        }
        
    })}
</li>
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
