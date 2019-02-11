import TextComponent from "../components/form_creation/text_component";
import LongTextComponent from "../components/form_creation/long_text_component";
import SelectComponent from "../components/form_creation/select_component";

var json = {
  id: "generalInfo",
  label: "General Info",
  questions: [
    {
      id: "name",
      label: "What is your name?",
      type: "text",
      placeholder: "John Doe"
    },
    {
      id: "email",
      label: "What is your email?",
      type: "text",
      placeholder: "hello@hackthenorth.com"
    },
    {
      id: "shirtSize",
      label: "What is your shirt size?",
      type: "select",
      options: [
        {
          label: "Small",
          value: "small"
        },
        {
          label: "Medium",
          value: "medium"
        },
        {
          label: "Large",
          value: "large"
        }
      ]
    },
    {
      id: "travellingFrom",
      label: "Where are you travelling from?",
      type: "text",
      placeholder: "Montreal, Quebec"
    },
    {
      id: "needsReimbursement",
      label: "Will you need a travel reimbursement?",
      type: "select",
      options: [
        {
          label: "Yes",
          value: "y"
        },
        {
          label: "No",
          value: "n"
        }
      ]
    },
    {
      id: "goal",
      label: "What is your goal to accomplish Hack the North?",
      type: "longText",
      placeholder: "Build something cool!"
    }
  ]
};

const Creator = (): any => {
  let qset: any = json;
  let formCreator: any[] = [];
  qset.questions.forEach((q: any) => {
    if (q.type === "text") {
      formCreator.push(TextComponent(q));
    } else if (q.type === "select") {
      formCreator.push(LongTextComponent(q));
    } else if (q.type === "longText") {
      formCreator.push(SelectComponent());
    } else {
      console.log("AAAAAAEEEEEEEEEEEEFFF");
    }
  });
  console.log(formCreator);
  return formCreator;
};

export default Creator;
