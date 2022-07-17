import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../FirebaseManager/firebaseStore";
import Loading from "../Loading/Loading";
import PeopleDetails from "./PeopleDetails/PeopleDetails";
const FindPeople = () => {
  const [users,setUsers]=useState([])
  useEffect(() => {
    const usersCollection=collection(db,'users')
    const orderQueryCollection = query(usersCollection,orderBy('name','asc'))
    onSnapshot(orderQueryCollection, (res) => {
      setUsers(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);
  console.log(users);
  return <>
    {
      users.length>0 ?
      <div className="flex gap-2 m-2">
        {users.map(user=><PeopleDetails key={user.id} user={user}/>)}
      </div>
      :
      <Loading text='People Loading'/>
    }
  </>;
};
export default FindPeople;
