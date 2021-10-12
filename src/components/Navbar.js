import React, {useState, useEffect} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData';
import './Navbar.css';
import {IconContext} from 'react-icons';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const [userInfo, setUserInfo] = useState();
    const providers = ['twitter','github','aad'];
    const redirect = window.location.pathname;

    useEffect(() => {
        (async () => {
            setUserInfo(await getUserInfo());
        })()
    }, [])

    async function getUserInfo() {
        try {
            const response = await fetch('/.auth/me');
            const payload = await response.json();
            const {clientPrincipal} = payload;
            return clientPrincipal;
        }
        catch (error)
        {
            console.error('No profile could be found');
            return undefined;
        }
    }

    return (
        <>
           <IconContext.Provider value={{color: '#fff'}}>
        
           <div className="navbar">
               <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar}/>
               </Link>
           </div>
           <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
               <ul className='nav-menu-items' onClick={showSidebar}>
                   <li className='navbar-toggle'>
                       <Link to='#' className='menu-bars'>
                           <AiIcons.AiOutlineClose/>
                       </Link>
                   </li>
                    {SidebarData.map ((item,index) =>
                    {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
               </ul>
           </nav>
           </IconContext.Provider>
           <nav className="menu auth">
  <p className="menu-label">Auth</p>
  <div className="menu-list auth">
    {!userInfo &&
      providers.map((provider) => (
        <a key={provider} href={`/.auth/login/${provider}?post_login_redirect_uri=${redirect}`}>
          {provider}
        </a>
      ))}
    {userInfo && <a href={`/.auth/logout?post_logout_redirect_uri=${redirect}`}>Logout</a>}
  </div>
  
</nav>       
{
  userInfo && (
    <div>
      <div className="user">
        <p>Welcome</p>
        <p>{userInfo && userInfo.userDetails}</p>
        <p>{userInfo && userInfo.identityProvider}</p>
      </div>
    </div>
  )
}    
        </>
    )
}

export default Navbar

