import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StatusBar} from 'react-native';
import {
  tabOptions,
  actionOptions,
  addOptions,
  gpioOptions,
} from './NavigationOptions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ThemeProvider} from 'styled-components';
import theme from '../theme';
import {ApolloProvider} from '@apollo/react-hooks';
import client from '../services/client';
import {initialState} from '../services/Storage';

// Screens
import Settings from '../pages/Settings';
import Action from '../pages/Action';
import AddAction from '../pages/AddAction';
import Gpio from '../pages/Gpio';

// Stacks
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

Icon.loadFont();

const ActionIcon = ({activeTintColor}: any) => (
  <Icon color={activeTintColor} size={30} name="home" />
);

const AddIcon = ({activeTintColor}: any) => (
  <Icon color={activeTintColor} size={30} name="add-circle" />
);

const GpioIcon = ({activeTintColor}: any) => (
  <Icon color={activeTintColor} size={30} name="circle" />
);

const SettingsIcon = ({activeTintColor}: any) => (
  <Icon color={activeTintColor} size={30} name="build" />
);

const ActionStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        // @ts-ignore
        options={actionOptions}
        name="Home"
        component={Action}
      />
    </Stack.Navigator>
  );
};

const AddActionStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        // @ts-ignore
        options={addOptions}
        name="Create action"
        component={AddAction}
      />
    </Stack.Navigator>
  );
};

const GpioStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        // @ts-ignore
        options={gpioOptions}
        name="Gpio"
        component={Gpio}
      />
    </Stack.Navigator>
  );
};

const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        // @ts-ignore
        name="Settings"
        component={Settings}
      />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  useEffect(() => {
    initialState();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Tab.Navigator
        // @ts-ignore
        tabBarOptions={tabOptions}>
        <Tab.Screen
          options={{
            tabBarIcon: ({color}: any) => (
              <ActionIcon activeTintColor={color} />
            ),
            tabBarLabel: 'início',
          }}
          name="Action"
          component={ActionStack}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color}: any) => <AddIcon activeTintColor={color} />,
            tabBarLabel: 'adicionar',
          }}
          name="Add"
          component={AddActionStack}
        />
        {/* <Tab.Screen
          options={{
            tabBarIcon: ({color}: any) => <GpioIcon activeTintColor={color} />,
            tabBarLabel: () => null,
          }}
          name="Gpio"
          component={GpioStack}
        /> */}
        {/* <Tab.Screen
          options={{
            tabBarIcon: ({color}: any) => (
              <SettingsIcon activeTintColor={color} />
            ),
            tabBarLabel: 'configurações',
          }}
          name="Settgins"
          component={SettingsStack}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  </ApolloProvider>
);

export default App;
