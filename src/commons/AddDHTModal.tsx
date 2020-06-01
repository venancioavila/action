import React, { useState } from 'react'
import styled from 'styled-components/native'
import Modal from 'react-native-modal'
import Text from './Text'
import theme from '../theme'
import Button from './Button'
import Space from './Space'
import Input from './Input'
import { create } from '../services/Storage'

// @ts-ignore
const MyModal = styled(Modal).attrs({
  useNativeDrive: true,
})`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalContent = styled.View`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  width: 90%;
  height: 300px;
  background: ${(p) => p.theme.background};
  border-radius: 7px;
  border-width: 1px;
  border-color: ${(p) => p.theme.lightBackground};
`

interface Props {
  active?: boolean
  close?: any
  onBackdropPress?: any
  onBackButtonPress?: any
}

const AddModalDHT = ({
  active,
  close,
  onBackdropPress,
  onBackButtonPress,
}: Props) => {
  const [name, setName] = useState('')
  const [gpio, setGpio] = useState('')
  const [is22, setIs22] = useState(false)
  const [exist, setExist] = useState(false)

  const save = async () => {
    create({
      name,
      gpio,
      type: 'dht',
    })
  }

  const onChangeGpio = async (gpio: any) => {}

  return (
    <MyModal
      onBackdropPress={onBackdropPress}
      onBackButtonPress={onBackButtonPress}
      isVisible={active}>
      <ModalContent>
        {exist ? (
          <Text size={20} bold color={theme.danger}>
            This GPIO has added.
          </Text>
        ) : (
          <Text size={20} bold color={theme.text}>
            Add DHT sensor
          </Text>
        )}
        <Space height={20} />
        <Input
          value={name}
          onChangeText={(text: string) => setName(text)}
          label="Action name"
          placeholder="light input"
        />
        <Space height={10} />
        <Input
          value={gpio}
          onChangeText={(text: string) => setGpio(text)}
          keyboardType="numeric"
          label="Gpio number"
          placeholder="17"
        />
        <Space height={40} />
        <Button
          disabled={exist}
          onPress={() => {
            close()
            save()
          }}>
          <Text bold size={20} color={exist ? theme.text : theme.text}>
            Ok
          </Text>
        </Button>
      </ModalContent>
    </MyModal>
  )
}

export default AddModalDHT
