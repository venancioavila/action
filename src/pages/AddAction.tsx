import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import theme from '../theme';
import Text from '../commons/Text';
import Space from '../commons/Space';
import AddModal from '../commons/AddModal';
import Scroll from '../commons/Scroll';
import AddModalDHT from '../commons/AddDHTModal';
import AddAnalogicModal from '../commons/AddAnalogicModal';
import AddServoModal from '../commons/AddServoModal';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Wrapper = styled.View`
  flex: 1;
  flex-direction: column;
  background: ${(p) => p.theme.background};
  padding-top: 30px;
`;

const RowContent = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 15px;
`;

const RowContentTitle = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
  flex-wrap: wrap;
  /* margin-top: 15px; */
`;

const Square = styled.View<Styles>`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  background: ${(p) => p.color};
`;

const ActionsWrapper = styled.View`
  background: ${(p) => p.theme.lightBackground};
  width: 95%;
  border-radius: 7px;
  padding: 15px 20px 15px 20px;
`;

interface Styles {
  color?: string;
}

const AddAction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleDht, setIsVisibleDht] = useState(false);
  const [isVisibleAnalogic, setIsVisibleAnalogic] = useState(false);
  const [isVisibleServo, setIsVisibleServo] = useState(false);

  return (
    <Wrapper>
      <Scroll>
        <AddModal
          onBackdropPress={() => setIsVisible(false)}
          onBackButtonPress={() => setIsVisible(false)}
          close={() => setIsVisible(false)}
          active={isVisible}
        />

        <AddModalDHT
          onBackdropPress={() => setIsVisibleDht(false)}
          onBackButtonPress={() => setIsVisibleDht(false)}
          close={() => setIsVisibleDht(false)}
          active={isVisibleDht}
        />

        <AddAnalogicModal
          onBackdropPress={() => setIsVisibleAnalogic(false)}
          onBackButtonPress={() => setIsVisibleAnalogic(false)}
          close={() => setIsVisibleAnalogic(false)}
          active={isVisibleAnalogic}
        />

        <AddServoModal
          onBackdropPress={() => setIsVisibleServo(false)}
          onBackButtonPress={() => setIsVisibleServo(false)}
          close={() => setIsVisibleServo(false)}
          active={isVisibleServo}
        />

        <ActionsWrapper>
          <RowContentTitle>
            <Text size={25} bold color={theme.text}>
              My Actions
            </Text>
          </RowContentTitle>

          <RowContent onPress={() => setIsVisible(true)}>
            <Square color={theme.primary}>
              <Icon size={20} name="lightbulb" color={theme.text} />
            </Square>
            <Space width={10} />
            <Text size={18} color={theme.text}>
              Digital action
            </Text>
          </RowContent>

          <RowContent onPress={() => setIsVisibleAnalogic(true)}>
            <Square color={theme.secundary}>
              <Icon size={20} name="sliders-h" color={theme.text} />
            </Square>
            <Space width={10} />
            <Text size={18} color={theme.text}>
              Analogic action
            </Text>
          </RowContent>

          <RowContent onPress={() => setIsVisibleDht(true)}>
            <Square color={theme.quarternary}>
              <Icon size={20} name="cloud-sun-rain" color={theme.text} />
            </Square>
            <Space width={10} />
            <Text size={18} color={theme.text}>
              DHT11 action
            </Text>
          </RowContent>

          <RowContent onPress={() => setIsVisibleServo(true)}>
            <Square color={theme.terceary}>
              <Icon size={20} name="cogs" color={theme.text} />
            </Square>
            <Space width={10} />
            <Text size={18} color={theme.text}>
              Servo engine action
            </Text>
          </RowContent>
          <Space width={10} />
        </ActionsWrapper>
      </Scroll>
    </Wrapper>
  );
};

export default AddAction;
