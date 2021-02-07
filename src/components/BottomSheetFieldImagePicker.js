import React from 'react';
import {useWindowDimensions} from 'react-native';
import {Icon} from 'react-native-elements';
import Styled from 'styled-components';
import {useSelector} from 'react-redux';

const BottomSheetFieldImagePicker = ({title, iconName}) => {
  const theme = useSelector((state) => state.ConditionReducer);

  const width = useWindowDimensions().width;

  return (
    <Container>
      <Icon
        name={iconName}
        color={theme.ThemeMode ? '#707070' : '#E0E0E0'}
        style={{fontSize: 0.5 * width, marginHorizontal: 10}}
      />
      <StyledText theme={theme.ThemeMode}>{title}</StyledText>
    </Container>
  );
};

export default BottomSheetFieldImagePicker;

const Container = Styled.View`

       
        flex-direction: row;
        align-items: center;
    `;

const StyledText = Styled.Text`
    
    text-align: center; 
    padding-vertical: 15px;
    font-family: IRANSans-Light;
    font-size: 18px;
    color: ${(props) => (props.theme === true ? 'black' : '#fff')};
    `;
