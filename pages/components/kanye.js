import React from "react";
import axios from "axios";

const API = () => {
  const instanceData = () => {};

  const getData = () => {
    axios.get("https://reqres.in/api/users");
  };

  const postData = () => {};

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
