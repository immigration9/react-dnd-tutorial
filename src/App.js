import styled from 'styled-components';
import Board from './components/Board';

const Container = styled.div`
  height: 100%;
`;

function App({ knightPosition }) {
  return (
    <Container>
      <Board knightPosition={knightPosition} />
    </Container>
  );
}

export default App;
