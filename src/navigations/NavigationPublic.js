import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabBarNavigation from '../navigations/TabBarNavigation';
import {Icon} from 'react-native-elements';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import {TextInput} from 'react-native';
import MainSearchScreen from '../screens/MainSearchScreen';
import DivarSabthagahy from '../navigations/DivarStabtHagahy';
import DescriptionOfThing from '../screens/DescriptionOfThing';
import HeaderComponent from '../components/HeaderComponentDescription';

import ImageShow from '..//screens/Image';

const stack = createStackNavigator();

const NavigationPublic = () => {
  const [searchText, setSearch] = useState('');

  const theme = useSelector((state) => state.ConditionReducer);

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="TabBarNavigation">
        <stack.Screen
          name="TabBarNavigation"
          component={TabBarNavigation}
          options={{
            headerShown: false,
          }}
        />

        <stack.Screen
          name="mainSearch"
          component={MainSearchScreen}
          options={{
            headerTintColor: theme.ThemeMode ? 'grey' : '#E0E0E0',
            headerTitle: () => (
              <TextInput
                selectionColor={theme.ThemeMode ? '#A62626' : '#EF5350'}
                autoFocus={true}
                style={{
                  fontFamily: 'IRANSans-Regular',
                  textAlign: 'right',
                  color: theme.ThemeMode ? '#000' : '#fff',
                  width: wp('73%'),
                  marginLeft: -20,
                }}
                value={searchText}
                onChangeText={(value) => {
                  setSearch(value);
                }}
              />
            ),

            headerRight: () => {
              return searchText.trim() === '' ? null : (
                <Icon
                  name="cancel"
                  color={theme.ThemeMode ? '#707070' : '#E0E0E0'}
                  iconStyle={{marginRight: 15}}
                  onPress={() => {
                    setSearch('');
                  }}
                />
              );
            },

            headerStyle: {
              backgroundColor: theme.ThemeMode ? '#FAFAFA' : '#424242',
              elevation: 1,
            },
          }}
        />

        <stack.Screen
          name="descriptionOfThing"
          component={DescriptionOfThing}
          options={{
            headerTintColor: theme.ThemeMode ? 'grey' : '#E0E0E0',
            headerRight: () => <HeaderComponent />,
            title: '',
            headerStyle: {
              backgroundColor: 'transparent',
              elevation: 1,
            },
            headerTitleStyle: {
              color: theme.ThemeMode ? '#000' : '#fff',
            },
          }}
        />

        <stack.Screen
          name="ImageShow"
          component={ImageShow}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: theme.ThemeMode ? '#fff' : '#000',
              elevation: 0,
            },
          }}
        />

        <stack.Screen
          name="SabtHaghayPublic"
          component={DivarSabthagahy}
          options={{
            headerShown: false,
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationPublic;
