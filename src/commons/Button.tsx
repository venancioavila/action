import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.TouchableOpacity<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 60px;
  background: ${p => (p.disabled ? p.theme.danger : p.theme.secundary)};
  border-radius: 7px;
  ${({buttonCss}) => buttonCss};
`;

interface Props {
  children?: any;
  buttonCss?: any;
  onPress?: any;
  disabled?: boolean;
}

const Button = ({children, buttonCss, onPress, disabled}: Props) => (
  <Wrapper disabled={disabled} onPress={onPress} buttonCss={buttonCss}>
    {children}
  </Wrapper>
);

export default Button;
