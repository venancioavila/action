import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../theme';
import Text from '../commons/Text';
import AddModal from './AddModal';

const Wrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 120px;
  background: ${(p) => p.theme.inputBackground};
  border-color: ${(p) => p.theme.background};
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 2%;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  elevation: 5;
`;

const AddActionItem = () => {
  const [visible, setIsVisible] = useState(false);
  return (
    <>
      <Wrapper onPress={() => setIsVisible(true)}>
        <Icon color={theme.background} name="plus" size={30} />
        <Text color={theme.background}>New</Text>
      </Wrapper>
      <AddModal
        onBackdropPress={() => setIsVisible(false)}
        onBackButtonPress={() => setIsVisible(false)}
        close={() => setIsVisible(false)}
        active={visible}
      />
    </>
  );
};

export default AddActionItem;
