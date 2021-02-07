import React from 'react';
import {View, StyleSheet} from 'react-native';

const Divider = () => {
  return <View style={styles.viewStyle}></View>;
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 0.4,
    marginHorizontal: 10,
    backgroundColor: 'grey',
  },
});

export default Divider;
