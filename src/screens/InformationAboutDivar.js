import React from 'react';
import {View} from 'react-native';
import Styled from 'styled-components';

const publicInformation =
  'دیوار از سال 1392 با هدف خرید و فروش بدون واسطه  آنلاین آغاز به کار کرد. امتیاز برند دیوار توسط شرکت «آگه پردازان هوشمند»(سهامی خاص) در تمامی مراجع قانون ثبت شده است.';
const firstTitle = 'نیازمندی های ریز و درشت شما روی دیوار';
const secondTitle = 'برای قرار دادن آگهی های خود در دیوار';
const thirdTitle = 'خرید و فروش بی واسطه';
const firstInfo =
  'در دیوار به آسانی میتوانید نیازمندی هایتان را بر اساس محله دسته بندی کنید و نزدیک ترین ها را بیابید.';
const secondInfo =
  'شهرتان را مشخص نمایید. علامت <<+ ارسال آگهی رایگان>> را انتخاب کنید و آنگاه آگهی تان را بفرستید.\n فراموش نکنید پیش از هر چیز یک شماره تلفن برای ارسال آگهی ضروری است. شما میتوانید برای کالا یا خدمات تان عکس نیز انتخاب کنید.\n به این ترتیب میلیونها کاربر دیوار ';
const continiue =
  'به آسانی آگهی شما را خواهند دید و بر اساس محل آگهی شما را راحت تر خواهند یافت.';
const thirdInfo =
  'در دیوار کاربران مستقیما باهم تماس میگیرند و هیج واسطه ای در این میان وجود ندارد، پس دقت فرمایید که در خرید و  فروش شما دیوار هیچ دخالتی ندارد و کاربران باید خودشان جنبه های مختلف امنیتی را در نظر بگیرند.';

const InformationAboutDivar = () => {
  return (
    <Container>
      <View>
        <TextStyle>{publicInformation}</TextStyle>
        <FTStyle>{firstTitle}</FTStyle>
        <TextStyle>{firstInfo}</TextStyle>
        <TitleStyle>{secondTitle}</TitleStyle>
        <TextStyle>{secondInfo + continiue}</TextStyle>
        <TitleStyle>{thirdTitle}</TitleStyle>
        <LastText>{thirdInfo}</LastText>
      </View>
    </Container>
  );
};

export default InformationAboutDivar;

const Container = Styled.ScrollView`
display: flex;
flex: 1;
padding: 10px;
background-color: #fff;
`;

const TextStyle = Styled.Text`

font-family: IRANSans-Light;
color: #707070;
font-size: 15px;
flex-shrink: 1;
flex: 1;
flex-wrap: wrap;
`;

const TitleStyle = Styled.Text`

font-family: IRANSans-Medium;
font-size: 20px;
margin-top: 30px;
margin-bottom: 10px;
color: #000;
`;

const FTStyle = Styled.Text`

font-family: IRANSans-Medium;
font-size: 18px;
margin-vertical: 10px;
color: #000;
`;

const LastText = Styled.Text`

font-family: IRANSans-Light;
color: #707070;
font-size: 15px;
margin-bottom: 70px;
flex-shrink: 1;
flex: 1;
flex-wrap: wrap;
`;
