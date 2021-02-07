import React from 'react';
import {useWindowDimensions} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import Styled from 'styled-components';

const HeaderField = ({title}) => {
  const width = useWindowDimensions().width;

  const theme = useSelector((state) => state.ConditionReducer);

  return (
    <StyledView theme={theme.ThemeMode}>
      <StyledText theme={theme.ThemeMode}>{title}</StyledText>
    </StyledView>
  );
};

export default HeaderField;

const StyledView = Styled.View`
height: ${wp('7%')}px;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
marginTop: ${wp('7%')}px;
background-color: ${(props) => (props.theme === true ? '#fff' : '#212121')};
`;

const StyledText = Styled.Text`

    font-size: ${wp('6%')}px;
    font-family: IRANSans-Medium;
    color: ${(props) => (props.theme === true ? '#000' : '#fff')};
`;
