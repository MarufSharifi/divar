import React, {useRef, useState, useCallback} from 'react';
import {SectionList, View, BackHandler} from 'react-native';
import {Icon} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';
import {useFocusEffect} from '@react-navigation/native';
import {Divider} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import {RectButton} from 'react-native-gesture-handler';
import Styled from 'styled-components';
import {Modalize} from 'react-native-modalize';
import HeaderBottomSheet1 from '../components/HeaderImagePickerSheet';
import HeaderBottomSheet from '../components/HeaderBottomSheet';
import StringCheckBox from '../components/StringCheckBox';
import HeaderField from '../components/HeaderField';
import SheetBottom from '../components/BottomSheet';
import ModalContent from '../components/ModalContent';
import actionRefresh from '..//redux/actions/ActionRefresh';
import ModalRefresh from '../components/ModalRefreshContent';

const BottomSheet1 = ['فروشی', 'درخواستی'];

const BottomSheet2 = ['نوع', 'در حد نوع', 'کار کرده', 'نیاز به تعمیر'];

const SabtHagahy2 = ({navigation}) => {
  const [modalVisibality, setModalVisibality] = useState(false);

  const modalizeRef = useRef();
  const modalizeRef1 = useRef();
  const modalRefreshRef = useRef();

  const theme = useSelector((state) => state.ConditionReducer);
  const thing = useSelector((state) => state.ThingSpecificReducer);

  const [hasPrice, setHasPrice] = useState(
    thing.price != 'تعین' ? true : false,
  );

  const dispatch = useDispatch();

  const DATA = [
    {
      title: 'مشخصات کلی',
      data: [
        {name: 'محدوده آگهی', type: thing.location},
        {name: 'نوع آگهی', type: thing.type},
      ],
    },
    {
      title: 'ویژگی ها',
      data: [
        {name: 'وضعیت', type: thing.state},
        {
          name: 'قیمت',
          type: thing.price === 'تعین' ? thing.price : thing.price + ' اففانی',
        },
        {name: 'مایلم معاوضه کنم'},
      ],
    },
  ];

  const OnOpen1 = () => {
    modalizeRef.current?.open();
  };

  const OnClose1 = () => {
    modalizeRef.current?.close();
  };

  const OnOpen2 = () => {
    modalizeRef1.current?.open();
  };

  const OnClose2 = () => {
    modalizeRef1.current?.close();
  };

  const modalClose = useCallback(() => {
    setModalVisibality(false);
  }, [modalVisibality]);

  const _onButtonRejectPress = () => modalRefreshRef.current?.close();

  const _onButtonConfirmPress = () => {
    modalRefreshRef.current?.close();
    dispatch(actionRefresh());
    navigation.navigate('ثبت آگهی');
  };

  const _setHasPrice = () => {
    setHasPrice(true);
  };

  const _buttonClicked = () => {
    if (hasPrice) {
      navigation.navigate('SabtHaghy3');
    }
  };

  const _onRefreshPress = () => {
    modalRefreshRef.current?.open();
  };

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.goBack();
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.addEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

  navigation.setOptions({
    headerRight: () => (
      <Icon
        containerStyle={{marginRight: 10}}
        name="refresh"
        color={theme.ThemeMode ? '#707070' : '#E0E0E0'}
        onPress={_onRefreshPress}
      />
    ),
  });

  return (
    <View
      style={{
        height: hp('100%'),
        backgroundColor: theme.ThemeMode ? '#fff' : '#212121',
      }}>
      <StyledView theme={theme.ThemeMode}>
        <SectionList
          showsVerticalScrollIndicator={false}
          sections={DATA}
          keyExtractor={(item, index) => item.name + index}
          renderItem={({item}) => (
            <RectButton
              onPress={() => {
                switch (item.name) {
                  case 'محدوده آگهی':
                    navigation.navigate('Mahdudahagy');
                    break;
                  case 'نوع آگهی':
                    OnOpen1();
                    break;
                  case 'وضعیت':
                    OnOpen2();
                    break;
                  case 'قیمت':
                    setModalVisibality(!modalVisibality);
                }
              }}>
              <StringCheckBox
                name={item.name}
                type={item.type}
                checkBox={'wantExchange'}
              />
            </RectButton>
          )}
          renderSectionHeader={({section: {title}}) => (
            <HeaderField title={title} />
          )}
          ItemSeparatorComponent={() => (
            <Divider style={{backgroundColor: '#707070'}} />
          )}
          renderSectionFooter={() => (
            <Divider style={{backgroundColor: '#707070'}} />
          )}
        />

        <StyledButton theme={theme.ThemeMode} onPress={_buttonClicked}>
          بعدی
        </StyledButton>

        <Modal
          presentationStyle="pageSheet"
          animationType="slide"
          backdropColor={theme.ThemeMode ? 'grey' : '#707070'}
          backdropOpacity={theme.ThemeMode ? 0.9 : 0.2}
          onBackButtonPress={() => {
            setModalVisibality(false);
          }}
          onBackdropPress={() => {
            setModalVisibality(false);
          }}
          isVisible={modalVisibality}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ModalContent _modalClose={modalClose} set={_setHasPrice} />
          </View>
        </Modal>

        <Modalize
          modalStyle={{backgroundColor: theme.ThemeMode ? '#fff' : '#424242'}}
          HeaderComponent={() => (
            <View>
              <HeaderBottomSheet title="نوع آگهی" />
              <Divider />
            </View>
          )}
          adjustToContentHeight={true}
          ref={modalizeRef}>
          <SheetBottom data={BottomSheet1} close1={OnClose1} />
        </Modalize>

        <Modalize
          modalStyle={{backgroundColor: theme.ThemeMode ? '#fff' : '#424242'}}
          HeaderComponent={() => (
            <View>
              <HeaderBottomSheet title="وضعیت" />
              <Divider />
            </View>
          )}
          adjustToContentHeight={true}
          ref={modalizeRef1}>
          <SheetBottom data={BottomSheet2} close2={OnClose2} />
        </Modalize>

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
      </StyledView>
    </View>
  );
};

export default SabtHagahy2;

const StyledButton = Styled.Text`
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
    position: absolute;
    bottom: 20px;
    right: 15px;
`;

const StyledView = Styled.View`
    position: relative;
    height: ${hp('89%')}
    background-color: ${(props) => (props.theme === true ? '#fff' : '#212121')};
    padding-horizontal: 15px;

`;
