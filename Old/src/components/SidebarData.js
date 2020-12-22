import React from 'react'

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData=[
    {
        title :'Home',
        path:'/',
        icon: <AiIcons.AiFillHome/>,
        cName:'nav-text'

    },
    {
        title :'Reports',
        icon: <IoIcons.IoIosPaper/>,
        cName:'nav-text',
        items:[
            {
                title :'Attendance Report',
                path:'/reports',
                icon: <IoIcons.IoIosPaper/>,
                cName:'child'
    
            },
            {
            title :'Student Report',
            path:'/reports',
            icon: <IoIcons.IoIosPaper/>,
            cName:'child'

        },
        
    ]
       
    },
    {
        title :'Products',
        path:'/products',
        icon: <FaIcons.FaCartPlus/>,
        cName:'nav-text',
        items:[
            {
                title :'Attendance Report',
                path:'/reports',
                icon: <IoIcons.IoIosPaper/>,
                cName:'child'
    
            },
            {
            title :'Student Report',
            path:'/reports',
            icon: <IoIcons.IoIosPaper/>,
            cName:'child'

        }
    ]
    },
    {
        title :'Team',
        path:'/team',
        icon: <IoIcons.IoMdPeople/>,
        cName:'nav-text'
    }
    ,{
        title :'Message',
        path:'/message',
        icon: <FaIcons.FaEnvelopeOpenText/>,
        cName:'nav-text'
    }
    ,{
        title :'Support',
        path:'/support',
        icon: <IoIcons.IoMdHelpCircle/>,
        cName:'nav-text'
    }
]