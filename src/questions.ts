// src/questions.ts

export interface Question {
  id: number;
  title: string;
  details: string[];
}

export const questions: Question[] = [
  {
    id: 1,
    title: "背景",
    details: ["その問題の背景は？", "なぜそれをしたいのか"],
  },
  {
    id: 2,
    title: "ゴール",
    details: [
      "どうなったらゴール、達成といえるか",
      "特に、ゴールは目的になっているか。",
      "（手段フォーカスされて「〇〇すること」にこだわってないか）",
      "期限はあるか",
      "どこまで決めればよいのか",
    ],
  },
  { id: 3, title: "現状", details: ["現状どういう状況か"] },
  { id: 4, title: "打ち手", details: ["何をするのか", "代替策はあるか"] },
  {
    id: 5,
    title: "効果/影響/障害",
    details: [
      "どういう効果があるのか",
      "それをすると、何が変わるのか（Asis-Tobe）",
      "誰が賛成か、誰が反対か",
      "どのような障害、問題が起きるか",
      "どれぐらいのコストがかかるか",
    ],
  },
  {
    id: 6,
    title: "進め方",
    details: [
      "どういう流れで進めていくか",
      "意思決定者はだれか",
      "何があれば意思決定できるか",
      "体制は？",
    ],
  },
  {
    id: 7,
    title: "その他",
    details: ["その他考える論点は", "他社事例はあるか"],
  },
];
