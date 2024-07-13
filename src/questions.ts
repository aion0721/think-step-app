// src/questions.ts

export interface Question {
  id: number;
  title: string;
  detail: string;
}

export const questions: Question[] = [
  { id: 1, title: "背景", detail: "その問題・課題の背景は？" },
  {
    id: 2,
    title: "ゴール",
    detail: "その問題・課題に対してどうなったらゴール、達成といえるか",
  },
  { id: 3, title: "きっかけ", detail: "その問題となった原因・きっかけは何か" },
];
