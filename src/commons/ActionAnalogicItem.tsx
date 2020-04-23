import React, {useState} from 'react';
import styled from 'styled-components/native';
import Text from '../commons/Text';
import theme from '../theme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Space from './Space';
import api from '../services/api';
import Slider from '@react-native-community/slider';
import {remove} from '../services/Storage';

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 140px;
  background: ${(p) => p.theme.secundary};
  border-color: ${(p) => p.theme.background};
  border-radius: 7px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 2%;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  elevation: 5;
`;

const InfoWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const DeleteWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

const Touchable = styled.TouchableOpacity`
  height: 30px;
  width: 30px;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 70px;
`;

interface Props {
  name: string;
  gpio: any;
  id: string;
}

const percentage = (partialValue: number, totalValue: number) => {
  const total: any = (100 * partialValue) / totalValue;
  return parseInt(total);
};

const ActionItem = ({name, gpio, id}: Props) => {
  const [delet, setDelet] = useState(false);
  const [value, setValue] = useState(0);

  const onDelete = async (id: string) => {
    remove(id);
  };

  const addDelet = () => {
    setDelet(true);
    setTimeout(() => {
      setDelet(false);
    }, 5000);
  };

  const onAction = async (pwm: number) => {};

  return (
    <Wrapper>
      <InfoWrapper>
        <Text color={theme.text} size={30}>
          {`${percentage(value, 255)}%`}
        </Text>
        <Space height={5} />
        <TextWrapper>
          <Text color={theme.text}>{name}</Text>
          <Text bold color={theme.text}>{`GPIO: ${gpio}`}</Text>
        </TextWrapper>
      </InfoWrapper>
      <Slider
        style={{width: '100%', height: 30}}
        minimumValue={0}
        maximumValue={255}
        minimumTrackTintColor={theme.text}
        maximumTrackTintColor={theme.background}
        thumbTintColor="#FFFF"
        onValueChange={(e: any) => {
          onAction(parseInt(e));
          setValue(parseInt(e));
        }}
      />
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
      </DeleteWrapper>
    </Wrapper>
  );
};

export default ActionItem;
