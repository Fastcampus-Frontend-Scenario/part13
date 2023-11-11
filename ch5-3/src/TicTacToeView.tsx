import { Repository } from "./Repository";
import { useTicTacToeModelController } from "./TicTacToeModelController";

type TicTacToeViewProps = {
    repository: Repository;
};

export function TicTacToeView({ repository }: TicTacToeViewProps) {
    const { currentStep, handleClickOnBoard, handleJumpToStep } =
        useTicTacToeModelController(repository);

    if (!currentStep) {
        return null;
    }

    const winner = calculateWinnerOnBoard(currentStep.board);
    const xIsNext = isNextTurnX(currentStep.stepNumber);
    return (
        <div className="game">
            <div className="game-board">
                <BoardView board={currentStep.board} onClick={handleClickOnBoard} />
            </div>
            <div className="game-info">
                <StatusView winner={winner} xIsNext={xIsNext} />
                <JumpToStepButtons
                    numOfAllSteps={currentStep.numOfAllSteps}
                    onClick={handleJumpToStep}
                />
            </div>
        </div>
    );
}