import React from 'react';
import Styled from 'styled-components';
import {useSelector} from 'react-redux';

const HeaderImagePickerSheet = ({title}) => {
  const theme = useSelector((state) => state.ConditionReducer);

  return <StyledText theme={theme.ThemeMode}>{title}</StyledText>;
};

export default HeaderImagePickerSheet;

const StyledText = Styled.Text`

background-color: ${(props) => (props.theme === true ? '#fff' : '#424242')}
text-align: left; 
padding-vertical: 15px;
font-family: IRANSans-Light;
padding-right: 10px;
font-size: 18px;
color: ${(props) => (props.theme === true ? '#707070' : '#E0E0E0')};
border-top-right-radius: 20px;
border-top-left-radius: 20px;
`;
