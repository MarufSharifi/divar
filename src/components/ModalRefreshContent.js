import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Styled from 'styled-components';
import {useSelector} from 'react-redux';

const ModalRefreshContent = ({close, open}) => {
  const theme = useSelector((state) => state.ConditionReducer);

  return (
    <Container>
      <StyledConfirm onPress={open} theme={theme.ThemeMode}>
        بلی
      </StyledConfirm>
      <StyledReject onPress={close} theme={theme.ThemeMode}>
        نخیر
      </StyledReject>
    </Container>
  );
};

export default ModalRefreshContent;

const Container = Styled.View`

   padding-horizontal: ${wp('5%')};
   padding-vertical: ${wp('5%')};
   flex: 1;
   flex-direction: row;
   justify-content: space-between;
  
`;

const StyledConfirm = Styled.Text`

  color: #fff;
  background-color: ${(props) =>
    props.theme === true ? '#A62626' : '#EF5350'};
  height: ${wp('13%')}px;
  width: ${wp('40%')}px;
  border-radius: 4px;
  padding-vertical: ${wp('3%')}px;
  padding-horizontal: ${wp('1.5%')}px;
  text-align: center;
  font-family: IRANSans-Light;
  font-size: ${wp('5%')}px;
  align-self: flex-end;
`;

const StyledReject = Styled.Text`

  color: #fff;
  background-color: ${(props) =>
    props.theme === true ? '#A62626' : '#EF5350'};
  height: ${wp('13%')}px;
  width: ${wp('40%')}px;
  border-radius: 4px;
  padding-vertical: ${wp('3%')}px;
  padding-horizontal: ${wp('1.5%')}px;
  text-align: center;
  font-family: IRANSans-Light;
  font-size: ${wp('5%')}px;
  align-self: flex-end;
`;
