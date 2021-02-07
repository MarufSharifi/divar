import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {useSelector} from 'react-redux';
import {Icon} from 'react-native-elements';
import {Chip} from 'react-native-paper';

const FilterComponent = ({index, title}) => {
  const cancelFilter = () => {
    Alert.alert('the filter canceled');
  };

  const _OnChipClicked = () => {
    Alert.alert('the has been clicked');
  };
  const theme = useSelector((state) => state.ConditionReducer);

  return (
    <View style={{flex: 1, marginRight: 8}}>
      {true ? (
        <Chip
          mode="outlined"
          selected={true}
          selectedColor="#A62626"
          onClose={cancelFilter}
          icon={() => (
            <Icon
              color={theme.ThemeMode ? '#707070' : '#E0E0E0'}
              name="filter"
              type="material-community"
              style={styles.iconStyle}
            />
          )}
          key={index}
          textStyle={{
            color: theme.ThemeMode ? '#000' : '#E0E0E0',
            fontSize: 15,
          }}
          style={{
            backgroundColor: theme.ThemeMode ? '#fff' : '#616161',
            borderColor: theme.ThemeMode ? 'grey' : '#F5F5F5',
            borderWidth: 0.5,
          }}
          onPress={() => {
            Alert.alert('chip clicked');
          }}>
          {title}
        </Chip>
      ) : (
        <Chip
          icon={() => (
            <Icon
              color={theme.ThemeMode ? '#707070' : '#E0E0E0'}
              name="search"
              style={styles.iconStyle}
            />
          )}
          key={index}
          textStyle={{
            color: theme.ThemeMode ? '#000' : '#E0E0E0',
            fontSize: 15,
          }}
          style={{
            backgroundColor: theme.ThemeMode ? '#fff' : '#616161',
            borderColor: '#F5F5F5',
            borderWidth: 0.5,
          }}
          onPress={_OnChipClicked}>
          {title}
        </Chip>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    height: 15,
    width: 20,
  },
});

export default FilterComponent;
