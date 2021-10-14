import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
        protected : false
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text',
        protected : false
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text',
        protected : true
    },
    {
        title: 'Team',
        path: '/team',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text',
        protected : false
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <FaIcons.FaEnvelope />,
        cName: 'nav-text',
        protected : false
    },                
    {
        title: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text',
        protected : false
    },
    {
        title: 'Login',
        path: '/login',
        icon: <IoIcons.IoMdLogIn />,
        cName: 'nav-text',
        protected : false
    }     
]
