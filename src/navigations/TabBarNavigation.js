import React from 'react';
import {useSelector} from 'react-redux';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Icon} from 'react-native-elements';
import AboutDivarNavigation from './AboutDivar';
import DivarHome from './DivarHome';
import DivarParts from './DivarParts';
import SabtHagahyVacant from '../screens/SabtHagahyVacant';

const Tab = createMaterialBottomTabNavigator();

const TabBarNavigation = ({navigation}) => {
  const condition = useSelector((state) => state.ConditionReducer);

  return (
    <Tab.Navigator
      shifting={false}
      activeColor="#A62626"
      inactiveColor={condition.ThemeMode ? '#707070' : '#E0E0E0'}
      barStyle={{
        backgroundColor: condition.ThemeMode ? '#FAFAFA' : '#424242',
        elevation: 1,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              color={color}
              name="search"
              size={26}
              style={{marginTop: -3}}
            />
          ),
        }}
        name="هرات"
        component={DivarHome}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Icon color={color} name="toc" size={26} style={{marginTop: -3}} />
          ),
        }}
        name="دسته ها"
        component={DivarParts}
      />

      <Tab.Screen
        listeners={{
          tabPress: (e) => {
            navigation.navigate('SabtHaghayPublic');
            e.preventDefault();
          },
        }}
        options={{
          title: 'ثبت آگهی',
          tabBarIcon: ({color}) => (
            <Icon
              color={color}
              name="add-circle"
              size={26}
              style={{marginTop: -3}}
            />
          ),
        }}
        name="SabtHagahyOrigin"
        component={SabtHagahyVacant}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              color={color}
              name="person"
              size={26}
              style={{marginTop: -3}}
            />
          ),
        }}
        name="دیوار من"
        component={AboutDivarNavigation}
      />
    </Tab.Navigator>
  );
};

export default TabBarNavigation;
