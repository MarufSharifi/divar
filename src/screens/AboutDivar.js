import React from 'react';
import {SectionList} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Styled from 'styled-components';
import {useSelector} from 'react-redux';
import {RectButton} from 'react-native-gesture-handler';
import AboutFlatListField from '../components/AboutFlatListField';
import Divider from '../components/divider';

const DATA = [
  {
    data: [
      {
        iconForward: 'navigate-before',
        iconField: 'turned-in',
        title: 'نشان ها و یادداشت ها',
      },
      {
        iconForward: 'navigate-before',
        iconField: 'history',
        title: 'بازدید های اخیر',
      },
      {iconForward: 'navigate-before', iconField: 'settings', title: 'تنطیمات'},
    ],
  },
  {
    data: [
      {
        iconForward: 'navigate-before',
        iconField: 'support',
        iconType: 'font-awesome',
        title: 'پشتیبانی و قوانین',
      },
      {
        iconForward: 'navigate-before',
        iconField: 'info-outline',
        title: 'درباره دیوار11.1.21 ',
      },
    ],
  },
];

const AboutDivar = ({navigation}) => {
  const theme = useSelector((state) => state.ConditionReducer);

  return (
    <Container theme={theme.ThemeMode}>
      <HeaderStyle>
        <TextStyle theme={theme.ThemeMode}>
          برای استفاده از تمام امکانات دیوارمانند، ثبت و مدیریت آگهی چت .و
          یاداشت گذاری وارد حساب دیوار شوید
        </TextStyle>
        <ButtonStyle theme={theme.ThemeMode}>ورود به حساب</ButtonStyle>
      </HeaderStyle>

      <SectionList
        sections={DATA}
        keyExtractor={(item) => item.title}
        renderItem={({item}) => (
          <RectButton
            onPress={() => {
              switch (item.title) {
                case 'نشان ها و یادداشت ها':
                  navigation.navigate('نشانه ها و یادداشت  ها');
                  break;
                case 'بازدید های اخیر':
                  navigation.navigate('بازدید های اخیر');
                  break;
                case 'تنطیمات':
                  navigation.navigate('تنظیمات');
                  break;
                case 'پشتیبانی و قوانین':
                  navigation.navigate('پشتیبانی و قوانین');
                  break;
                case 'درباره دیوار11.1.21 ':
                  navigation.navigate('درباره دیوار');
                  break;
                default:
                  return;
              }
            }}>
            <AboutFlatListField
              iconField={item.iconField}
              title={item.title}
              iconType={item.iconType}
              child={true}
            />
          </RectButton>
        )}
        renderSectionHeader={() => <Divider />}
      />
    </Container>
  );
};

export default AboutDivar;

const TextStyle = Styled.Text`

font-size: 15px;
font-family: IRANSans-Light;
color: ${(props) => (props.theme === true ? '#000' : '#fff')}
`;

const Container = Styled.View`

display: flex;
flex: 1;
background-color: ${(props) => (props.theme === true ? '#fff' : '#212121')};
`;

const HeaderStyle = Styled.View`

margin: ${wp('5%')}px;

`;

const ButtonStyle = Styled.Text`

color: ${(props) => (props.theme === true ? 'grey' : '#E0E0E0')};
font-size: ${wp('3.5%')};
border: 0.5px solid ${(props) => (props.theme === true ? 'grey' : '#fff')};
border-radius: 50px;
font-family: IRANSans-Regular;
text-align: center;
width: ${wp('25%')}
margin-top: ${wp('5%')}px;
align-self: flex-end;
background-color: ${(props) => (props.theme === true ? '#fff' : '#616161')}
`;
