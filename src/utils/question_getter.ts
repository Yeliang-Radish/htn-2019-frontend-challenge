import axios from "axios";

const getQuestions = async () => {
  // Get the data from the website
  let jsonURL = "https://hackthenorth.com/fe-questions.json";
  try {
    let response = await axios.get(jsonURL);
    return response.data;
  } catch (e) {
    console.log("This aint it boss. It don't work who you lookin at");
  }
};

export default getQuestions;
