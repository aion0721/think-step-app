import React from "react";
import { Question } from "../questions";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  ListItem,
  Stack,
  Textarea,
  UnorderedList,
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
          alt="majin"
          src="lamp_majin.png"
        />
        <Stack direction="column" w={{ sm: "100%", md: "50%" }}>
          <CardBody>
            <Heading>{question.title}</Heading>
            <UnorderedList p={4}>
              {question.details.map((detail, index) => (
                <ListItem key={index}>{detail}</ListItem>
              ))}
            </UnorderedList>
            <Textarea
              value={answerValue}
              aria-label="AnswerArea"
              placeholder="回答を記載"
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
