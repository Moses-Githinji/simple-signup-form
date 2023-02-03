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
      {data.map((user) => (
        <div className="individual-user-card" key={user._id}>
          <p className="username">{user.username}</p>
          <p className="username">{user.email}</p>
          <p className="username">{user.phoneNumber}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
