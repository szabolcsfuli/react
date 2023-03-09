import { Fragment, useRef } from "react";
const UserForm = (props) => {
  const userNameRef = useRef();
  const ageRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    props.addUserDetails({
      userName: userNameRef.current.value,
      age: ageRef.current.value,
    });
    userNameRef.current.value = "";
    ageRef.current.value = "";
  };

  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <div>
          <label>Username</label>
          <input ref={userNameRef} />
        </div>
        <div>
          <label>Age</label>
          <input type="number" ref={ageRef} />
        </div>
        <button type="submit">Add User</button>
      </form>
    </Fragment>
  );
};

export default UserForm;
