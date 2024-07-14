import React, { useState, useCallback } from "react";
import {
  Box,
  Flex,
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  Stepper,
  StepSeparator,
  StepStatus,
  StepTitle,
  VStack,
} from "@chakra-ui/react";
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
  const handleBeforeQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };
  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <Flex flexDirection="column" minHeight="100vh">
      <Header />
      <VStack flex={1} p={6} spacing={4}>
        <Stepper index={currentQuestionIndex} w="100%">
          {questions.map((question, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>
              <Box flexShrink="0">
                <StepTitle>{question.title}</StepTitle>
              </Box>
              <StepSeparator />
            </Step>
          ))}
        </Stepper>
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
