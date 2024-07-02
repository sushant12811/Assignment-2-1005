import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/authContext';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { app } from '../../firebase/firebase';
import { Card } from "@tremor/react";


/**
 * Fetching avatar and displaying currentuser data from firestore
 *
 * @return {*} 
 */
function Profile() {
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState({ firstName: '', lastName: '', email: '' });
  const db = getFirestore(app);
  const seed = currentUser.username;
  const avatarStyle = "avataaars";

  const avatarUrl = `https://api.dicebear.com/9.x/${avatarStyle}/svg?seed=${seed}`;

  useEffect(() => {
    const fetchUserData = async () => {
      if (currentUser) {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      }
    };

    fetchUserData();
  }, [currentUser, db]);

  return (
    <div className="flex justify-center items-center">
      <Card className="max-w-lg" decoration="center" decorationColor="blue">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <h1 className="text-3xl font-bold mb-4">Profile Page</h1>
          <div className="profile profile-info text-center">
            <img src={avatarUrl} alt="Avatar" />
            <h2 className="text-xl font-semibold mt-3">{userData.firstName} {userData.lastName}</h2>
            <p className="text-gray-600">{userData.email || currentUser.email}</p>

          </div>
        </div>
      </Card>
    </div>
  );
}

export default Profile;