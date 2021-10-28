import React, {useState} from 'react';
import firebase from "../service/Firestore";
import 'firebase/firestore';

export function User() {
  const [form, setForm] = useState({fullname: '', email: ''})

  const updateForm = (e: any) => {
    setForm({
      ...form,
      [ e.target.name]: e.target.value
    });
  }

  function addUser(e: any){
    e.preventDefault();
    const db = firebase.firestore();

    const userRef = db.collection("users").add({
      fullname: form.fullname,
      email: form.email
    });
  };

  return (
    <form onSubmit={e => addUser(e)}>
      <input 
        type="text"
        name="fullname"
        placeholder="Full name"
        onChange={e => updateForm(e)}
        value={form.fullname}
      />
      <input 
        type="text"
        name="email"
        placeholder="Email"
        onChange={e => updateForm(e)}
        value={form.email}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
