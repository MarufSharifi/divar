import React from 'react';
import {View, StyleSheet} from 'react-native';

const Separator1 = () => {
  return <View style={styles.viewStyle}></View>;
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 0.4,
    backgroundColor: 'grey',
  },
});

export default Separator1;
