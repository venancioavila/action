import AsyncStorage from '@react-native-community/async-storage'
import client from '../services/client'

export const create = async (data: any) => {
  const id = (Math.random() * Date.now()).toFixed(0)
  var itemsString: any = await AsyncStorage.getItem('@action.data')
  if (itemsString === null) {
    itemsString = []
    itemsString.push({ ...data, id, __typename: 'action' })
    await AsyncStorage.setItem('@action.data', JSON.stringify(itemsString))
  } else {
    const items: any[] = JSON.parse(itemsString)
    items.push({ ...data, id, __typename: 'action' })
    await AsyncStorage.setItem('@action.data', JSON.stringify(items))
  }
  initialState()
}

export const show = async () => {
  const data: any = await AsyncStorage.getItem('@action.data')
  if (data === null) {
    return []
  }
  return JSON.parse(data)
}

export const remove = async (id: string) => {
  const data: any = await AsyncStorage.getItem('@action.data')
  const jsonData = JSON.parse(data)
  const currentItems = jsonData.filter((item: any) => item.id !== id)
  await AsyncStorage.setItem('@action.data', JSON.stringify(currentItems))
  initialState()
}

export const removeAll = async () => {
  await AsyncStorage.clear()
}

export const initialState = async () => {
  const data: any = await AsyncStorage.getItem('@action.data')
  const raspberry: any = await AsyncStorage.getItem('@action.raspberry')
  if (data === null) {
    client.writeData({
      data: { actions: [] },
    })
  } else {
    client.writeData({
      data: { actions: JSON.parse(data) },
    })
  }

  if (raspberry === null) {
    client.writeData({
      data: { raspberry: null },
    })
  } else {
    client.writeData({
      data: { raspberry: JSON.parse(raspberry) },
    })
  }
}

export const createRasp = async (data: any) => {
  const id = (Math.random() * Date.now()).toFixed(0)
  await AsyncStorage.setItem(
    '@action.raspberry',
    JSON.stringify({ __typename: 'raspberry', id, ...data }),
  )
  initialState()
}

export const removeRasp = async () => {
  await AsyncStorage.removeItem('@action.raspberry')
  initialState()
}

// removeAll();
