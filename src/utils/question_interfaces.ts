// This is TypeScript, if you don't know TypeScript no problem! You can read up about
// types here https://www.typescriptlang.org/docs/handbook/advanced-types.html or just
// have a look at the sample data.

// All questions of the form will be one of the following types
export type QuestionType = "text" | "longText" | "select";

// Shared properties of all question types
export interface BaseQuestion {
  id: string; // A unique identifier for the question
  type: QuestionType; // The type of the question
  label: string; // The prompt for the question
}

// A single line text input
export interface TextQuestion extends BaseQuestion {
  placeholder: string; // The prompt in the text box
  type: "text";
}

// A multiline text input
export interface LongTextQuestion extends BaseQuestion {
  placeholder: string; // The prompt in the text area
  type: "longText";
}

// A potential answer to a SelectQuestion
export interface SelectOption {
  label: string;
  value: string;
}

// An input where the user selects one option from a list of options
// This could be implemented as a select, series of radio buttons, etc...
export interface SelectQuestion extends BaseQuestion {
  options: SelectOption[]; // The options for the question
  type: "select";
}

export type Question = TextQuestion | LongTextQuestion | SelectQuestion;

// A set of questions is a collection of questions that should be displayed together
// on the same page
export interface QuestionSet {
  id: string; // A unique identifier for the question set
  label: string; // The title of the question set
  questions: Question[]; // The questions for the set
}

// The response from the GET request will be an array of question sets
export type ApiResponse = QuestionSet[];
