import React from 'react';
import {View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Icon} from 'react-native-elements';
import Styled from 'styled-components';
import {useSelector} from 'react-redux';

const AboutFlatListField = ({
  iconField,
  title,
  child,
  childes,
  iconType,
  hasSpace,
  color,
  divider,
}) => {
  const theme = useSelector((state) => state.ConditionReducer);

  return (
    <MainContainer divider={divider}>
      <ContainerStyle theme={theme.ThemeMode}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name={iconField}
            type={iconType ? iconType : 'material'}
            color={theme.ThemeMode ? '#707070' : '#E0E0E0'}
            style={{fontSize: wp('50')}}
          />

          <TextStyle theme={theme.ThemeMode} color={color}>
            {title}
          </TextStyle>
        </View>

        <View>
          {child ? (
            <Icon
              name="navigate-before"
              color={theme.ThemeMode ? '#707070' : '#E0E0E0'}
              style={{fontSize: wp('50')}}
            />
          ) : null}
        </View>
      </ContainerStyle>

      {(
        theme.ShowChildren && hasSpace && childes !== undefined ? true : false
      ) ? (
        <Text style={{marginBottom: 10}}>{childes}</Text>
      ) : null}
    </MainContainer>
  );
};

const aboutPropsAreEquale = (prevProps, nextProps) => {
  return (
    prevProps.iconField === nextProps.iconField &&
    prevProps.title === nextProps.title &&
    prevProps.child === nextProps.child &&
    prevProps.childes === nextProps.childes &&
    prevProps.iconType === nextProps.iconType
  );
};

export default React.memo(AboutFlatListField, aboutPropsAreEquale);

const ContainerStyle = Styled.View`

            height: ${wp('16%')}px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            alignItems: center;   
    `;

const TextStyle = Styled.Text`
        color: ${(props) =>
          props.theme === true ? (props.color ? '#000' : 'grey') : 'white'};
        font-size: 15px;
        margin-left: 10px;
        font-family: IRANSans-Medium;
    `;

const Text = Styled.Text`

        font-family: IRANSans-Regular;
        font-size: 15px;
        color: #707070;
        padding-horizontal: 10px;
  
    `;

const MainContainer = Styled.View`

    margin-horizontal: 10px;
    border-top-width: ${(props) => (props.divider === 1 ? '0.5px' : '0px')};
    border-bottom-width: ${(props) => (props.divider === -1 ? '0.5px' : '0px')};
    border-top-color: #707070;
    border-bottom-color: #707070;
`;
