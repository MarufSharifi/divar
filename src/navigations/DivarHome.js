import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RectButton} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import Home from '../screens/Home';
import HomeHeader from '../components/HomeHeader';


const stack = createStackNavigator();

const DivarHome = () => {

  const theme = useSelector(state => state.ConditionReducer);

    return (
        <stack.Navigator initialRouteName="Home">
            <stack.Screen
             name="Home"
              component={Home}
              options={({navigation}) => (

                {headerTitle: props => <RectButton
                      onPress={() => {
                          navigation.navigate("mainSearch");
                      }}
                >
                    <HomeHeader  {...props} title="جستجو در همه آگهی ها"/>
                </RectButton>,
                headerStyle: {
                  backgroundColor: theme.ThemeMode ? "#FAFAFA" : "#424242",
                  elevation:0
                }
              })}/>
           
           

        </stack.Navigator>
    );
    

  }

  export default DivarHome

