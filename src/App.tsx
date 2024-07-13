import React, { useState, useCallback } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { questions, Question } from "./questions";

interface QuestionCardProps {
  question: Question;
  onNext: () => void;
  onBefore: () => void;
  onAnswerChange: (value: string) => void;
  answerValue: string;
}
const QuestionCard = React.memo<QuestionCardProps>(
  ({ question, onNext, onBefore, onAnswerChange, answerValue }) => (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "400px" }}
        src="lamp_majin.png"
      />
      <Stack>
        <CardBody>
          <Heading>{question.title}</Heading>
          <Text py="2">{question.detail}</Text>
          <Textarea
            value={answerValue}
            onChange={(e) => onAnswerChange(e.target.value)}
          />
        </CardBody>
        <CardFooter>
          <Button variant="solid" colorScheme="blue" onClick={onBefore}>
            Before Step
          </Button>
          <Button variant="solid" colorScheme="blue" onClick={onNext}>
            Next Step
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  )
);

const App: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const currentQuestion: Question | undefined = questions[currentQuestionIndex];

  const handleBeforeQuestion = useCallback(() => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  }, []);
  const handleNextQuestion = useCallback(() => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  }, []);

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
  const showAnswer = () => {
    console.log(answers);
  };

  return (
    <Flex flexDirection="column" minHeight="100vh">
      <Header />
      <VStack flex={1} p={6} spacing={4}>
        <QuestionCard
          question={currentQuestion}
          onNext={handleNextQuestion}
          onBefore={handleBeforeQuestion}
          onAnswerChange={handleAnswerChange}
          answerValue={answers[currentQuestionIndex] || ""}
        />
        <Button variant="solid" colorScheme="blue" onClick={showAnswer}>
          Show Answer
        </Button>
      </VStack>
      <Footer />
    </Flex>
  );
};

export default App;
