import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Icon} from 'react-native-elements';
import {useSelector} from 'react-redux';
import Styled from 'styled-components';

const StringIcon = ({name, iconName, type}) => {
  const theme = useSelector((state) => state.ConditionReducer);

  return (
    <Container theme={theme.ThemeMode}>
      <TextStyle1 theme={theme.ThemeMode}>{name}</TextStyle1>

      {iconName ? (
        <Icon
          color={theme.ThemeMode ? '#707070' : '#E0E0E0'}
          name={iconName}
          style={{fontSize: 25}}
        />
      ) : (
        <TextStyle2 theme={theme.ThemeMode}>{type}</TextStyle2>
      )}
    </Container>
  );
};

export default StringIcon;

const Container = Styled.View`

        display: flex;
        flex-direction: row;
        height: ${wp('16%')}px;
        justify-content: space-between;
        align-items: center;
        background-color: ${(props) =>
          props.theme === true ? '#fff' : '#212121'};

    `;

const TextStyle1 = Styled.Text`

        font-family: IRANSans-Medium;
        color: ${(props) => (props.theme === true ? '#707070' : '#fff')};
        font-size: 15px;
    `;

const TextStyle2 = Styled.Text`

        font-family: IRANSans-Medium;
        color: ${(props) => (props.theme === true ? '#707070' : '#E0E0E0')};
        font-size: 15px;
    `;
