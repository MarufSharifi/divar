import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import HomeParts from '../screens/HomeParts';

const stack = createStackNavigator();


const DivarParts = () => {


        const theme = useSelector(state => state.ConditionReducer);

    return <stack.Navigator initialRouteName="دسته بندی آگهی ها">
        <stack.Screen 
        name="دسته بندی آگهی ها" 
        component={HomeParts}
        options={({route}) => (
            {title: route.params ? route.params.name : "دسته بندی آگهی ها" ,
            headerTintColor: route.params ? theme.ThemeMode ? "grey" : "#E0E0E0" : theme.ThemeMode ? "#000" : "#fff",
        headerStyle: {
            elevation:1,
            backgroundColor: theme.ThemeMode ? "#FAFAFA" : "#424242"
        },
        headerTitleStyle: {
            color: theme.ThemeMode ? "#000" : "#fff"
        }
    })}
        />
    </stack.Navigator>
}

export default DivarParts;

