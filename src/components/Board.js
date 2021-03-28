import { useMemo } from 'react';
import styled from 'styled-components';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import BoardSquare from './BoardSquare';
import Square from './Square';
import Knight from './Knight';

import { canMoveKnight, moveKnight } from '../mock/observe';

const SquareWrapper = styled.div`
  width: 12.5%;
  height: 12.5%;
`;

function renderSquare(i, knightPosition) {
  const x = i % 8;
  const y = Math.floor(i / 8);

  return (
    <SquareWrapper key={i}>
      <BoardSquare x={x} y={y}>
        {renderPiece(x, y, knightPosition)}
      </BoardSquare>
    </SquareWrapper>
  );
}

function renderPiece(x, y, [knightX, knightY]) {
  if (knightX === x && knightY === y) {
    return <Knight />;
  }
}

function handleSquareClick(toX, toY) {
  if (canMoveKnight(toX, toY)) {
    moveKnight(toX, toY);
  }
}

export default function Board({ knightPosition }) {
  const squares = useMemo(() => {
    return new Array(64)
      .fill('')
      .map((sqr, idx) => renderSquare(idx, knightPosition));
  }, [knightPosition]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {squares}
      </div>
    </DndProvider>
  );
}
