import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import Text from '../commons/Text';
import theme from '../theme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Space from './Space';
import {remove} from '../services/Storage';

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  width: 45%;
  height: 140px;
  background: ${(p) => p.theme.primary};
  border-color: ${(p) => p.theme.background};
  border-radius: 7px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 2%;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  elevation: 5;
`;

const Column = styled.View`
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

const DeleteWrapper = styled.View`
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: flex-end;
`;

const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
`;

const Touchable = styled.TouchableOpacity`
  height: 30px;
  width: 30px;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.View`
  max-width: 80px;
`;

const Switch = styled.Switch``;

interface Props {
  name: string;
  gpio: any;
  id: string;
}

const onActive = async (pin: number) => {};

const onDeactive = async (pin: number) => {};

const ActionItem = ({name, gpio, id}: Props) => {
  const [power, setPower] = useState(false);
  const [delet, setDelet] = useState(false);

  const onDelete = async (id: string) => {
    remove(id);
  };

  useEffect(() => {
    if (power) {
      onActive(gpio);
    } else {
      onDeactive(gpio);
    }
  }, [power]);

  const addDelet = () => {
    setDelet(true);
    setTimeout(() => {
      setDelet(false);
    }, 5000);
  };

  return (
    <Wrapper>
      <Column>
        <Button
          onPress={() => {
            setPower(!power);
          }}>
          <Icon
            color={power ? theme.text : theme.background}
            size={40}
            name="lightbulb"
          />
        </Button>
        <Space height={5} />
        <TextWrapper>
          <Text color={theme.text}>{name}</Text>
        </TextWrapper>

        <Text bold color={theme.text}>{`GPIO: ${gpio}`}</Text>
      </Column>
      <DeleteWrapper>
        {delet ? (
          <Touchable onPress={() => onDelete(id)}>
            <Icon
              color={theme.lightBackground}
              name="exclamation-circle"
              size={30}
            />
          </Touchable>
        ) : (
          <Touchable onPress={() => addDelet()}>
            <Icon color={theme.lightBackground} name="trash-alt" size={30} />
          </Touchable>
        )}
        <Switch
          value={power}
          thumbColor={theme.lightBackground}
          trackColor={{true: theme.text, false: 'green'}}
          // @ts-ignore
          onChange={() => setPower(!power)}
        />
      </DeleteWrapper>
    </Wrapper>
  );
};

export default ActionItem;
