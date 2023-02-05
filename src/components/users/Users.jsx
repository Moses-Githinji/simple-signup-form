import React, { useEffect } from "react";
import axios from "axios";

const Users = () => {
  const [data, setData] = React.useState(null);

  const url = "http://localhost:8100/api/users";

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, []);

  console.log(data);

  if (!data) return null;

  return (
    <div className="all-registered-users-container">
      {/* {data.map((user) => (
        <div className="individual-user-card" key={user._id}>
          <p className="username">{user.username}</p>
          <p className="username">{user.email}</p>
          <p className="username">{user.phoneNumber}</p>
        </div> */}

      <table className="users-data">
        <thead>
          <tr>Username</tr>
          <tr>Email</tr>
          <tr>Phone Number</tr>
        </thead>
        {data.map((user) => (
          <tbody key={user._id} className="all-data">
            <tr>
              <td>{user.username}</td>
            </tr>
            <tr>
              <td>{user.email}</td>
            </tr>
            <tr>
              <td className="table-data">{user.phoneNumber}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Users;
