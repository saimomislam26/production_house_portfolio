import React from 'react'
import { SidebarData } from './SidebarData'
import { useNavigate,useLocation } from 'react-router-dom'
const Sidebar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location);
    return (
        <div className='sidebar'>
            <ul className='sidebar-list'>
                {
                    SidebarData.map((val, ind) => {
                        return (
                            <li
                                key={ind}
                                className="row"
                                id={location.pathname === val.link?"active":""}
                                onClick={() => navigate(val.link)}>
                                <div id="icon">{val.icon}</div>
                                <div id="title">{val.title}</div>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default Sidebar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   