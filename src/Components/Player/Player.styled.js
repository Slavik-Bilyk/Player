import ReactPlayer from 'react-player'
import styled from 'styled-components';

export const PlayerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 56.25%; 
`;
export const StyledPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  iframe {
    border-radius: 10px;
  }
`;
