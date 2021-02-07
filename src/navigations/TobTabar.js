import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSelector} from 'react-redux';
import Notes from '../screens/Notes';
import Marks from '../screens/Marks';

const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
  const theme = useSelector((state) => state.ConditionReducer);

  return (
    <Tab.Navigator
      initialRouteName="نشانه ها"
      tabBarOptions={{
        activeTintColor: theme.ThemeMode ? '#A62626' : '#EF5350',
        inactiveTintColor: theme.ThemeMode ? '#707070' : '#E0E0E0',
        indicatorStyle: {
          backgroundColor: theme.ThemeMode ? '#A62626' : '#EF5350',
          height: 4,
        },
        style: {backgroundColor: theme.ThemeMode ? '#FAFAFA' : '#424242'},
      }}>
      <Tab.Screen name="نشانه ها" component={Marks} />
      <Tab.Screen name="یادداشت ها" component={Notes} />
    </Tab.Navigator>
  );
};

export default MyTabs;
