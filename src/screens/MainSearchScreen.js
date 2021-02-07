import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import Styled from 'styled-components';
import SearchFlatListField from '../components/SearchFlatListField';
import Divider from '../components/divider';

const data = [
  {name: 'تقفات', Description: 'تقئعجز3تب', number: '10+ ابلق'},
  {name: 'lkalkdasd', Description: 'lhlksd desd', number: '+ sdslka'},
];

const MainSearchScreen = () => {
  const theme = useSelector((state) => state.ConditionReducer);

  return (
    <MainContainer theme={theme.ThemeMode}>
      <FlatList
        keyExtractor={(item) => item.name}
        data={data}
        ItemSeparatorComponent={() => <Divider />}
        ListFooterComponent={() => <Divider />}
        renderItem={({item}) => (
          <SearchFlatListField
            name={item.name}
            Description={item.Description}
            number={item.number}
          />
        )}
      />
    </MainContainer>
  );
};

export default MainSearchScreen;

const MainContainer = Styled.View`

display: flex;
flex: 1;
background-color: ${(props) => (props.theme === true ? '#fff' : '#212121')};
`;
