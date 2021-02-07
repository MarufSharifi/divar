import React from 'react';
import {FlatList} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {RectButton} from 'react-native-gesture-handler';
import action from '../redux/actions/ActionAddThing';
import BottomSheetImagePickerField from './BottomSheetFieldImagePicker';

const options = {
  title: 'Select Avatar',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const BottomSheet = ({data, close}) => {
  const dispatch = useDispatch();

  const openCamera = () => {
    ImagePicker.launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('your request has been canceled');
      } else if (response.error) {
        console.log('you han a error');
      } else if (response.customButton) {
        console.log('the use pressed customButton');
      } else {
        const source = {uri: response.uri};
        close();
        dispatch(action(source));
      }
    });
  };

  const openGallary = () => {
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('your request has been canceled');
      } else if (response.error) {
        console.log('you han a error');
      } else if (response.customButton) {
        console.log('the use pressed customButton');
      } else {
        const source = {uri: response.uri};
        close();
        dispatch(action(source));
      }
    });
  };

  return (
    <FlatList
      style={{paddingBottom: 80}}
      data={data}
      renderItem={({item}) => (
        <RectButton
          onPress={() => {
            if (item.name === 'از دوربین') {
              openCamera();
            } else {
              close();
              openGallary();
              close();
            }
          }}>
          <BottomSheetImagePickerField
            title={item.name}
            iconName={item.iconName}
          />
        </RectButton>
      )}
    />
  );
};

export default BottomSheet;
