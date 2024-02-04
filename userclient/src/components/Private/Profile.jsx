import React, { useEffect, useRef, useState } from "react";
import "./Profile.css";
import { useSelector } from "react-redux";
import { app , storage } from "../../firebase";
import { getDownloadURL , ref, uploadBytes } from "firebase/storage";

function Profile() {
  const fileRef = useRef(null);
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({});
  const value = useSelector((state) => {
    return state.user;
  });
  
  console.log(formData);
  useEffect(() => {
    if (image) {
      const handleUpload = async () => {
        try {
          const fileName = new Date().getTime() + image.name;
          const storageRef = ref(storage, `/userImages/${fileName}`);

          const uploadTask = await uploadBytes(storageRef, image);
          console.log(uploadTask);
          const imageUrl = await getDownloadURL(storageRef);
          console.log(imageUrl);
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
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
            src={value?.currentUser?.profilePicture}
            onClick={() => {
              fileRef.current.click();
            }}
            alt="Profile"
          />
        </div>
        <div>
          <div>
            <label htmlFor="username">Name</label>
            <input
              className="inputSeprate"
              type="text"
              placeholder="Name"
              name="username"
              value={value?.currentUser?.username || ""}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              className="inputSeprate"
              type="email"
              placeholder="Email"
              name="email"
              value={value?.currentUser?.email || ""}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              className="inputSeprate"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <button className="btnset">UPDATE</button>
          </div>
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
