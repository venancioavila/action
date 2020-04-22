import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import ActionItem from '../commons/ActionItem';
import AddActionItem from '../commons/AddActionItem';
import Scroll from '../commons/Scroll';
import FakeActionItem from '../commons/FakeActionItem';
import DhtItem from '../commons/DhtItem';
import ActionAnalogicItem from '../commons/ActionAnalogicItem';
import GamePadItem from '../commons/ServoItem';
import AddRasp from '../commons/AddRasp';
import {show} from '../services/Storage';
import client from '../services/client';
import {useQuery, useMutation} from '@apollo/react-hooks';
import GET_ACTIONS from '../queryes/GET_ACTIONS';
import Text from '../commons/Text';

const ActionsWrapper = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  background: ${(p) => p.theme.background};
`;

const RowContent = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`;

const Action = () => {
  const [openModal, setOpenModal] = useState(false);
  const {data}: any = useQuery(GET_ACTIONS);

  return (
    <ActionsWrapper>
      <AddRasp setIsVisible={() => setOpenModal(false)} isVisible={openModal} />
      <Scroll>
        <RowContent>
          {data.actions.map((item: any) => {
            if (item.type === 'dht') {
              return (
                <DhtItem
                  id={item.id}
                  name={item.name}
                  gpio={item.gpio}
                  key={item.id}
                />
              );
            }
            if (item.type === 'digital') {
              return (
                <ActionItem
                  id={item.id}
                  name={item.name}
                  gpio={item.gpio}
                  key={item.id}
                />
              );
            }
            if (item.type === 'analogic') {
              return (
                <ActionAnalogicItem
                  id={item.id}
                  name={item.name}
                  gpio={item.gpio}
                  key={item.id}
                />
              );
            }
            if (item.type === 'servo') {
              return (
                <GamePadItem
                  id={item.id}
                  name={item.name}
                  gpio={item.gpio}
                  key={item.id}
                  isHorizontal
                />
              );
            }
          })}
          <AddActionItem />
          <FakeActionItem />
        </RowContent>
      </Scroll>
    </ActionsWrapper>
  );
};

export default Action;
