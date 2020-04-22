import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.ScrollView<Props>`
  width: 100%;
  background: ${(p) => (p.background ? p.background : 'transparent')};
`;

const WrapperView = styled.View`
  width: 100%;
  padding: 2px;
  flex-direction: column;
  align-items: center;
`;

interface Props {
  children?: any;
  background?: string;
}

const Space = ({children, background}: Props) => (
  <Wrapper background={background}>
    <WrapperView>{children}</WrapperView>
  </Wrapper>
);

export default Space;
