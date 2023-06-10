import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSidebarOff, getSidebarStatus } from '../../redux/sidebarSlice';
import './Sidebar.css'

const Sidebar = () => {

  const dispatch = useDispatch()
  const isSidebarOn = useSelector(getSidebarStatus)


  return (
    <aside className={`sidebar ${isSidebarOn ? 'hide-sidebar' : ''}`}>

        <button type='button' className='sidebar-hide-btn'
        onClick={() => dispatch(setSidebarOff())}>
          <CloseIcon/>
        </button>


        <div className="sidebar-cnt">
          <div className="cat-title">
          Categorys
          </div>

          <ul className='cat-list'>
            <li>
              <Link to='' >CATEGORY HERE</Link>
            </li>
          </ul>
        </div>

    </aside>
  )
}

export default Sidebar