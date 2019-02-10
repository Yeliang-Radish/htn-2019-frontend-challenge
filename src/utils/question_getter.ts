import axios from "axios";
import { ApiResponse } from "./question_interfaces";

const getQuestions = () => {
  let jsonURL = "https://hackthenorth.com/fe-questions.json";
  axios
    .get(jsonURL)
    .then(response => {
      let data: ApiResponse = response.data;
      console.log(response);
      return data;
    })
    .catch(e => {
      console.log("Bollocks the website aint right boss");
    });
};

export default getQuestions;
