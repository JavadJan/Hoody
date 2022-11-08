import React,{useState} from 'react'
import './Profile.scss'
import user from '../../../assets/user.png'
import {BsCameraFill} from 'react-icons/bs'

function Profile() {
  const[dialog,setDialog]=useState(false)
  const[image,setImage]=useState("");
  const [imageCrop,setImageCrop]=useState(false);
  const [src,setSrc]=useState(false);
  const[avatar,setAvatar]=useState([]);
  const[preview,setPreview]=useState(false);


  const avatarFinal = avatar.map((item)=>item.preview);
  const onClose=()=>{
    setPreview(null);
  }
  const onCrop=(view)=>{
    setPreview(view)
  }
  const saveCropImage=()=>{
    setAvatar([...avatar,{preview}]);
    setImageCrop(false)
  }

  return (
    <div className='profile'>
        <div className="leftSideBar">
            <div className="logoHoody"></div>
            
            <div className="profileUser">
              <div className="avatar">
                  <img src={user} alt=""
                  
                  
                  onClick={()=>{
                    setDialog(true)
                  }}/>
                  
                   <label htmlFor="">Username</label>
                   <dialog
                   visible={dialog}
                   header={()=>{
                    <p>Update profile image</p>
                   }}
                   onHide={()=>{
                    setImageCrop(false)
                   }}
                   >

                   </dialog>
                   <div className="addPicture">
                    <BsCameraFill  width='20px' height='20px' className='bsCamera'></BsCameraFill>
                   <input type="file"
                  accept='/image/*'
                  onChange={(e)=>{
                    const file = e.target.files[0];
                    if(file && file.type.substring(0, 5)==="image"){
                      setImage(file);
                    }else{
                      setImage(null)
                    }
                    }} /></div>


              </div>

            </div>
        </div>

    </div>
  )
}

export default Profile