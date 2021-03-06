import playGame from "..";
import random from "../random.js";

const condition = "Find the greatest common divisor of given numbers.";
const findGcd = (numY, numX) => {
  while (numY !== 0) {
    numY = numX % (numX = numY);
  }
  return numX;
};
const generateQuestionAndCorrectAnswer = () => {
  let numX = random(1, 20);
  let numY = random(1, 20);
  const question = `${numX} ${numY}`;
  const correctAnswer = findGcd(numX, numY);
  return [question, String(correctAnswer)];
};

const run = () => {
  playGame(condition, generateQuestionAndCorrectAnswer);
};
export default run;
