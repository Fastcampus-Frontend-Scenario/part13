import { Board } from "./Model";

export type Step = {
  board: Board;
  stepNumber: number;
  numOfAllSteps: number;
};

/**
 * Repository 는 TicTacToe의 step history를 관리 
 * 각 단계는 보드로 구성됩니다.
 */
export interface Repository {
  getCurrentStep(): Promise<Step>;
  setCurrentStepNumber(stepNumber: number): Promise<void>;
  deleteStepsAfterCurrentStepNumber(): Promise<void>;
  addStep(board: Board): Promise<void>;
}