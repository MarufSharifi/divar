import React from 'react';
import Styled from 'styled-components';
import {useSelector} from 'react-redux';

const BottomSheetField = ({title}) => {
  const theme = useSelector((state) => state.ConditionReducer);

  return <StyledText theme={theme.ThemeMode}>{title}</StyledText>;
};

export default BottomSheetField;

const StyledText = Styled.Text`

background-color: ${(props) => (props.theme === true ? '#fff' : '#424242')}
text-align: center; 
padding-vertical: 15px;
font-family: IRANSans-Medium;
font-size: 20px;
color: ${(props) => (props.theme === true ? 'black' : '#fff')};
`;
