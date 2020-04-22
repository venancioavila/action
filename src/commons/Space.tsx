import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View<Props>`
  width: ${p => (p.width ? p.width : 0)}px;
  height: ${p => (p.height ? p.height : 0)}px;
`;

interface Props {
  width?: number;
  height?: number;
}

const Space = ({height, width}: Props) => (
  <Wrapper height={height} width={width} />
);

export default Space;
