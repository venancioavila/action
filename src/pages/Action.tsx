import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import ActionItem from '../commons/ActionItem'
import AddActionItem from '../commons/AddActionItem'
import Scroll from '../commons/Scroll'
import FakeActionItem from '../commons/FakeActionItem'
import DhtItem from '../commons/DhtItem'
import ActionAnalogicItem from '../commons/ActionAnalogicItem'
import GamePadItem from '../commons/ServoItem'
import { useQuery } from '@apollo/react-hooks'
import GET_ACTIONS from '../graphql/queryes/GET_ACTIONS'

const ActionsWrapper = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  background: ${(p) => p.theme.background};
`

const RowContent = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`

const Action = () => {
  const { data }: any = useQuery(GET_ACTIONS)

  return (
    <ActionsWrapper>
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
              )
            }
            if (item.type === 'digital') {
              return (
                <ActionItem
                  id={item.id}
                  name={item.name}
                  gpio={item.gpio}
                  key={item.id}
                />
              )
            }
            if (item.type === 'analogic') {
              return (
                <ActionAnalogicItem
                  id={item.id}
                  name={item.name}
                  gpio={item.gpio}
                  key={item.id}
                />
              )
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
              )
            }
          })}
          <AddActionItem />
          <FakeActionItem />
        </RowContent>
      </Scroll>
    </ActionsWrapper>
  )
}

export default Action
