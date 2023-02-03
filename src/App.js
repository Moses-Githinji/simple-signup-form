import React from "react";
import axios from "axios";
import "./App.css";
import SignUp from "./components/signup/SignUp";
import Users from "./components/users/Users";

const App = () => {
  const [data, setData] = React.useState(null);

  const url = "http://localhost:8100/api/users";

  React.useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, []);

  console.log(data);

  if (!data) return null;
  return (
    <>
      <div className="app-title-container">
        <h3 className="app-title">Simple Register Form</h3>
      </div>
      <SignUp />
      <Users />
    </>
  );
};

export default App;
