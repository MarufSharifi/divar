import React from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import ThingComponent from '../components/ThingComponent';
import Divider from '../components/divider';



const RecentlyViewed = () => {

  const theme = useSelector((state) => state.ConditionReducer);
  const thing = useSelector((state) => state.ThingReducer);
  
  return (
    <View
      style={{flex: 1, backgroundColor: theme.ThemeMode ? '#fff' : '#212121'}}>
      <FlatList
        keyExtractor={(item) => item.image + ''}
        data={thing}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({item}) => (
          <ThingComponent
            name={item.name}
            price={item.price}
            location={item.location}
            image={item.images[0].uri}
          />
        )}
      />
    </View>
  );
};

export default RecentlyViewed;
