import React from 'react';
import {FlatList} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Styled from 'styled-components';
import action from '../redux/actions/ActionSetThemMode';
import {useDispatch, useSelector} from 'react-redux';
import String from '../components/String';

const data = [
  {title: 'شهر من', city: 'هرات'},
  {title: 'حالت شب'},
  {title: 'حذف همه بازدید های اخیر'},
  {title: 'حذف همه نشان ها'},
  {title: 'حذف تاریخچه جستجو'},
];

const Setting = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.ConditionReducer);

  return (
    <Container theme={theme.ThemeMode}>
      <HeaderStyle>
        <TextStyle theme={theme.ThemeMode}>
          برای استفاده از تمام امکانات دیوارمانند ثبت و مدیریت آگهی چت و یاداشت
          گذاری وارد حساب دیوار شوید
        </TextStyle>
        <ButtonStyle theme={theme.ThemeMode}>ورود به حساب</ButtonStyle>
      </HeaderStyle>

      <FlatList
        data={data}
        keyExtractor={(item) => item.title}
        renderItem={({item}) => (
          <RectButton
            onPress={() => {
              switch (item.title) {
                case 'حالت شب':
                  if (theme.ThemeMode) {
                    dispatch(action(false));
                  } else {
                    dispatch(action(true));
                  }
              }
            }}>
            <String
              name={item.title}
              city={item.city}
              isSwitchTheme={true}
              divider={1}
            />
          </RectButton>
        )}
      />
    </Container>
  );
};

export default Setting;

const Container = Styled.View`

display: flex;
flex:1;
background-color: ${(props) => (props.theme === true ? '#fff' : '#212121')}
`;

const TextStyle = Styled.Text`

font-size: 15px;
font-family: IRANSans-Light;
color: ${(props) => (props.theme === true ? '#000' : '#fff')}
`;

const HeaderStyle = Styled.View`

margin: ${wp('5%')}px;
`;

const ButtonStyle = Styled.Text`

color: ${(props) => (props.theme === true ? 'grey' : '#E0E0E0')};
font-size: ${wp('3.5%')}px;
border: 0.5px solid ${(props) => (props.theme === true ? 'grey' : '#fff')};
border-radius: 50px;
font-family: IRANSans-Regular;
text-align: center;
width: ${wp('25%')}px;
margin-top: ${wp('5%')}px;
align-self: flex-end;
background-color: ${(props) => (props.theme === true ? '#fff' : '#616161')}
`;
