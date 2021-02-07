import React, {useRef, useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Icon} from 'react-native-elements';
import {View, ScrollView, BackHandler} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useFocusEffect} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RectButton} from 'react-native-gesture-handler';
import Styled from 'styled-components';
import {Modalize} from 'react-native-modalize';
import Divider from '../components/divider';
import HeaderBottomSheet from '../components/HeaderImagePickerSheet';
import SheetBottom from '../components/BottomSheetImagePicker';
import StringIcon from '../components/StringIcon';
import Separator1 from '../components/Separator1';
import ImagePickerComponent from '../components/ImagePicker';
import action1 from '../redux/actions/ActionAddName';
import action2 from '../redux/actions/ActionAddDescription';
import actionRefresh from '../redux/actions/ActionRefresh';
import ModalRefresh from '../components/ModalRefreshContent';

const BottomSheet = [
  {name: 'از دوربین', iconName: 'camera-alt'},
  {name: 'از گالری', iconName: 'photo-library'},
];

const SabtHagahy = ({navigation}) => {
  const ThingObject = useSelector((state) => state.ThingSpecificReducer);

  const [description, setDescription] = useState(ThingObject.description);
  const [name, setName] = useState(ThingObject.name);

  const dispatch = useDispatch();

  const modalizeRef = useRef();

  let secondTextInput = useRef();

  const modalRefreshRef = useRef();

  const theme = useSelector((state) => state.ConditionReducer);

  const open = () => modalizeRef.current?.open();

  const close = () => modalizeRef.current?.close();

  const _setDescription = (value) => setDescription(value);

  const _setName = (value) => setName(value);

  const _buttonPress = () => {
    if (
      ThingObject.section !== 'انتخاب' &&
      description.length >= 10 &&
      name.length > 0 &&
      ThingObject.count > 1
    ) {
      dispatch(action2(description));
      dispatch(action1(name));
      navigation.navigate('SabtHagayNext');
    } else {
    }
  };

  const _onBack = () => {
    dispatch(action2(description));
    dispatch(action1(name));
    navigation.goBack();
    return true;
  };

  const _refreshOnPress = () => {
    modalRefreshRef.current?.open();
  };

  const _onButtonRejectPress = () => modalRefreshRef.current?.close();

  const _onButtonConfirmPress = () => {
    dispatch(actionRefresh());
    setName(ThingObject.name);
    setDescription(ThingObject.description);
    modalRefreshRef.current?.close();
  };

  navigation.setOptions({
    headerRight: () => (
      <Icon
        containerStyle={{marginRight: 10}}
        name="refresh"
        color={theme.ThemeMode ? 'grey' : '#E0E0E0'}
        onPress={_refreshOnPress}
      />
    ),
    headerLeft: () => (
      <Icon
        containerStyle={{marginLeft: 10}}
        name="close"
        color={theme.ThemeMode ? 'grey' : '#E0E0E0'}
        style={{fontSize: 25}}
        onPress={_onBack}
      />
    ),
  });

  useEffect(() => {
    setName(ThingObject.name);
    setDescription(ThingObject.description);
  }, [ThingObject.name, ThingObject.description]);

  useFocusEffect(
    React.useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', _onBack);

      return () => BackHandler.addEventListener('hardwareBackPress', _onBack);
    }, [name, description]),
  );

  const _handleParts = () => navigation.navigate('SabtHagayParts');

  const _handleSabtHagahyDirectory = () =>
    navigation.navigate('راهنمای ثبت آگهی');

  return (
    <KeyboardAwareScrollView
      style={{
        backgroundColor: theme.ThemeMode ? '#fff' : '#212121',
      }}
      resetScrollToCoords={{x: 0, y: 0}}
      contentContainerStyle={{
        backgroundColor: theme.ThemeMode ? '#fff' : '#212121',
        flex: 1,
      }}
      scrollEnabled={true}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StyledView theme={theme.ThemeMode}>
          <RectButton onPress={_handleParts}>
            <StringIcon name="دسته بندی" type={ThingObject.section} />
          </RectButton>

          <Separator1 />

          <RectButton onPress={_handleSabtHagahyDirectory}>
            <StringIcon name="راهنمای ثبت آگهی" iconName="navigate-before" />
          </RectButton>

          <Separator1 />

          <StyledTilteText theme={theme.ThemeMode}>عکس آگهی</StyledTilteText>
          <StyledText theme={theme.ThemeMode}>
            افزودن عکس بازدید آگهی شما را سه برار افزایش میدهد.
          </StyledText>

          <ImagePickerComponent action={open} />

          <StyledTilteText theme={theme.ThemeMode}>عنوان آگهی</StyledTilteText>

          <StyledText theme={theme.ThemeMode}>
            در عنوان آگهی به موارید مهم و چشمگیر اشاره کنید.
          </StyledText>

          <StyledFirstTextInput
            textAlign="right"
            onChangeText={_setName}
            onSubmitEditing={() => {
              secondTextInput.focus();
            }}
            value={name}
            theme={theme.ThemeMode}
            blurOnSubmit={false}
          />

          <StyledTilteText theme={theme.ThemeMode}>
            توضیحات آگهی
          </StyledTilteText>

          <StyledText theme={theme.ThemeMode}>
            جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره
            موبایل در متن آگهی مجاز نیست.
          </StyledText>

          <StyledSecondTextInput
            multiline={true}
            textAlign="right"
            value={description}
            onChangeText={_setDescription}
            textAlignVertical="top"
            theme={theme.ThemeMode}
            ref={(input) => {
              secondTextInput = input;
            }}
          />

          <StyledButton onPress={_buttonPress} theme={theme.ThemeMode}>
            بعدی
          </StyledButton>
        </StyledView>
      </ScrollView>

      <Modalize
        modalStyle={{
          backgroundColor: theme.ThemeMode ? '#fff' : '#424242',
          marginBottom: -1 * hp('10%'),
        }}
        HeaderComponent={() => (
          <View>
            <HeaderBottomSheet title="انتخاب عکس آگهی" />
            <Divider />
          </View>
        )}
        adjustToContentHeight={true}
        ref={modalizeRef}>
        <SheetBottom close={close} data={BottomSheet} />
      </Modalize>

      <Modalize
        modalStyle={{
          backgroundColor: theme.ThemeMode ? '#fff' : '#424242',
        }}
        HeaderComponent={() => (
          <View>
            <HeaderBottomSheet title="آیا مایل هستید ثبت آگهی را ار اول شروع کنید ؟" />
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

export default SabtHagahy;

const StyledSecondTextInput = Styled.TextInput`

  border: 1px solid ${(props) => (props.theme === true ? 'grey' : '#fff')};
  background-color: ${(props) => (props.theme === true ? '#fff' : '#616161')};
  color: ${(props) => (props.theme === true ? '#000' : '#fff')};
  marginBottom: ${wp('7%')}px;
  min-height: ${wp('20%')}px;
  border-radius: 5px;
  font-family: IRANSans-Medium;
`;

const StyledFirstTextInput = Styled.TextInput`
                
  border: 1px solid ${(props) => (props.theme === true ? 'grey' : '#fff')};
  height: ${wp('12%')}px;
  background-color: ${(props) => (props.theme === true ? '#fff' : '#616161')}
  border-radius: 5px;
  color: ${(props) => (props.theme === true ? '#000' : '#fff')}
  font-family: IRANSans-Medium;
`;

const StyledText = Styled.Text`

  font-family: IRANSans-Regular;
  font-size: 15;
  color: ${(props) => (props.theme === true ? '#707070' : '#E0E0E0')};
  marginBottom: 10px;
`;

const StyledView = Styled.View`

  background-color: ${(props) => (props.theme === true ? '#fff' : '#212121')};
  padding: 10px;
`;

const StyledButton = Styled.Text`

  color: #fff;
  background-color: ${(props) =>
  props.theme === true ? '#A62626' : '#EF5350'};
  height: ${wp('13%')}px;
  width: ${wp('40%')}px;
  border-radius: 4px;
  padding-vertical: ${wp('3%')}
  text-align: center;
  font-family: IRANSans-Light;
  font-size: ${wp('5%')}px;
  align-self: flex-end;
`;

const StyledTilteText = Styled.Text`

  font-family: IRANSans-Medium;
  font-size: 20;
  marginTop: 35px;
  color: ${(props) => (props.theme === true ? '#000' : '#fff')}
`;
