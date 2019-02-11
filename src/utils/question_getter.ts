import axios from "axios";
import { ApiResponse } from "./question_interfaces";

const getQuestions = async () => {
  let jsonURL = "https://hackthenorth.com/fe-questions.json";
  try {
    let response = await axios.get(jsonURL);
    return response.data;
  } catch (e) {
    console.log("This aint it boss. It don't work who you lookin at");
  }
};

export default getQuestions;
