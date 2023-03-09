import { Fragment } from "react";

const UserList = (props) => {
  return (
    <Fragment>
      {props.userList.map((item, index) => (
        <div key={index}>{item.userName} ({item.age})</div>
      ))}
    </Fragment>
  );
};

export default UserList;