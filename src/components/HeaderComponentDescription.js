import React from 'react';
import {Icon} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Styled from 'styled-components';

const HeaderComponent = () => {
  const theme = useSelector((state) => state.ConditionReducer);

  return (
    <Container>
      <Icon name="turned-in-not" color={theme.ThemeMode ? 'grey' : '#E0E0E0'} />

      <Icon
        name="dots-vertical"
        type="material-community"
        color={theme.ThemeMode ? 'grey' : '#E0E0E0'}
        style={{marginLeft: wp('8%')}}
      />
    </Container>
  );
};

export default HeaderComponent;

const Container = Styled.View`

        display: flex;
        flex-direction: row;
        align-items: center;
        width: ${wp('27%')}
    `;
