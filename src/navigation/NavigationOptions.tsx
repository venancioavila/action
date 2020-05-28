import theme from '../theme'
import { Platform } from 'react-native'

const isIos = Platform.OS === 'ios'

export const homeOptions = {
  title: '',
  style: {
    shadowOffset: {
      height: 0,
    },
    elevation: 0,
  },
}

export const tabOptions = {
  activeTintColor: theme.activeTintColor,
  inactiveTintColor: theme.inactiveTintColor,
  labelStyle: {
    fontSize: 10,
  },
  style: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 50,
    backgroundColor: '#161819',
    paddingTop: 5,
    paddingBottom: isIos ? 35 : 5,
    height: isIos ? 90 : 60,
    borderTopColor: 'transparent',
  },
}

export const actionOptions = {
  title: 'Action',
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  headerStyle: {
    height: isIos ? 100 : 60,
    backgroundColor: theme.background,
    shadowOffset: {
      height: 0,
    },
    elevation: 0,
  },
}

export const addOptions = {
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  headerStyle: {
    backgroundColor: theme.background,
    height: isIos ? 100 : 60,
    shadowOffset: {
      height: 0,
    },
    elevation: 0,
  },
}

export const gpioOptions = {
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  headerStyle: {
    backgroundColor: theme.background,
    height: isIos ? 100 : 60,
    shadowOffset: {
      height: 0,
    },
    elevation: 0,
  },
}

export const settingsOptions = {
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  headerStyle: {
    backgroundColor: theme.background,
    height: isIos ? 100 : 60,
    shadowOffset: {
      height: 0,
    },
    elevation: 0,
  },
}
