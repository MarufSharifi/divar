import React, {useState, useRef} from 'react';
import {FlatList, View, BackHandler, ScrollView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Icon} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import {HeaderBackButton} from '@react-navigation/stack';
import {Modalize} from 'react-native-modalize';
import HeaderBottomSheet1 from '../components/HeaderImagePickerSheet';
import {Divider} from 'react-native-elements';
import StringCheckBox from '../components/StringCheckBox';
import action from '..//redux/actions/ActionAddPhone';
import StyledButton from '..//components/Button';
import actionRefresh from '..//redux/actions/ActionRefresh';
import ModalRefresh from '../components/ModalRefreshContent';

const data = ['چت دیوار فعال شود', 'شماره تلفن در آگهی نمایش داده نشود'];

const Sabthagahy3 = ({navigation}) => {
  const dispatch = useDispatch();
  const thing = useSelector((state) => state.ThingSpecificReducer);

  const modalRefreshRef = useRef();

  const [phone, setPhone] = useState(thing.phone);

  const theme = useSelector((state) => state.ConditionReducer);

  const _setPhone = (value) => {
    setPhone(value);
  };

  const _onBackPress = () => {
    dispatch(action(phone));
    navigation.goBack();
    return true;
  };

  useFocusEffect(
    React.useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', _onBackPress);

      return () =>
        BackHandler.addEventListener('hardwareBackPress', _onBackPress);
    }, []),
  );

  const _onButtonRejectPress = () => modalRefreshRef.current?.close();

  const _onButtonConfirmPress = () => {
    modalRefreshRef.current?.close();
    dispatch(actionRefresh());
    navigation.navigate('ثبت آگهی');
  };

  const _onRefreshPress = () => {
    modalRefreshRef.current?.open();
  };

  navigation.setOptions({
    headerRight: () => (
      <Icon
        containerStyle={{marginRight: 10}}
        name="refresh"
        color={theme.ThemeMode ? '#707070' : '#E0E0E0'}
        onPress={_onRefreshPress}
      />
    ),
    headerLeft: () => (
      <HeaderBackButton
        tintColor={theme.ThemeMode ? 'grey' : '#E0E0E0'}
        onPress={_onBackPress}
      />
    ),
  });

  return (
    <KeyboardAwareScrollView
      style={{
        backgroundColor: theme.ThemeMode ? '#fff' : '#212121',
      }}
      resetScrollToCoords={{x: 0, y: 0}}
      contentContainerStyle={{
        backgroundColor: theme.ThemeMode ? '#fff' : '#212121',
        paddingHorizontal: 10,
        flex: 1,
      }}
      scrollEnabled={true}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{height: hp('89%'), position: 'relative'}}>
          <TitleText theme={theme.ThemeMode}>شماره موبایل</TitleText>
          <DescriptionText theme={theme.ThemeMode}>
            توجه: لطفا پس از ثبت آگهی، از طریق هیج پیامکی برای پرداخت وجه جهت
            انتشار آگهی اقدام نکنید. کد تایید یه شماره موبایل شما ارسال خواهد
            شد. تماس و چت نیز با این شماره انجام میشود.
          </DescriptionText>
          <TextInput
            placeholder="شماره موبایل شما (*** **** 0911)"
            placeholderTextColor={theme.ThemeMode ? '#707070' : '#E0E0E0'}
            textAlign="right"
            value={phone}
            onChangeText={_setPhone}
            keyboardType="phone-pad"
            theme={theme.ThemeMode}
          />

          <FlatList
            keyExtractor={(item) => item}
            data={data}
            ItemSeparatorComponent={() => <Divider />}
            renderItem={({item}) => <StringCheckBox name={item} />}
            ListFooterComponent={() => <Divider />}
          />
          <StyledButton
            phone={phone}
            navigation={navigation}
            count={thing.count}
            value={thing.images}
          />
        </View>
      </ScrollView>

      <Modalize
        modalStyle={{
          backgroundColor: theme.ThemeMode ? '#fff' : '#424242',
        }}
        HeaderComponent={() => (
          <View>
            <HeaderBottomSheet1 title="آیا مایل هستید ثبت آگهی را ار اول شروع کنید ؟" />
            <Divider />
          </View>
        )}
        adjustToContentHeight={true}
        ref={modalRefreshRef}>
        <ModalRefresh
          close={_onButtonRejectPress}
          open={_onButtonConfirmPress}
        />
      </Modalize>
    </KeyboardAwareScrollView>
  );
};

export default Sabthagahy3;

const TextInput = Styled.TextInput`

height: ${wp('12%')}px;
border: 1px solid ${(props) => (props.theme === true ? '#A62626' : '#fff')};
border-radius: 5px;
margin-vertical: 10px;
color: ${(props) => (props.theme === true ? '#000' : '#fff')}
background-color: ${(props) => (props.theme === true ? '#fff' : '#616161')}
`;

const TitleText = Styled.Text`

font-family: IRANSans-Medium;
font-size: 20;
color: ${(props) => (props.theme === true ? '#000' : '#fff')};
margin-vertical: 15px;

`;

const DescriptionText = Styled.Text`

font-family: IRANSans-Regular;
font-size: 17;
color: ${(props) => (props.theme === true ? '#707070' : '#E0E0E0')};
`;
