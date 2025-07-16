export interface QuestionProps {
  mark: 'A' | 'B' | 'C' | 'D';
  label: string;
}

export interface QuestionAnswerProps {
  id: string;
  questionOptions: QuestionProps[];
  question: string;
  answer: string;
}
