import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import Text from '../commons/Text'
import theme from '../theme'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Space from './Space'
import { remove } from '../services/Storage'
import { useMutation } from '@apollo/react-hooks'
import { Alert } from 'react-native'
import DIGITAL from '../mutations/DIGITAL'

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
`

const Column = styled.View`
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`

const DeleteWrapper = styled.View`
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: flex-end;
`

const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
`

const Touchable = styled.TouchableOpacity`
  height: 30px;
  width: 30px;
  justify-content: center;
  align-items: center;
`

const TextWrapper = styled.View`
  max-width: 80px;
`

const Switch = styled.Switch``

interface Props {
  name: string
  gpio: any
  id: string
}

const ActionItem = ({ name, gpio, id }: Props) => {
  const [delet, setDelet] = useState(false)
  const [state, setState] = useState(false)
  const [digital, { loading }] = useMutation(DIGITAL)

  const onDelete = async (id: string) => {
    remove(id)
  }

  const turnOnOff = async (state: number) => {
    try {
      const { data }: any = await digital({
        variables: {
          pin: parseInt(gpio),
          state,
        },
      })
      if (data.digital) {
      }
    } catch (e) {
      Alert.alert(
        'Algo deu errado!',
        'Verifique sua conexão local ou se o ip do seu raspberry está correto.',
        [{ text: 'OK', onPress: () => null }],
        {
          cancelable: false,
        },
      )
    }
  }

  const addDelet = () => {
    setDelet(true)
    setTimeout(() => {
      setDelet(false)
    }, 5000)
  }

  useEffect(() => {
    if (state) {
      turnOnOff(1)
    } else {
      turnOnOff(0)
    }
  }, [state])

  return (
    <Wrapper>
      <Column>
        <Button onPress={() => setState(!state)}>
          <Icon
            color={state ? theme.text : theme.background}
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
          value={state}
          thumbColor={theme.lightBackground}
          trackColor={{ true: theme.text, false: 'green' }}
          // @ts-ignore
          onChange={() => setState(!state)}
        />
      </DeleteWrapper>
    </Wrapper>
  )
}

export default ActionItem
