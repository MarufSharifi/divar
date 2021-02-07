import React from 'react';
import {Switch} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Styled from 'styled-components';
import action from '../redux/actions/ActionSetThemMode';
import action2 from '../redux/actions/ActionShowChildrenName';

const String = ({name, city, isSwitchTheme, divider}) => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.ConditionReducer);

  return (
    <Container theme={theme.ThemeMode} divider={divider}>
      <TextStyle1 theme={theme.ThemeMode}>{name}</TextStyle1>

      {name === 'حالت شب' || name === 'نمایش راهنمای دسته بندی ها' ? (
        <Switch
          onValueChange={() => {
            if (isSwitchTheme) {
              if (theme.ThemeMode) {
                dispatch(action(false));
              } else {
                dispatch(action(true));
              }
            } else {
              if (theme.ShowChildren) {
                dispatch(action2(false));
              } else {
                dispatch(action2(true));
              }
            }
          }}
          trackColor={{false: 'grey', true: '#EF9A9A'}}
          thumbColor={
            isSwitchTheme
              ? theme.ThemeMode
                ? '#E0E0E0'
                : '#EF5350'
              : theme.ShowChildren
              ? '#EF5350'
              : '#E0E0E0'
          }
          value={
            isSwitchTheme
              ? theme.ThemeMode
                ? false
                : true
              : theme.ShowChildren
              ? true
              : false
          }
        />
      ) : (
        <TextStyle2 theme={theme.ThemeMode}>{city}</TextStyle2>
      )}
    </Container>
  );
};

export default String;

const Container = Styled.View`

 height: ${wp('16%')}px;
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: space-between;
 margin-horizontal: 10px;

 border-top-width: ${(props) => (props.divider === 1 ? '0.5px' : '0px')};
 border-bottom-width: ${(props) => (props.divider === -1 ? '0.5px' : '0px')};
 border-top-color: #707070;
 border-bottom-color: #707070;
`;

const TextStyle1 = Styled.Text`

 font-family: IRANSans-Medium;
 font-size: 15px;
 color: ${(props) => (props.theme === true ? '#707070' : '#fff')};
`;

const TextStyle2 = Styled.Text`

 font-family: IRANSans-Medium;
 font-size: 15px;
 color: ${(props) => (props.theme === true ? '#707070' : '#E0E0E0')};
`;
