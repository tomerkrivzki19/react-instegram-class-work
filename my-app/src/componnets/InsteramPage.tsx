import { log } from 'console'
import React ,{useContext} from 'react'

import { CgProfile } from 'react-icons/cg';
import { FcLike } from 'react-icons/fc';
import { AiOutlineMessage } from 'react-icons/ai';
import { HiOutlinePaperAirplane } from 'react-icons/hi';
import { FaRegStickyNote } from 'react-icons/fa';

// import { USER_DATA } from '../App';
function InsteramPage({user}:{user:any}) {
    
   
    
  return (
    <div>
           <div className="page-wraper">
        <div className="main-page">
          {/* <div className="nav-instegram-container">
            <h3>Instegram Logo</h3>
          </div> */}
          <div className="main-instegram-container">
            <div className="userdata-container">
            <h3> <CgProfile/> {user.authorName}</h3>
            </div>
            <div className="img-container">
              <img src={user.image} alt="" />
            </div>
            <div className="icons-contaier">
              <div className="left-container" >

              <ul style={{paddingLeft:'0'}} >
                <li ><FcLike/></li>
                <li ><AiOutlineMessage/></li>
                <li><HiOutlinePaperAirplane/></li>
              </ul>
              </div>
              <div className="right-container" >
                <ul>
                  <li><FaRegStickyNote/></li>
                </ul>
              </div>
            </div>
            <div className="text-container">
                <div className="topper-container">

              <h3>{user.authorName}</h3> <p style={{paddingTop:'5px',marginLeft:'1em'}}>{user.title} </p>
                </div>
              <p>{user.text}</p>
            </div>
       
          </div>
          <div className="bootom-instegram-container"></div>
        </div>
      </div>
    </div>
  )
}

export default InsteramPage