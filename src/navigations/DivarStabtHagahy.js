import React, {useState} from 'react';
import {TextInput} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {Icon} from 'react-native-elements';
import StabtHagahy from '../screens/SabtHagahy';
import SabtHagahy2 from '../screens/SabtHagahy2';
import Sabthagahy3 from '../screens/SabtHagahy3';
import SabtHagahyDirectory from '../screens/SabtHagahyDirectory';
import HomeHeader from '../components/HomeHeader';
import SabthagahyParts from '../screens/SabtHagahyParts';
import {RectButton} from 'react-native-gesture-handler';
import MahdudaHagahy from '../screens/MahdudaHagahy';
import PartSearch1 from '../screens/PartSearch';

const stack = createStackNavigator();

const DivarSabtHagahy = () => {
  const [searchText, setSearch] = useState('');
  const theme = useSelector((state) => state.ConditionReducer);

  return (
    <stack.Navigator initialRouteName="ثبت آگهی">
      <stack.Screen
        name="ثبت آگهی"
        component={StabtHagahy}
        options={{
          headerTintColor: theme.ThemeMode ? 'grey' : '#E0E0E0',

          title: 'ثبت آگهی',
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
        name="SabtHagayNext"
        component={SabtHagahy2}
        options={{
          headerTintColor: theme.ThemeMode ? 'grey' : '#E0E0E0',

          title: 'ثبت آگهی',
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
        name="SabtHaghy3"
        component={Sabthagahy3}
        options={{
          headerTintColor: theme.ThemeMode ? 'grey' : '#E0E0E0',
          title: 'ثبت آگهی',
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
        name="راهنمای ثبت آگهی"
        component={SabtHagahyDirectory}
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
        name="SabtHagayParts"
        component={SabthagahyParts}
        options={({navigation}) => ({
          headerTitle: (props) => (
            <RectButton
              onPress={() => {
                navigation.navigate('partSearch');
              }}>
              <HomeHeader {...props} title="جستجو در همه دسته ها" />
            </RectButton>
          ),
          headerStyle: {
            elevation: 1,
            backgroundColor: theme.ThemeMode ? '#FAFAFA' : '#424242',
          },
          headerTintColor: theme.ThemeMode ? 'grey' : '#E0E0E0',
        })}
      />

      <stack.Screen
        name="Mahdudahagy"
        component={MahdudaHagahy}
        options={{
          title: 'دریافت موقیعت',
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
        name="partSearch"
        component={PartSearch1}
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
    </stack.Navigator>
  );
};

export default DivarSabtHagahy;
