import {collection, getDocs, addDoc,doc,deleteDoc} from "firebase/firestore";
import { db } from "./FirebaseConfig";

export const getEmployee = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, 'employee'));

        const productsData = querySnapshot.docs.map(doc => {
            return {
                id: doc.id, 
                ...doc.data() 
            };
        });
        return productsData;

    } catch (error) {
        console.error('Error getting documents: ', error);
    }
};

// Add Product Function
export const addEmployee = async (data) => { 
    
    try {
            const docRef = await addDoc(collection(db, "employee"), {
            ...data
        });
        console.log("Document written with ID: ", docRef.id);
   } catch (error) {
        console.error("Error adding document: ", error);
    }
};

