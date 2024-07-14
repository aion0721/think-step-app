import React from "react";
import { Question } from "../questions";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

interface QuestionCardProps {
  question: Question;
  onAnswerChange: (value: string) => void;
  answerValue: string;
  currentQuestionIndex: number;
  onNext: () => void;
  onBefore: () => void;
}
const QuestionCard = React.memo<QuestionCardProps>(
  ({
    question,
    onAnswerChange,
    answerValue,
    currentQuestionIndex,
    onNext,
    onBefore,
  }) => {
    return (
      <Card
        direction={{ base: "column", md: "row" }}
        overflow="hidden"
        variant="outline"
        w="80%"
      >
        <Image
          objectFit="cover"
          w={{ sm: "100%", md: "50%" }}
          src="lamp_majin.png"
        />
        <Stack direction="column" w={{ sm: "100%", md: "50%" }}>
          <CardBody>
            <Heading>{question.title}</Heading>
            <Text py="2">{question.detail}</Text>
            <Textarea
              value={answerValue}
              onChange={(e) => onAnswerChange(e.target.value)}
            />
          </CardBody>
          <CardFooter>
            <Stack direction="row" spacing={4} justify="center" width="full">
              <Button
                variant="solid"
                colorScheme="blue"
                onClick={onBefore}
                isDisabled={currentQuestionIndex === 0}
              >
                Before Step
              </Button>
              <Button variant="solid" colorScheme="blue" onClick={onNext}>
                Next Step
              </Button>
            </Stack>
          </CardFooter>
        </Stack>
      </Card>
    );
  }
);

export default QuestionCard;
