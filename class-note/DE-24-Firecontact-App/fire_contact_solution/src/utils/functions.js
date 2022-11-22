import firebase from "./firebase";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  remove,
  update,
} from "firebase/database";
import { useEffect, useState } from "react";
import Toastify from "./Toastify";

export const AddUser = (info) => {
  const db = getDatabase(firebase);

  const userRef = ref(db, "users/");
  const newUserRef = push(userRef);

  set(newUserRef, {
    username: info.username,
    phoneNumber: info.phoneNumber,
    gender: info.gender,
  });
};

export const useFetch = () => {
  const [isLoadIng, setIsLoading] = useState(true);
  const [contactList, setContactList] = useState();
  useEffect(() => {
    const db = getDatabase(firebase);
    const userRef = ref(db, "users/");

    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = [];
      console.log(data);
      for (let id in data) {
        userArray.push({ id, ...data[id] });
      }
      console.log(userArray);
      setContactList(userArray);

      setIsLoading(false);
    });
  }, []);
  return { isLoadIng, contactList };
};

// veriyi silme

export const DeleteUser = (id) => {
  const db = getDatabase(firebase);
  remove(ref(db, "users/" + id));
  Toastify('Deleted')
};

export const UpdateUser = (info) => {
  const db = getDatabase(firebase);
  // const userRef = ref(db, "users/");
  const updates = {};

  updates["users/" + info.id] = info;

  return update(ref(db), updates);
};

//veriyi degistirme
