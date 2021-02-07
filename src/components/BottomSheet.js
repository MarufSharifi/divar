import React from 'react';
import {FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import BottomSheetField from '../components/BottomSheetFlield';
import {RectButton} from 'react-native-gesture-handler';
import action1 from '..//redux/actions/ActionAddType';
import action2 from '..//redux/actions/ActionAddState';

const BottomSheet = ({data, close1, close2}) => {
  const dispatch = useDispatch();

  _onFieldPress = (value) => {
    if (value === 'فروشی' || value === 'درخواستی') {
      dispatch(action1(value));
      close1();
    } else {
      dispatch(action2(value));
      close2();
    }
  };

  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <RectButton
          onPress={() => {
            -_onFieldPress(item);
          }}>
          <BottomSheetField title={item} />
        </RectButton>
      )}
    />
  );
};

export default BottomSheet;
