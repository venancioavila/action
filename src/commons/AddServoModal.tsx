import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import Modal from 'react-native-modal'
import Text from '../commons/Text'
import theme from '../theme'
import Button from '../commons/Button'
import Space from '../commons/Space'
import Input from './Input'
import { create } from '../services/Storage'

// @ts-ignore
const MyModal = styled(Modal)`
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

const AddServoModal = ({
  active,
  close,
  onBackdropPress,
  onBackButtonPress,
}: Props) => {
  const [name, setName] = useState('')
  const [gpio, setGpio] = useState('')
  const [exist, setExist] = useState(false)

  const save = async () => {
    create({
      name,
      gpio,
      type: 'servo',
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
            😢 Sorry! This GPIO has added.
          </Text>
        ) : (
          <Text size={20} bold color={theme.text}>
            Add your servo.
          </Text>
        )}
        <Space height={20} />
        <Input
          value={name}
          onChangeText={(text: string) => setName(text)}
          placeholder="Action name"
        />
        <Space height={10} />
        <Input
          value={gpio}
          onChangeText={(text: string) => setGpio(text)}
          keyboardType="numeric"
          label="Gpio number"
          placeholder="Gpio port"
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

export default AddServoModal
