import React from 'react';
import {Text, View, useWindowDimensions} from 'react-native';
import {useSelector} from 'react-redux';
import Styled from 'styled-components';

const SearchFlatListComponent = ({name, Description, number}) => {
  const width = useWindowDimensions().width;

  const theme = useSelector((state) => state.ConditionReducer);

  return (
    <Container theme={theme.ThemeMode}>
      <View style={{flexDirection: 'column'}}>
        <Text
          style={{
            fontSize: 0.05 * width,
            fontFamily: 'IRANSans-Medium',
            marginBottom: 0.02 * width,
            color: theme.ThemeMode ? '#000' : '#fff',
          }}>
          {name}
        </Text>

        <Text
          style={{
            fontFamily: 'IRANSans-Light',
            fontSize: 0.038 * width,
            color: theme.ThemeMode ? '#707070' : '#E0E0E0',
          }}>
          {Description}
        </Text>
      </View>

      <Text
        style={{
          fontFamily: 'IRANSans-Light',
          fontSize: 0.0373 * width,
          color: theme.ThemeMode ? '#707070' : '#E0E0E0',
        }}>
        {number}
      </Text>
    </Container>
  );
};

export default SearchFlatListComponent;

const Container = Styled.View`

display: flex;
flex-direction: row;
justify-content: space-between;
padding: 10px;
background-color: ${(props) => (props.theme === true ? '#fff' : '#212121')};
`;
