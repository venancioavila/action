import React, {useState} from 'react';
import styled from 'styled-components/native';
import Input from '../commons/Input';
import Space from '../commons/Space';
import Button from '../commons/Button';
import Text from '../commons/Text';
import theme from '../theme';
import Modal from 'react-native-modal';
import isIp from 'is-ip';

const Wrapper = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  background: ${(p) => p.theme.background};
  padding-horizontal: 20px;
  height: 300px;
  border-width: 1px;
  border-color: ${(p) => p.theme.lightBackground};
  border-radius: 7px;
`;

const MessageWrapper = styled.View`
  width: 100%;
  padding-horizontal: 10px;
`;

const Action = ({isVisible, setIsVisible}: any) => {
  const [ip, setIp] = useState('');
  const [ipValidade, setIpValidate] = useState(false);
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    if (isIp(ip)) {
      setIsVisible();
    } else {
      setIpValidate(true);
      console.log('erro');
    }
  };

  return (
    <Modal isVisible={isVisible}>
      <Wrapper>
        <Space height={20} />
        <Text size={20} bold color={theme.text}>
          Add a raspberry.
        </Text>
        <Space height={30} />
        <Input
          value={ip}
          onChangeText={setIp}
          keyboardType="numeric"
          placeholder="Raspberry IP"
        />
        {ipValidade && (
          <MessageWrapper>
            <Text color={theme.danger}>Invalid IP</Text>
          </MessageWrapper>
        )}
        <Space height={10} />
        <Input
          value={password}
          secureTextEntry
          onChangeText={setPassword}
          placeholder="SSH pass"
        />
        <Space height={30} />
        <Button
          onPress={() => {
            onSubmit();
          }}>
          <Text size={20} bold color={theme.text}>
            OK
          </Text>
        </Button>
      </Wrapper>
    </Modal>
  );
};

export default Action;
