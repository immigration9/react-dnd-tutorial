import styled, { css } from 'styled-components';

const SquareContainer = styled.div`
  ${({ black }) => css`
    background-color: ${black ? 'black' : 'white'};
    color: ${black ? 'white' : 'black'};
  `}
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Square({ black, children, onClick }) {
  return (
    <SquareContainer black={black} onClick={onClick}>
      {children}
    </SquareContainer>
  );
}
