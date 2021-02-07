import React from 'react';
import {View, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';
import {useHeaderHeight} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import Styled from 'styled-components';
import Image from '../components/ImagesField';
import String from '../components/String';
import Part from '../components/AboutFlatListField';
import {RectButton} from 'react-native-gesture-handler';

const data1 = [
  {
    title: 'راهنمای خرید امن',
    iconName: 'questioncircle',
    type: 'antdesign',
  },
  {
    title: 'گزارش مشکل آگهی',
    iconName: 'exclamationcircle',
    type: 'antdesign',
  },
];

const DescriptionOfThing = ({navigation, route}) => {
  const thing = useSelector((state) => state.ThingReducer);

  const index = route.params.thingIndex;

  const product = thing[index];

  const images = product.images;

  const data = [
    {
      title: 'نوع آگهی',
      subTitle: product.type,
    },
    {
      title: 'وضیعت',
      subTitle: product.state,
    },
    {
      title: 'نوع کالا',
      subTitle: 'راحتی',
    },
    {
      title: 'جنس بدنه',
      subTitle: 'چوب',
    },
    {
      title: 'قیمت',
      subTitle: product.price + ' افغانی',
    },
  ];

  const HeaderHeight = useHeaderHeight();

  const distance = useSharedValue(-100);

  const scrollOffset = useSharedValue(0.0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollOffset.value = event.contentOffset.y;
      if (Math.floor(scrollOffset.value) >= 300) {
        distance.value = 83;
      } else {
        distance.value = -100;
      }
    },
  });

  const AnimatedTextStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: distance.value}],
    };
  });

  const style = useAnimatedStyle(() => {
    return {
      opacity: scrollOffset.value / 300,
    };
  });

  navigation.setOptions({
    headerBackground: () => (
      <Animated.View
        style={[
          {
            backgroundColor: theme.ThemeMode ? '#fff' : '#424242',
            elevation: 1,
            height: HeaderHeight,
            width: '100%',
          },
          style,
        ]}></Animated.View>
    ),
    headerTitle: () => (
      <View style={{backgroundColor: 'transparent'}}>
        <Animated.Text
          style={[
            {
              backgroundColor: 'transparent',
              textAlign: 'center',
              fontSize: 20,
              position: 'absolute',
              fontFamily: 'IRANSans-Medium',
              color: theme.ThemeMode ? '#000' : '#fff',
              top: distance.value,
            },
            AnimatedTextStyle,
          ]}>
          {product.name}
        </Animated.Text>
      </View>
    ),
  });

  const theme = useSelector((state) => state.ConditionReducer);

  return (
    <View style={{backgroundColor: '#424242', flex: 1, position: 'relative'}}>
      <StyledView
        style={{marginTop: -1 * HeaderHeight}}
        theme={theme.ThemeMode}>
        <Animated.ScrollView
          onScroll={scrollHandler}
          showsVerticalScrollIndicator={false}>
          <FlatList
            keyExtractor={(item) => item}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={images}
            renderItem={({item}) => (
              <RectButton
                onPress={() => {
                  navigation.navigate('ImageShow', {image: item});
                }}>
                <Image source={item} />
              </RectButton>
            )}
          />

          <TitleText theme={theme.ThemeMode}>{product.name}</TitleText>
          <DescriptionText theme={theme.ThemeMode}>
            دقایق پیش در هرات طریق و غیره
          </DescriptionText>

          <FlatList
            data={data}
            renderItem={({item}) => {
              return (
                <String name={item.title} city={item.subTitle} divider={-1} />
              );
            }}
          />

          <TitleText theme={theme.ThemeMode}>توضیحات</TitleText>
          <Descriptions theme={theme.ThemeMode}>
            {product.description}
          </Descriptions>

          <FlatList
            data={data1}
            renderItem={({item}) => {
              return (
                <RectButton>
                  <Part
                    iconField={item.iconName}
                    title={item.title}
                    child={true}
                    iconType={item.type}
                    divider={-1}
                  />
                </RectButton>
              );
            }}
          />
        </Animated.ScrollView>
      </StyledView>

      <BottomStyledView theme={theme.ThemeMode}>
        <StyledButton theme={theme.ThemeMode}>اطلاعات تماس</StyledButton>
        <StyledButton theme={theme.ThemeMode}>چت</StyledButton>
      </BottomStyledView>
    </View>
  );
};

export default DescriptionOfThing;

const BottomStyledView = Styled.View`
            
           
display: flex;
flex: 1;
justify-content: space-between;
flex-direction: row;
align-items: center;
background-color: ${(props) => (props.theme === true ? '#FAFAFA' : '#424242')}
padding: 10px;
elevation: 1;

`;

const TitleText = Styled.Text`

color: ${(props) => (props.theme === true ? '#000' : '#fff')};
font-family: IRANSans-Medium;
font-size: 20px;
background-color: ${(props) => (props.theme === true ? '#fff' : '#212121')};
padding-horizontal: 10px;
padding-vertical: 15px;
`;

const DescriptionText = Styled.Text`
font-family: IRANSans-Regular;
background-color: ${(props) => (props.theme === true ? '#fff' : '#212121')};
color: ${(props) => (props.theme === true ? '#707070' : '#E0E0E0')}
padding-horizontal: 10px;
padding-bottom: 10px;
`;

const Descriptions = Styled.Text`
font-family: IRANSans-Regular;
font-size: 18;
background-color: ${(props) => (props.theme === true ? '#fff' : '#212121')};
color: ${(props) => (props.theme === true ? '#000' : '#fff')};
padding-horizontal: 10px;
padding-bottom: 10px;
`;

const StyledButton = Styled.Text`
color: ${(props) => (props.theme === true ? '#fff' : '#000')};
background-color: ${(props) => (props.theme === true ? '#A62626' : '#EF5350')};
height: ${wp('12%')}px;
width: ${wp('45.7%')}px;
border-radius: 4px;
color: #fff
padding-vertical: 10px;
padding-horizontal: 5px;
text-align: center;
font-family: IRANSans-Light;
font-size: ${wp('5%')}px;
`;

const StyledView = Styled.View`

height: ${hp('85%')}px;
background-color: ${(props) => (props.theme === true ? '#fff' : '#212121')}
`;
