import "./App.css";
import { Fragment, useState } from "react";
import UserForm from "./components/UserForm";
import Modal from "./components/Modal";
import UserList from "./components/UserList";

function App() {
  const [userList, setUserList] = useState([]);
  const [userDetails, setUserDetails] = useState({
    userName: null,
    age: null,
  });
  const addUserDetails = (userDetails) => {
    const { userName, age } = userDetails;
    if (userName && age > 0) {
      setUserList([
        {
          userName: userName,
          age: age,
        },
        ...userList,
      ]);
    }
    setUserDetails({
      userName: userName,
      age: age,
    });
  };

  const closeModal = (e) => {
    e.preventDefault();
    setUserDetails({
      userName: null,
      age: null,
    });
  };

  return (
    <Fragment>
      <UserForm addUserDetails={addUserDetails}></UserForm>
      <UserList userList={userList}></UserList>      
      <Modal userDetails={userDetails} closeModal={closeModal}></Modal>
    </Fragment>
  );
}

export default App;
