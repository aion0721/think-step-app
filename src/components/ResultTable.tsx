import {
  Button,
  ListItem,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  UnorderedList,
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
            <Th>概要</Th>
            <Th>答え</Th>
          </Tr>
        </Thead>
        <Tbody>
          {questions.map((question, index) => {
            return (
              <Tr key={index}>
                <Td>{question.id}</Td>
                <Td>{question.title}</Td>
                <Td>
                  <Popover>
                    <PopoverTrigger>
                      <Button>概要を開く</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverBody>
                        <UnorderedList>
                          {question.details.map((detail, index) => (
                            <ListItem key={index}>{detail}</ListItem>
                          ))}
                        </UnorderedList>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Td>
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
