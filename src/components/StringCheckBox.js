import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useWindowDimensions} from 'react-native';
import {CheckBox} from 'react-native-elements';
import Styled from 'styled-components';
import action from '../redux/actions/ActionAddWantExchange';

const StringCheckBox = ({name, type, checkBox}) => {
  const width = useWindowDimensions().width;

  const theme = useSelector((state) => state.ConditionReducer);
  const Thing = useSelector((state) => state.ThingSpecificReducer);

  const [chatSelection, setChatSelection] = useState(false);
  const [phoneSelection, setPhoneSelection] = useState(false);

  const dispatch = useDispatch();

  const [selection, setSelection] = useState(Thing.wantChange);

  const _setSelection = () => {
    if (checkBox === 'wantExchange') {
      dispatch(action(!selection));
      setSelection(!selection);
    } else if (name === 'چت دیوار فعال شود') {
      setChatSelection(!chatSelection);
    } else {
      setPhoneSelection(!phoneSelection);
    }
  };

  return (
    <Container theme={theme.ThemeMode}>
      <TextStyle2 theme={theme.ThemeMode}>{name}</TextStyle2>

      {type ? (
        <TextStyle1 theme={theme.ThemeMode}>{type}</TextStyle1>
      ) : (
        <CheckBox
          uncheckedColor={theme.ThemeMode ? '#707070' : '#E0E0E0'}
          checkedColor={theme.ThemeMode ? '#A62626' : '#EF5350'}
          checked={
            checkBox === 'wantExchange'
              ? selection
              : name === 'چت دیوار فعال شود'
              ? chatSelection
              : phoneSelection
          }
          size={24}
          containerStyle={{padding: 0}}
          onPress={_setSelection}
        />
      )}
    </Container>
  );
};

export default StringCheckBox;

const Container = Styled.View`

display: flex;
flex-direction: row;
height: ${wp('16%')};
justify-content: space-between;
align-items: center;
background-color: ${(props) => (props.theme === true ? '#fff' : '#212121')};

`;

const TextStyle2 = Styled.Text`

font-family: IRANSans-Medium;
color: ${(props) => (props.theme === true ? '#000' : '#fff')};
font-size: ${wp('4.5%')}px;
`;

const TextStyle1 = Styled.Text`

font-family: IRANSans-Light;
font-size:  ${wp('4%')}px;
color: ${(props) => (props.theme === true ? '#000' : '#E0E0E0')};
`;
