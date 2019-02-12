import { Question } from "./question_interfaces";
import TextComponent from "../components/form_creation/text_component";
import LongTextComponent from "../components/form_creation/long_text_component";
import SelectComponent from "../components/form_creation/select_component";

const questionParser = (qset: Question[]) => {
  // This function takes a question and returns component specific to that question type
  let formCreater: any[] = [];
  qset.forEach((q: Question) => {
    if (q.type === "text") {
      formCreater.push(TextComponent(q));
    } else if (q.type === "longText") {
      formCreater.push(LongTextComponent(q));
    } else if (q.type === "select") {
      formCreater.push(SelectComponent(q));
    } else {
      console.log("AEEEERFEFAF");
    }
  });

  console.log(formCreater);
  return formCreater;
};

export default questionParser;
