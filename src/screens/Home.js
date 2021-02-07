import React from 'react';
import {FlatList, View, StyleSheet, StatusBar, BackHandler} from 'react-native';
import {useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';
import FilterComponent from '../components/FilterComponent';
import ThingComponent from '../components/ThingComponent';
import Divider from '../components/divider';

const chipsData = [
  {index: 1, title: 'فلتر'},
  {index: 2, title: 'دسته ها'},
  {index: 3, title: 'زنانه'},
  {index: 4, title: 'مردانه'},
  {index: 5, title: 'خوراکی'},
  {index: 6, title: 'استهلاکی'},
  {index: 7, title: 'سفارشی'},
  {index: 8, title: 'زیورات'},
  {index: 9, title: 'وسایل خانه'},
  {index: 10, title: 'لوازم کودک'},
];

const Home = ({navigation}) => {
  const theme = useSelector((state) => state.ConditionReducer);
  const things = useSelector((state) => state.ThingReducer);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.addEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

  return (
    <View
      style={{backgroundColor: theme.ThemeMode ? '#fff' : '#212121', flex: 1}}>
      <StatusBar
        backgroundColor={theme.ThemeMode ? '#EEEEEE' : '#212121'}
        barStyle={theme.ThemeMode ? 'dark-content' : 'light-content'}
      />

      <View
        style={{
          backgroundColor: theme.ThemeMode ? '#FAFAFA' : '#424242',
          elevation: 1,
        }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          style={styles.chipFlatListStyle}
          keyExtractor={(item) => item.index}
          horizontal
          data={chipsData}
          renderItem={({item}) => (
            <FilterComponent index={item.index} title={item.title} />
          )}
        />
      </View>

      <FlatList
        keyExtractor={(item) => item.images[0] + ''}
        data={things}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({item, index}) => (
          <RectButton
            onPress={() => {
              navigation.navigate('descriptionOfThing', {thingIndex: index});
            }}>
            <ThingComponent
              name={item.name}
              price={item.price}
              location={item.location}
              image={item.images[0].uri}
            />
          </RectButton>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chipFlatListStyle: {
    marginVertical: 10,
  },
});

export default Home;
