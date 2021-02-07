import React from 'react';
import {View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {RectButton} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import Styled from 'styled-components';

const ModalPermission = ({_modalClose, set}) => {
  const theme = useSelector((State) => State.ConditionReducer);

  const _rejectPress = () => {
    _modalClose();
  };

  const _confirmPress = () => {
    _modalClose();
    set();
  };

  return (
    <Container theme={theme.ThemeMode}>
      <View>
        <PriceText theme={theme.ThemeMode}>پیام</PriceText>
        <Description theme={theme.ThemeMode}>
          برای شناسایی موقیعت خود لطفا موقیعت گوشی را روشن نمایید
        </Description>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginTop: wp('5%'),
        }}>
        <RectButton>
          <RejectText onPress={_rejectPress} theme={theme.ThemeMode}>
            نخیر
          </RejectText>
        </RectButton>

        <RectButton>
          <ConfirmText theme={theme.ThemeMode} onPress={_confirmPress}>
            فعال کردن
          </ConfirmText>
        </RectButton>
      </View>
    </Container>
  );
};

export default ModalPermission;

const PriceText = Styled.Text`

    font-family: IRANSans-Regular;
    font-size: 17;
    color: ${(props) => (props.theme === true ? '#000' : '#fff')};
    
`;

const Container = Styled.View`

    height: ${wp('40%')}px;
    width: ${wp('85%')}px;
    background-color: ${(props) => (props.theme === true ? '#fff' : '#616161')};
    padding-horizontal: 15px;
    padding-vertical: 15px;
    border-radius: 3px;
    elevation: 1;
`;

const ConfirmText = Styled.Text`

    font-family: IRANSans-Light;
    font-size: 15;
    color: ${(props) => (props.theme === true ? '#000' : '#fff')};
    padding:8px;
`;

const RejectText = Styled.Text`

    font-family: IRANSans-Light;
    font-size: 15;
    color: ${(props) => (props.theme === true ? '#000' : '#fff')};
    padding: 8px;
    margin-right: 15px;

`;

const Description = Styled.Text`

font-family: IRANSans-Regular;
font-size: 13;
color: ${(props) => (props.theme === true ? '#000' : '#fff')};
padding: 3px;
width: ${wp('75%')}
`;
