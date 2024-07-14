import {
  Button,
  Stack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { questions } from "../questions";
import React from "react";

interface ResultTableProps {
  answers: string[];
  onBefore: () => void;
}

const ResultTable = React.memo<ResultTableProps>(({ answers, onBefore }) => {
  return (
    <Stack>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>問</Th>
            <Th>答え</Th>
          </Tr>
        </Thead>
        <Tbody>
          {questions.map((question, index) => {
            return (
              <Tr key={index}>
                <Td>{question.id}</Td>
                <Td>{question.title}</Td>
                <Td>{answers[index]}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <Button onClick={onBefore}>Go back</Button>
    </Stack>
  );
});

export default ResultTable;
