import { Repository } from "./Repository";

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

export async function jumpToStep(
  stepNumber: number,
  repository: Repository
): Promise<void> {
  return repository.setCurrentStepNumber(stepNumber);
}