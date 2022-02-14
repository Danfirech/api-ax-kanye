import React from "react";
import axios from "axios";

const axios = require("axios");

axios({
  method: get,
  url: "https://api.kanye.rest/",
}).then(function (resposne) {
  console.log(response.data);
});
