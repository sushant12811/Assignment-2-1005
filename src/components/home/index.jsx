import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/authContext';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { app } from '../../firebase/firebase'; 
import Showcase from '../Dashboard/Showcase';


/**Fetching the user data from the firestore
 *
 *
 * @return {*} 
 */

const Home = () => {
    const { currentUser } = useAuth();
    const [userData, setUserData] = useState({ firstName: '', lastName: '', email: '' });
    const db = getFirestore(app);

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
    }, [currentUser]);

    return (
        <div>
            
            <div>
                <Showcase/> 
            </div>
        </div>
        
    );
}

export default Home;