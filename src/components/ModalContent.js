import React, {useState} from 'react';
import {View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RectButton} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import Styled from 'styled-components';
import action from '../redux/actions/ActionAddPrice';

const ModalContent = ({_modalClose, set}) => {
  const dispatch = useDispatch();

  const theme = useSelector((State) => State.ConditionReducer);
  const thing = useSelector((state) => state.ThingSpecificReducer);

  const defaultPrice = thing.price == 'تعین' ? '' : thing.price;

  const [price, setPrice] = useState(defaultPrice);

  const _setPrice = (value) => {
    if (value.slice(-1) === '.') {
    } else {
      setPrice(value);
    }
  };

  const _rejectPress = () => {
    _modalClose();
  };

  const _confirmPress = () => {
    if (price < 10) {
    } else {
      dispatch(action(price));
      set();
      _modalClose();
    }
  };

  return (
    <Container theme={theme.ThemeMode}>
      <View>
        <PriceText theme={theme.ThemeMode}>قیمت</PriceText>
        <TextInput
          autoFocus={true}
          keyboardType="decimal-pad"
          value={price}
          onChangeText={_setPrice}
          theme={theme.ThemeMode}
        />
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginTop: wp('15%'),
        }}>
        <RectButton>
          <RejectText onPress={_rejectPress} theme={theme.ThemeMode}>
            انصراف
          </RejectText>
        </RectButton>

        <RectButton>
          <ConfirmText theme={theme.ThemeMode} onPress={_confirmPress}>
            تایید
          </ConfirmText>
        </RectButton>
      </View>
    </Container>
  );
};

export default ModalContent;

const PriceText = Styled.Text`

    font-family: IRANSans-Medium;
    font-size: 20;
    color: ${(props) => (props.theme === true ? '#000' : '#fff')};
    margin-top: ${wp('5%')}px;
`;

const TextInput = Styled.TextInput`

    height: ${wp('12%')}px;
    border: 1px solid ${(props) =>
      props.theme === true ? '#A62626' : '#EF5350'};
    border-radius: 5px;
    background-color: ${(props) => (props.theme === true ? '#fff' : '#616161')};
    justify-content: space-between;
    text-align: right;
    color: ${(props) => (props.theme === true ? '#000' : '#E0E0E0')}
`;

const Container = Styled.View`

    height: ${wp('60%')}px;
    width: ${wp('90%')}px;
    background-color: ${(props) => (props.theme === true ? '#fff' : '#616161')};
    padding-horizontal: 15px;
    padding-vertical: 15px;
    border-radius: 3px;
`;

const ConfirmText = Styled.Text`

    font-family: IRANSans-Medium;
    font-size: 20;
    color: ${(props) => (props.theme === true ? '#A62626' : '#EF5350')};
    padding:8px;
`;

const RejectText = Styled.Text`

    font-family: IRANSans-Medium;
    font-size: 20;
    color: ${(props) => (props.theme === true ? '#A62626' : '#EF5350')};
    padding: 8px;

`;
