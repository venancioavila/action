import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import Text from '../commons/Text';
import theme from '../theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Space from './Space';
import {ActivityIndicator} from 'react-native';

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  width: 45%;
  height: 140px;
  background: ${(p) => p.theme.quarternary};
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
  padding-top: 5px;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Touchable = styled.TouchableOpacity`
  height: 30px;
  width: 30px;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.View`
  justify-content: center;
  align-items: center;
  max-width: 70px;
`;

interface Props {
  name: string;
  gpio: any;
  id: string;
}

const DhtItem = ({name, gpio, id}: Props) => {
  const [delet, setDelet] = useState(false);
  const [dht, setDht] = useState<any>(null);

  const onRequestDht = async (pin: number) => {};

  const onDelete = async (id: string) => {};

  useEffect(() => {
    onRequestDht(gpio);
  }, []);

  const addDelet = () => {
    setDelet(true);
    setTimeout(() => {
      setDelet(false);
    }, 5000);
  };

  return (
    <Wrapper>
      <Column>
        {dht ? (
          <>
            <Text size={20} color={theme.text}>
              {`${dht.temperature}º C`}
            </Text>
            <Text size={20} color={theme.text}>
              {`${dht.humidity}% U`}
            </Text>
          </>
        ) : (
          <ActivityIndicator color={theme.text} />
        )}
        <Space height={5} />
        <TextWrapper>
          <Text color={theme.text}>{name}</Text>
          <Space height={5} />
          <Text bold color={theme.text}>{`GPIO: ${gpio}`}</Text>
        </TextWrapper>
      </Column>
      <Column>
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
        <Touchable onPress={() => onRequestDht(gpio)}>
          <Icon color={theme.lightBackground} name="redo-alt" size={30} />
        </Touchable>
      </Column>
    </Wrapper>
  );
};

export default DhtItem;
