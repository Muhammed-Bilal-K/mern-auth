import React, { useEffect, useRef, useState } from "react";
import "./Profile.css";
import { useSelector } from "react-redux";
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateUserSuccess } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";


function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fileRef = useRef(null);
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({});
  const value = useSelector((state) => {
    return state.user;
  });

  useEffect(() => {
    if (image) {
      const handleUpload = async () => {
        try {
          const fileName = new Date().getTime() + image.name;
          const storageRef = ref(storage, `/userImages/${fileName}`);

          await uploadBytes(storageRef, image);
          const imageUrl = await getDownloadURL(storageRef);
          // const fileName = new Date().getTime() + image.name;
          // const imgRef = ref(storage, `/userImages/${fileName}`);
          // if (image) {
          //   try {
          //     const snapshot = await uploadBytes(imgRef, image);
          //     const downloadURL = await getDownloadURL(imgRef);
          //     console.log(downloadURL);
          //   } catch (error) {

          //   }
          // }

          setFormData({ ...formData, profilePicture: imageUrl });
        } catch (error) {
          console.error("Error uploading image:", error);
        }
      };

      handleUpload();
    }
  }, [image]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const HandleDataSubmit = async (e) => {
    e.preventDefault();
    console.log(value.currentUser._id);
    axios
      .put(`http://localhost:3000/update/${value.currentUser._id}`, {
        ...formData,
      },{withCredentials : true})
      .then((result) => {
        console.log(result);
        dispatch(updateUserSuccess(result.data));
        // navigate('/');
        location.reload()
      });
  };

  return (
    <>
      <div className="container">
        <h1>Profile</h1>
        <div className="avatar">
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            type="file"
            ref={fileRef}
            style={{ display: "none" }}
            accept="image/*"
          />
          <img
            src={formData.profilePicture || value?.currentUser?.profilePicture}
            onClick={() => {
              fileRef.current.click();
            }}
            alt="Profile"
          />
        </div>
        <div>
          <form onSubmit={HandleDataSubmit}>
            <div>
              <label htmlFor="username">Name</label>
              <input
                id="username"
                className="inputSeprate"
                type="text"
                placeholder="Name"
                defaultValue={value?.currentUser?.username || ""}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                defaultValue={value?.currentUser?.email || ""}
                className="inputSeprate"
                type="email"
                placeholder="Email"
                id="email"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                className="inputSeprate"
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleInputChange}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <button className="btnset">UPDATE</button>
            </div>
          </form>
        </div>
        <div className="Actions">
          <span>Delete Account</span>
          <span>Sign Out</span>
        </div>
      </div>
    </>
  );
}

export default Profile;
