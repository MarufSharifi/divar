import React, {useMemo} from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import action from '..//redux/actions/ActionAddPhone';
import actionImages from '..//redux/actions/ActionAddImagesEnd';
import actionMain from '..//redux/actions/ActionAddAll';
import actionRefresh from '..//redux/actions/ActionRefresh';


const Button = ({phone, count, navigation, value}) => {
  const dispatch = useDispatch();

  useMemo(() => {
    if (phone.length !== '') {
      dispatch(action(phone));
    }
  }, [phone]);

  const thing = useSelector((state) => state.ThingSpecificReducer);

  const theme = useSelector((state) => state.ConditionReducer);

  const _buttonPress = () => {
    if (phone.trim() != '') {
     
        dispatch(actionImages(setImages(count, value)));

        console.log("some thing new in redux", thing);
        dispatch(actionMain(thing));
        dispatch(actionRefresh());
        navigation.navigate('هرات');
     
    } else {
    }
  };

  return (
    <StyledButton onPress={_buttonPress} theme={theme.ThemeMode}>
      ارسال کد تایید به شماره موبایل
    </StyledButton>
  );
};

export default Button;

const StyledButton = Styled.Text`
  position: absolute;
  bottom: 20px;
  color: #fff;
  background-color: ${(props) => (props.theme === true ? '#A62626' : '#EF5350')};
  height: ${wp('13%')}px;
  width: ${wp('100%')}
  border-radius: 4px;
  padding-vertical: ${wp('3%')}px;
  padding-horizontal: ${wp('1.5%')}px;
  text-align: center;
  font-family: IRANSans-Light;
  font-size: ${wp('5%')}px;
  `;

const setImages = (count, images) => {

  if (count >= 6) {
    images.shift();
    return images;
  } else {
    images.shift();
    for(i = count ; i < 6; i++){
       images.pop();
    }

    return images;
  }
};
