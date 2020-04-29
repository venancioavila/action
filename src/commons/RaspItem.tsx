import React from 'react'
import styled from 'styled-components/native'
import Text from './Text'
import Icon from 'react-native-vector-icons/FontAwesome5'
import theme from '../theme'
import Space from './Space'
import { removeRasp } from '../services/Storage'

const Wrapper = styled.View`
  width: 100%;
  height: 50px;
  border-width: 1px;
  border-color: ${(p) => p.theme.inactiveTintColor};
  border-radius: 7px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 10px;
  margin-bottom: 10px;
`

const IpWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Touch = styled.TouchableOpacity``

const RaspItem = ({ data }: any) => (
  <Wrapper>
    <Text size={15}>{data.name}</Text>
    <IpWrapper>
      <Text size={15}>{data.ip}</Text>
      <Space width={15} />
      <Touch onPress={() => removeRasp()}>
        <Icon color={theme.danger} name="trash-alt" size={20} />
      </Touch>
    </IpWrapper>
  </Wrapper>
)

export default RaspItem
