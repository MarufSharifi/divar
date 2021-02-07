import React from 'react';
import {FlatList} from 'react-native';
import Styled from 'styled-components';
import {useSelector} from 'react-redux';
import PartsField from '..//components/AboutFlatListField';
import Divider from '../components/divider';

const data = [{name: 'تقفات'}, {name: 'lkalkdasd'}];

const PartSearch = () => {
  const theme = useSelector((state) => state.ConditionReducer);

  return (
    <MainContainer theme={theme.ThemeMode}>
      <FlatList
        keyExtractor={(item) => item.name}
        data={data}
        ListFooterComponent={() => <Divider />}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({item}) => <PartsField title={item.name} color={true} />}
      />
    </MainContainer>
  );
};

export default PartSearch;

const MainContainer = Styled.View`

display: flex;
flex: 1;
background-color: ${(props) => (props.theme === true ? '#fff' : '#212121')};
`;
