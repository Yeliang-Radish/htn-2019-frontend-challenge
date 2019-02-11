import {
  TextQuestion,
  LongTextQuestion,
  SelectQuestion
} from "./question_interfaces";

export const questionParser = (
  question: TextQuestion | LongTextQuestion | SelectQuestion
) => {
  // This function takes a question and returns component specific to that question type
  console.log("type", question.type);
};
