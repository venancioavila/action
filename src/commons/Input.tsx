import React from 'react';
import styled from 'styled-components/native';
import Text from '../commons/Text';
import theme from '../theme';

const Wrapper = styled.View`
  width: 100%;
  height: 50px;
  border-bottom-width: 1px;
`;

const TextInput = styled.TextInput`
  width: 100%;
  height: 50px;
  padding-horizontal: 10px;
  color: ${p => p.theme.text};
  font-size: 20px;
`;

interface Props {
  placeholder?: string;
  label?: string;
  keyboardType?: 'numeric' | 'default';
  onChangeText?: any;
  value: string;
  secureTextEntry?: boolean;
}

const Input = ({
  placeholder,
  keyboardType,
  onChangeText,
  value,
  secureTextEntry,
}: Props) => (
  <TextInput
    secureTextEntry={secureTextEntry}
    value={value}
    onChangeText={onChangeText}
    keyboardType={keyboardType}
    placeholder={placeholder}
    placeholderTextColor="rgba(255,255,255, 0.5)"
  />
);

export default Input;
