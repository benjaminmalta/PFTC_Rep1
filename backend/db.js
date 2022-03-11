export const GOOGLE_APPLICATION_CREDENTIALS= "./key.json";
import Firestore from "@google-cloud/firestore";

const Firestore = require('@google-cloud/firestore');

const db = new Firestore({
  projectId: 'pftc-msd-0000001',
  keyFilename: GOOGLE_APPLICATION_CREDENTIALS,
});

//Collection (Table)
//Document (Row)
//docRef selects the collection and corresponding document



export async function CreateUser(name, surname, email, password){
  const docRef = db.collection("users").doc(email);  
  return await docRef.set({
        name: name,
        surname: surname,
        email: email,
        password: password
    });
}

export async function GetUser(email){  
  const docRef =  db.collection('users').doc(email);
  return await docRef.get();
}
