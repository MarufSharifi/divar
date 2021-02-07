import React, {useEffect, useState, useCallback} from 'react';
import {View, FlatList, BackHandler} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {StackActions, useFocusEffect} from '@react-navigation/native';
import Geocoder from 'react-native-geocoder-reborn';
import Modal from 'react-native-modal';
import Permission from '..//AppPermission';
import actionFirstTime from '..//redux/actions/ActionChangeFirstTime';
import {useDispatch, useSelector} from 'react-redux';
import {RectButton} from 'react-native-gesture-handler';
import StringIcon from '..//components/StringIcon';
import action from '../redux/actions/ActionAddLocation';
import {Divider} from 'react-native-elements';
import ModalContent from '../components/ModalPermission';

const MahdudaHagahy = ({navigation}) => {
  const [city, setCityName] = useState('انتخاب');

  const theme = useSelector((state) => state.ConditionReducer);

  const [modalVisibality, setModalVisibality] = useState(false);

  const dispatch = useDispatch();

  const data = [
    {name: 'شهر من', cityName: city},
    {name: 'انتخاب محدوده از روی نقشه', iconName: 'navigate-before'},
    {name: 'کابل'},
    {name: 'غزنی'},
    {name: 'مزار'},
    {name: 'سبزوار'},
  ];

  Geocoder.setLanguage('fa');

  const getLocation = () => {
    const permission = Permission.checkPermission();

    if (permission) {
      Geolocation.getCurrentPosition(
        (position) => {
          Geocoder.geocodePosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
            .then((res) => {
              setCityName(res[0].locality);
              condition = false;
              navigation.goBack();
            })
            .catch((err) => {
              // console.log(err)
            });
        },
        () => {
          if (theme.FirstTime === true) {
            dispatch(actionFirstTime());
          } else {
            setModalVisibality(true);
          }
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  };

  const modalClose = useCallback(() => {
    setModalVisibality(false);
  }, [modalVisibality]);

  useEffect(() => {
    dispatch(action(city));
  }, [city]);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.dispatch(StackActions.replace('SabtHagayNext'));
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.addEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

  return (
    <View
      onLayout={getLocation}
      style={{
        backgroundColor: theme.ThemeMode ? '#fff' : '#212121',
        flex: 1,
        paddingHorizontal: 10,
      }}>
      <Modal
        presentationStyle="pageSheet"
        animationType="none"
        backdropColor={theme.ThemeMode ? 'grey' : '#707070'}
        backdropOpacity={theme.ThemeMode ? 0.5 : 0.2}
        onBackButtonPress={() => {
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
          <ModalContent _modalClose={modalClose} set={getLocation} />
        </View>
      </Modal>
      <FlatList
        data={data}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({item}) => (
          <RectButton
            onPress={() => {
              switch (item.name) {
                case 'کابل':
                  setCityName('کابل');
                  break;
                case 'غزنی':
                  setCityName('غزنی');
                  break;
                case 'مزار':
                  setCityName('مزار');
                  break;
                case 'سبزوار':
                  setCityName('سبزوار');
                  break;
              }
            }}>
            <StringIcon
              name={item.name}
              iconName={item.iconName}
              type={item.cityName}
            />
          </RectButton>
        )}
      />
    </View>
  );
};

export default MahdudaHagahy;
