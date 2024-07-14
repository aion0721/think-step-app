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
  { id: 3, title: "現状", detail: "現状どういう状況か" },
  { id: 4, title: "打ち手", detail: "何をするのか" },
  { id: 5, title: "効果・影響・障害", detail: "どういう効果があるのか" },
  { id: 6, title: "流れ", detail: "どういう流れで進めていくか" },
  { id: 7, title: "体制", detail: "どういう体制で進める？" },
  { id: 8, title: "その他", detail: "その他考える論点は" },
];
