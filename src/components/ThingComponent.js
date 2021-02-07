import React from 'react';
import {View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import Styled from 'styled-components';

const ThingComponent = ({name, price, location, image}) => {
  const theme = useSelector((state) => state.ConditionReducer);

  return (
    <Container theme={theme.ThemeMode}>
      <View>
        <SubContainer>
          <TextName theme={theme.ThemeMode}>{name}</TextName>
          <View>
            <TextPrice theme={theme.ThemeMode}>{price + ' افغانی'}</TextPrice>
            <TextPrice theme={theme.ThemeMode}>{location}</TextPrice>
          </View>
        </SubContainer>
      </View>

      <ImageStyle source={{uri: image}} />
    </Container>
  );
};

export default ThingComponent;

const Container = Styled.View`

display: flex;
flex-direction: row;
height: ${wp('40%')}px;
background-color: ${(props) => (props.theme === true ? '#fff' : '#212121')};
padding-vertical: 10px;
padding-horizontal: 10px;
justify-content: space-between;
`;

const SubContainer = Styled.View`

display: flex;
flex: 1;
justify-content: space-between;
flex-direction: column;
height: 100%
`;

const TextName = Styled.Text`

font-size: ${wp('5.5%')}px;
font-family: IRANSans-Medium;
width: ${wp('55%')}px;
color: ${(props) => (props.theme === true ? '#000' : '#fff')};
`;

const TextPrice = Styled.Text`

font-size: ${wp('4%')}px;
font-family: IRANSans-Light;
color: ${(props) => (props.theme === true ? '#707070' : '#E0E0E0')};
text-align: left;
`;

const ImageStyle = Styled.Image`

width: ${wp('35%')}px;
height: 100%;
border-radius: 5px;
resize-mode: cover;
overflow: hidden;
`;
