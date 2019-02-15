import { Question } from "./question_interfaces";
import TextComponent from "../components/form_creation/text_component";
import LongTextComponent from "../components/form_creation/long_text_component";
import SelectComponent from "../components/form_creation/select_component";

const questionParser = (
  qset: Question[],
  updateResponseText: any,
  responses: string[]
) => {
  // This function takes a question and returns component specific to that question type
  let formCreater: any[] = [];
  let i = 0;
  qset.forEach((q: Question) => {
    if (q.type === "text") {
      formCreater.push(TextComponent(q, updateResponseText, responses[i]));
    } else if (q.type === "longText") {
      formCreater.push(LongTextComponent(q, updateResponseText, responses[i]));
    } else if (q.type === "select") {
      formCreater.push(SelectComponent(q, updateResponseText, responses[i]));
    } else {
      console.log("AEEEERFEFAF");
    }
    i++;
  });

  // console.log(formCreater);
  return formCreater;
};

export default questionParser;
