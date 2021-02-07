import React from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {RectButton} from 'react-native-gesture-handler';
import ThingComponent from '../components/ThingComponent';
import Divider from '../components/divider';

const Marks = () => {

  const theme = useSelector((state) => state.ConditionReducer);
  const thing = useSelector((state) => state.ThingReducer);

  return (
    <View
      style={{backgroundColor: theme.ThemeMode ? '#fff' : '#212121', flex: 1}}>
      <FlatList
        keyExtractor={(item) => item.image + ''}
        data={thing}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({item}) => (
          <RectButton
            onPress={() => {
              dispatch(action(false));
              navigation.navigate('descriptionOfThing');
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

export default Marks;
