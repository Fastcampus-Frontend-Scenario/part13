import type { Board, Square } from "../Model";
import type { Repository } from "../Repository";
import { isNextTurnX, calculateWinnerOnBoard } from "./Util";

export async function clickOnBoard(
  indexOnBoard: number,
  repository: Repository
) {
  const { board, stepNumber } = await repository.getCurrentStep();
  const newBoard = board.slice();
  if (calculateWinnerOnBoard(newBoard) || newBoard[indexOnBoard]) {
    return;
  }
  newBoard[indexOnBoard] = isNextTurnX(stepNumber) ? "X" : "O";
  await repository.deleteStepsAfterCurrentStepNumber();
  await repository.addStep(newBoard);
  await repository.setCurrentStepNumber(stepNumber + 1);
}
