import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Unorderedlist from 'react-native-unordered-list';
import {useSelector} from 'react-redux';
import Styled from 'styled-components';
import {ScrollView} from 'react-native-gesture-handler';

const array1 = [
  'از تصاویر با کیفیت و واقعی استفاده کنید.',
  'تصاویر با لوگو و برچسپ دیوار، قابل انتشار نیستند.',
  'تصاویر شامل اطلاعات شخصی مجاز نیست.',
  'تصاویر مطلق به آگهی دیگری در دیوار نباشند.',
  'از درج شماره تماس و قیمت روی آگهی خودداری کنید.',
  'استفاده ابزاری از تصاویر اشخاص در آگهی، درج بی مورید عکس صورت اشخاص یا استفاده از عکس کودکان برای معرفی کالا مجاز نیست.',
];

const array2 = [
  'نام کالا یا خدمات خود را در عنوان آگهی قرار دهید.',
  'هرآگهی فقط برای یک کالا است.',
  'امکان انتشار آگهی با محتوای مشابه وجود ندارد.',
  'از درج قیمت در عنوان آگهی خودداری کنید.',
  'استفاده از عبارات یا کلماتی مانند: ویژه، رند، مفت، ارزان، زیرقیمت، استسنایی، حراج و موارید مشابه مجاز نیست.',
];

const array3 = [
  'توضیحات آگهی را کامل بنویسید.',
  'برای ارایه خدمات آنلاین در دسته بندی سمنش درج سایت انترنتی درج آدرس شبکه های اجتماعی  باید پرداخت هزینه نمشنس شمسنی.',
  'درج شماره تلفن در توضیحات آگهی مجاز نیست.',
  'در آگهی درخواست بیعانه نکنید.',
  'درج اطلاعات بانکی و هویت در آگهی مجاز نیست.',
];

const SabtHagahyDirectory = () => {
  const width = useWindowDimensions().width;

  const theme = useSelector((state) => state.ConditionReducer);

  return (
    <View
      style={{
        paddingHorizontal: 20,
        backgroundColor: theme.ThemeMode ? '#fff' : '#212121',
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TitleText theme={theme.ThemeMode}>عکس آگهی</TitleText>

        <ViewSeparatore>
          {array1.map((value) => {
            return (
              <Unorderedlist color={theme.ThemeMode ? '#707070' : '#E0E0E0'}>
                <SimpleText theme={theme.ThemeMode}>{value}</SimpleText>
              </Unorderedlist>
            );
          })}
        </ViewSeparatore>

        <TitleText theme={theme.ThemeMode}>عنوان آگهی</TitleText>

        <ViewSeparatore>
          {array2.map((value) => {
            return (
              <Unorderedlist color={theme.ThemeMode ? '#707070' : '#E0E0E0'}>
                <SimpleText theme={theme.ThemeMode}>{value}</SimpleText>
              </Unorderedlist>
            );
          })}
        </ViewSeparatore>

        <TitleText theme={theme.ThemeMode}>توضیحات آگهی</TitleText>

        <ViewSeparatore>
          {array3.map((value) => {
            return (
              <Unorderedlist color={theme.ThemeMode ? '#707070' : '#E0E0E0'}>
                <SimpleText theme={theme.ThemeMode}>{value}</SimpleText>
              </Unorderedlist>
            );
          })}
        </ViewSeparatore>
      </ScrollView>
    </View>
  );
};

export default SabtHagahyDirectory;

const SimpleText = Styled.Text`
font-family: IRANSans-Regular;
font-size: 15;
color: ${(props) => (props.theme === true ? '#707070' : '#E0E0E0')}
    
`;

const TitleText = Styled.Text`

font-family: IRANSans-Medium;
font-size: 20;
color: ${(props) => (props.theme === true ? '#000' : '#fff')};
padding-vertical: ${wp('5%')}px;
`;

const ViewSeparatore = Styled.View`

margin-bottom: 10px;
`;
