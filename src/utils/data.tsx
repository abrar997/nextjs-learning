import { v4 as uuid } from "uuid";

export const articles = [
  { id: 1, userId: uuid(), title: "html", body: "hyperText markup language" },
  { id: 2, userId: uuid(), title: "css", body: "cascading style sheet" },
  { id: 3, userId: uuid(), title: "js", body: "javascript" },
  { id: 4, userId: uuid(), title: "ts", body: "type script" },
  {
    id: 5,
    userId: uuid(),
    title: "tailwind css",
    body: "framer work for styling ",
  },
  {
    id: 6,
    userId: uuid(),
    title: "next js",
    body: "advanced features for react js can create full stack app",
  },
];
