import styled from 'styled-components';
import Square from './Square';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../constants/types';
import { canMoveKnight, moveKnight } from '../mock/observe';

const Dropzone = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const DragBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  opacity: 0.5;
  background-color: ${({ canDrop }) => (canDrop ? 'yellow' : 'red')};
`;

export default function BoardSquare({ x, y, children }) {
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: ItemTypes.KNIGHT,
      drop: () => {
        canMoveKnight(x, y) && moveKnight(x, y);
      },
      canDrop: () => canMoveKnight(x, y),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [x, y]
  );

  const black = (x + y) % 2 === 1;
  return (
    <Dropzone ref={drop}>
      <Square black={black}>{children}</Square>
      {isOver && <DragBackground canDrop={canDrop} />}
    </Dropzone>
  );
}
