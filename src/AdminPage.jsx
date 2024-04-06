import React, { useState } from 'react';
import './firebaseConfig'; // Add this line prevent firebase not loading error
import { getFirestore, addDoc, collection } from "firebase/firestore"; 

function AdminPage() {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  const db = getFirestore();

  const saveDataToFirestore = async () => {
      const docRef = await addDoc(collection(db, "news"), {
        title: inputValue1,
        text: inputValue2,
      });
      alert("Document written to Database");
  };

  return (
    <div className="bg-success FullHeight text-light text-center py-5">
      <h1>Hi <a className='text-warning'>Admin</a></h1>
      <input
        type="text"
        value={inputValue1}
        placeholder='Enter Title'
        onChange={(e) => setInputValue1(e.target.value)}
      />
      <br />
      <br />
      <textarea
        type="text"
        value={inputValue2}
        placeholder='Enter Text'
        rows={5}
        cols={30}
        onChange={(e) => setInputValue2(e.target.value)}
      />
      <br />
      <button className='btn btn-warning text-light shadow my-5' onClick={saveDataToFirestore}>Add That To News</button>
    </div>
  );
}

export default AdminPage;