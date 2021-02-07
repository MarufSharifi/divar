import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Icon} from 'react-native-elements';
import {useSelector} from 'react-redux';
import Styled from 'styled-components';

const HomeHeader = ({title}) => {
  const theme = useSelector((State) => State.ConditionReducer);

  return (
    <Container theme={theme.ThemeMode}>
      <Icon
        name="search"
        color="#9E9E9E"
        style={{fontSize: 25, marginHorizontal: 10}}
      />

      <TextStyle theme={theme.ThemeMode}>{title}</TextStyle>
    </Container>
  );
};

export default HomeHeader;

const Container = Styled.View`

height: ${wp('10%')}px;
background-color: ${(props) => (props.theme === true ? '#fff' : '#616161')};
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
border: 0.3px solid grey;
border-radius: 5px;
`;

const TextStyle = Styled.Text`


font-size: 17px;
font-family: IRANSans-Medium;
color: ${(props) => (props.theme === true ? '#707070' : '#E0E0E0')};
`;
