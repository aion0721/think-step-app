import React, { useState, useCallback } from "react";
import { Flex, VStack } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { questions, Question } from "./questions";
import QuestionCard from "./components/QuestionCard";
import ResultTable from "./components/ResultTable";

const App: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const currentQuestion: Question | undefined = questions[currentQuestionIndex];

  const handleAnswerChange = useCallback(
    (newAnswer: string) => {
      setAnswers((prevAnswers) => {
        const newAnswers = [...prevAnswers];
        newAnswers[currentQuestionIndex] = newAnswer;
        return newAnswers;
      });
    },
    [currentQuestionIndex]
  );
  const handleBeforeQuestion = useCallback(() => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  }, []);
  const handleNextQuestion = useCallback(() => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  }, []);

  return (
    <Flex flexDirection="column" minHeight="100vh">
      <Header />
      <VStack flex={1} p={6} spacing={4}>
        {currentQuestionIndex < questions.length ? (
          <QuestionCard
            question={currentQuestion}
            onNext={handleNextQuestion}
            onBefore={handleBeforeQuestion}
            onAnswerChange={handleAnswerChange}
            answerValue={answers[currentQuestionIndex] || ""}
            currentQuestionIndex={currentQuestionIndex}
          />
        ) : (
          <ResultTable answers={answers} onBefore={handleBeforeQuestion} />
        )}
      </VStack>
      <Footer />
    </Flex>
  );
};

export default App;
