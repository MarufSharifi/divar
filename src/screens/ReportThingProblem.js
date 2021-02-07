import React from 'react';
import {ScrollView} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import Styled from 'styled-components';

const ReportThingProblem = () => {
  const theme = useSelector((state) => state.ConditionReducer);

  return (
    <Container>
      <SubContainer theme={theme.ThemeMode}>
        <ScrollView>
          <TiltText theme={theme.ThemeMode}>
            مشکل در کدام قسمت آگهی است؟
          </TiltText>
          <DescriptionText theme={theme.ThemeMode}>
            نزدیک ترین گزینه را انتخاب کنید. کارشناسان ما گزارش شما را برسی
            میکنند.
          </DescriptionText>
        </ScrollView>
      </SubContainer>
    </Container>
  );
};

export default ReportThingProblem;

const Container = Styled.View`

background-color: #424242;
display: flex;
flex: 1;

`;

const SubContainer = Styled.View`

height: ${hp('85%')}
background-color: ${(props) => (props.theme === true ? '#fff' : '#212121')}
`;

const TiltText = Styled.Text`

font-family: IRANSans-Normal;
font-size: 20px;
color: ${(props) => (props.theme === true ? '#000' : '3fff')}

`;

const DescriptionText = Styled.Text`

font-family: IRANSans-Light;
font-size: 17;
color: ${(props) => (props.theme === true ? 'grey' : '#707070')}
`;
