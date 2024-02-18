import { useContext } from 'react';
import { UserStateContext } from './context';

function Details() {
  const context = useContext(UserStateContext);
  return (
    <div className="container">
      <h2>User Details</h2>
      <div className="user-info">
        <div>First Name: {context.value.userInfo.firstName}</div>
        <div>Last Name: {context.value.userInfo.lastName}</div>
        <div>Parent Name: {context.value.userInfo.parentName}</div>
        <div>Phone Number: {context.value.userInfo.phoneNumber}</div>
        <div>Email: {context.value.userInfo.email}</div>
        <div>Address: {context.value.userInfo.address}</div>
      </div>
      <div className="members-details">
        {context.value.members.map((item) => {
          return (
            <div className="user-info display-flex">
              <div>{item.relation}</div>
              <div>{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Details;
