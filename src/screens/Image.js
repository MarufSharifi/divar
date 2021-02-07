import React from 'react';
import Styled from 'styled-components';
import {useSelector} from 'react-redux';
import {Icon} from 'react-native-elements';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const ImageShow = ({route, navigation}) => {
  const {image} = route.params;

  const theme = useSelector((state) => state.ConditionReducer);

  const _onClosePress = () => {
    navigation.goBack();
  };

  navigation.setOptions({
    headerLeft: () => {
      return (
        <Icon
          onPress={_onClosePress}
          containerStyle={{marginLeft: 10}}
          name="close"
          color={theme.ThemeMode ? 'grey' : '#fff'}
          style={{fontSize: 25}}
        />
      );
    },
  });

  return (
    <Container theme={theme.ThemeMode}>
      <Image source={image} />
    </Container>
  );
};

export default ImageShow;

const Image = Styled.Image`

  width: ${wp('100%')};
  height: ${hp('57%')};
  margin-top: ${-1 * 40}px;
  resize-mode: cover;
  overflow: hidden;
`;

const Container = Styled.View`

  width: ${wp('100%')};
  flex: 1;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => (props.theme === true ? '#fff' : '#000')};
`;
