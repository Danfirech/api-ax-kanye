import React from "react";
import axios from "axios";

const API = () => {
  axios.defaults.baseURL = "https://reqres.in/api";

  const instanceData = () => {};

  const getData = () => {
    axios.get("/users").then((res) => console.log(res.data.data));
  };

  const postData = () => {
    axios
      .post("/users", {
        name: "John Doe",
        job: "junior Developer",
      })
      .then((res) => console.log(res.data));
  };

  const updateData = () => {};

  const deleteData = () => {};

  const multiple = () => {};

  return (
    <>
      <button onClick={getData}>GET</button>
      <button onClick={postData}>POST</button>
      <button onClick={updateData}>UPDATE</button>
      <button onClick={deleteData}>DELETE</button>
      <button onClick={instanceData}>INSTANCE</button>
      <button onClick={multiple}>MULTIPLE</button>
    </>
  );
};

export default API;
