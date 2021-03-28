import styled from 'styled-components';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../constants/types';

const Piece = styled.div`
  opacity: ${({ isDragging }) => (isDragging ? 0.5 : 1)};
  font-size: 10rem;
  font-weight: bold;
  cursor: move;
`;

export default function Knight() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Piece ref={drag} isDragging={isDragging}>
      ♘
    </Piece>
  );
}
