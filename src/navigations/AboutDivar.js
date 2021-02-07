import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import AboutDivar from '../screens/AboutDivar';
import TabBarNavigation from '../navigations/TobTabar';
import RecentlyViewed from '../screens/RecentlyViewed';
import SupportsAndRules from '../screens/SupportsAndRules';
import Setting from '../screens/Setting';
import InformationAboutDivar from '../screens/InformationAboutDivar';

const stack = createStackNavigator();

const AboutDivarNavigation = () => {
  const theme = useSelector((state) => state.ConditionReducer);

  return (
    <stack.Navigator initialRouteName="َدیوار من">
      <stack.Screen
        name="دیوار من"
        component={AboutDivar}
        options={{
          headerTintColor: theme.ThemeMode ? '#000' : '#fff',
          headerStyle: {
            elevation: 1,
            backgroundColor: theme.ThemeMode ? '#FAFAFA' : '#424242',
          },
        }}
      />

      <stack.Screen
        name="نشانه ها و یادداشت  ها"
        component={TabBarNavigation}
        options={{
          headerTintColor: theme.ThemeMode ? 'grey' : '#E0E0E0',
          headerStyle: {
            elevation: 1,
            backgroundColor: theme.ThemeMode ? '#FAFAFA' : '#424242',
          },
          headerTitleStyle: {
            color: theme.ThemeMode ? '#000' : '#fff',
          },
        }}
      />

      <stack.Screen
        name="بازدید های اخیر"
        component={RecentlyViewed}
        options={{
          headerTintColor: theme.ThemeMode ? 'grey' : '#E0E0E0',
          headerStyle: {
            elevation: 1,
            backgroundColor: theme.ThemeMode ? '#FAFAFA' : '#424242',
          },
          headerTitleStyle: {
            color: theme.ThemeMode ? '#000' : '#fff',
          },
        }}
      />

      <stack.Screen
        name="پشتیبانی و قوانین"
        component={SupportsAndRules}
        options={{
          headerTintColor: theme.ThemeMode ? 'grey' : '#E0E0E0',
          headerStyle: {
            elevation: 1,
            backgroundColor: theme.ThemeMode ? '#FAFAFA' : '#424242',
          },
          headerTitleStyle: {
            color: theme.ThemeMode ? '#000' : '#fff',
          },
        }}
      />

      <stack.Screen
        name="تنظیمات"
        component={Setting}
        options={{
          headerTintColor: theme.ThemeMode ? 'grey' : '#E0E0E0',
          headerStyle: {
            elevation: 1,
            backgroundColor: theme.ThemeMode ? '#FAFAFA' : '#424242',
          },
          headerTitleStyle: {
            color: theme.ThemeMode ? '#000' : '#fff',
          },
        }}
      />

      <stack.Screen
        name="درباره دیوار"
        component={InformationAboutDivar}
        options={{
          headerTintColor: theme.ThemeMode ? 'grey' : '#E0E0E0',
          headerStyle: {
            elevation: 1,
            backgroundColor: theme.ThemeMode ? '#FAFAFA' : '#424242',
          },
          headerTitleStyle: {
            color: theme.ThemeMode ? '#000' : '#fff',
          },
        }}
      />
    </stack.Navigator>
  );
};

export default AboutDivarNavigation;
