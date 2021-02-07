import React from 'react';
import {View, FlatList, ScrollView} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useSelector, useDispatch} from 'react-redux';
import Styled from 'styled-components';
import action from '..//redux/actions/ActionAddSection';
import String from '../components/String';
import Divider from '../components/divider';
import PartsField from '../components/AboutFlatListField';

const Parts = [
  {
    name: 'املاک',
    iconName: 'location-city',
    childes:
      'فروش مسکونی، اجاره مسکونی، فروش اداری و تجاری، اجاره اداری و تجاری، اجاره کوتاه مدت، خدمات املاک',
    children: [
      {
        name: 'فروش مسکونی',
        children: [
          {name: 'آپارتمان'},
          {name: 'خانه و ویلا'},
          {name: 'زمین و کلنگی'},
        ],
      },

      {
        name: 'اجاره مسکونی',
        children: [{name: 'آپارتمان'}, {name: 'خانه و ویلا'}],
      },

      {
        name: 'فروش اداری و تجاری',
        children: [
          {name: 'دفتر کار، اتاق اداری و مطب'},
          {name: 'مغازه و غرفه'},
          {name: 'صنعتی، کشاورزی و تجاری'},
        ],
      },

      {
        name: 'اجاره اداری و تجاری',
        children: [
          {name: 'دفتر کار، اتاق اداری و مطب'},
          {name: 'مغازه و غرفه'},
          {name: 'صنعتی، کشاورزی و تجاری'},
        ],
      },

      {
        name: 'اجاره کوتاه مدت',
        children: [
          {name: 'آپارتمان و سوئیت'},
          {name: 'ویلا و باغ'},
          {name: 'دفتر کار و فضای آموزشی'},
        ],
      },

      {
        name: 'خدمات املاک',
        children: [
          {name: 'آژانس املاک'},
          {name: 'مشارکت در ساخت'},
          {name: 'امور مالی و حقوقی'},
          {name: 'پیش فروش'},
        ],
      },
    ],
  },

  {
    name: 'وسایل نقلیه',
    iconName: 'directions-car',
    childes:
      'خودرو، قطعات یدکی و لوازم جانبی خودرو، موتورسیکلت و لوازم جانبی، قایق و لوازم جانبی',
    children: [
      {
        name: 'خودرو',
        children: [
          {name: 'سواری'},
          {name: 'کلاسیک'},
          {name: 'اجاره ای'},
          {name: 'سنگین'},
        ],
      },
      {name: 'قطعات یدکی و لوازم جانبی خودرو'},
      {name: 'موتورسیکلت و لوازم جانبی'},
      {name: 'قایق و لوازم جانبی'},
    ],
  },

  {
    name: 'لوازم الکترونیکی',
    iconName: 'phone-android',
    childes:
      'موبایل و تبلت، رایانه، کنسول، بازی ویدئویی و آنلاین، صوتی و تصویری، تلفن رومیزی',
    children: [
      {
        name: 'موبایل و تبلت',
        children: [
          {name: 'گوشی موبایل'},
          {name: 'تبلت'},
          {name: 'لوازم جانبی موبایل و تبلت'},
          {name: 'سیم کارت'},
        ],
      },

      {
        name: 'رایانه',
        children: [
          {name: 'رایانه همراه'},
          {name: 'رایانه رومیزی'},
          {name: 'قطعات و لوازم جانبی'},
          {name: 'مودم و تجهیزات شبکه'},
          {name: 'پرینتر/اسکنر/کپی/فکس'},
        ],
      },

      {name: 'کنسول، بازی ویدئویی و آنلاین'},

      {
        name: 'صوتی و تصویری',
        children: [
          {name: 'فیلم و موسیقی'},
          {name: 'دوربین عکاسی و فیلم برداری'},
          {name: 'پخش کننده همراه'},
          {name: 'سیستم صوتی خانگی'},
          {name: 'DVD ویدئو و پخش کننده'},
          {name: 'تلویزیون و پروژکتور'},
          {name: 'دوربین مداربسته'},
        ],
      },

      {name: 'تلفن رومیزی'},
    ],
  },

  {
    name: 'مربوط به خانه',
    iconName: 'lamp',
    iconType: 'material-community',
    childes: 'وسایل و تزئینات خانه، وسایل آشپزخانه، ابزار، ساختمان و حیات',
    children: [
      {
        name: 'وسایل و تزئینات خانه',
        children: [
          {name: 'تزئینی و آثار هنری'},
          {name: 'لوازم روشنایی'},
          {name: 'میز و صندلی'},
          {name: 'فرش و گلیم'},
          {name: 'کمد و بوفه'},
          {name: 'پرده و رومیزی'},
          {name: 'تخت و اتاق خواب'},
          {name: 'مبلمان و صندلی راحتی'},
          {name: 'میز تلویزیون و وسایل سیستم پخش'},
        ],
      },

      {
        name: 'وسایل آشپزخانه',
        children: [
          {name: 'ماشین ظرفشویی'},
          {name: 'یخچال و فریزر'},
          {name: 'وسایل آشپزی و غذاخوری'},
          {name: 'مایکروویو و گاز'},
          {name: 'ماشین لباسشویی و خشک کننده'},
        ],
      },

      {
        name: 'ابزار',
        children: [{name: 'نظافت و خیاطی و اتو'}, {name: 'تعمیرات'}],
      },

      {
        name: 'ساختمان و حیات',
        children: [
          {name: 'سرویس بهداشتی و سونا'},
          {name: 'سیستم گرمایشی سرمایشی و گاز'},
          {name: 'آشپزخانه'},
          {name: 'حیات و ایوان'},
          {name: 'ابزار باغبانی'},
        ],
      },
    ],
  },

  {
    name: 'خدمات',
    iconName: 'format-paint',
    childes:
      'موتور و ماشین، پذیرایی/مراسم، خدمات رایانه ای و موبایل، مالی/حسابداری/بیمه، حمل و نقل، پیشه و مهارت، آرایشگری و زیبایی، سرگرمی، نظافت، باغبانی و درختکاری، آموزشی',
    children: [
      {name: 'موتور و ماشین'},
      {name: 'پذیرایی/مراسم'},
      {
        name: 'خدمات رایانه ای و موبایل',
        children: [
          {name: 'فروش دامنه و سایت'},
          {name: 'میزبانی و طراحی سایت'},
          {name: 'خدمات پهنای باند اینترنت'},
          {name: 'خدمات نرم افزار و سخت افزار کامپیوتر'},
          {name: 'تعمیرات نرم افزار و سخت افزار کامپیوتر'},
        ],
      },
      {name: 'مالی/حسابداری/بیمه'},
      {name: 'حمل و نقل'},
      {name: 'پیشه و مهارت'},
      {name: 'آرایشگری و زیبایی'},
      {name: 'سرگرمی'},
      {name: 'نظافت'},
      {name: 'باغبانی و درختکاری'},
      {
        name: 'آموزشی',
        children: [
          {name: 'زبان خارجی'},
          {name: 'دروس مدرسه و دانشگاه'},
          {name: 'نرم افزار'},
          {name: 'هنری'},
          {name: 'ورزشی'},
          {name: 'مشاوره تحصیلی'},
        ],
      },
    ],
  },

  {
    name: 'وسایل شخصی',
    iconName: 'watch',
    childes:
      'کیف، کفش و لباس، تزیینی، آرایشی، بهداشتی و درمانی، کفش و لباس بچه، وسایل بچه و اسباب بازی، لوازم التحریر',
    children: [
      {
        name: 'کیف، کفش و لباس',
        children: [{name: 'کیف/کفش/کمربند'}, {name: 'لباس'}],
      },

      {
        name: 'تزیینی',
        children: [{name: 'ساعت'}, {name: 'جواهرات'}, {name: 'بدلیجات'}],
      },

      {name: 'آرایشی، بهداشتی و درمانی'},
      {name: 'کفش و لباس بچه'},

      {
        name: 'وسایل بچه و اسباب بازی',
        children: [
          {name: 'اسباب بازی'},
          {name: 'کالسکه و لوازم جانبی'},
          {name: 'صندلی بچه'},
          {name: 'اسباب و اثاث بچه'},
        ],
      },

      {name: 'لوازم التحریر'},
    ],
  },

  {
    name: 'سرگرمی و فراغت',
    iconType: 'material-community',
    iconName: 'soccer',
    childes:
      'بلیط، تور و چارتر، دوچرخه/اسکیت/اسکوتر، حیوانات، آلات موسیقی، ورزش و تناسب اندام، اسباب بازی',
    children: [
      {
        name: 'بلیط',
        children: [
          {name: 'کنسرت'},
          {name: 'تئاتر و سینما'},
          {name: 'کارت هدیه و تخفیف'},
          {name: 'اماکن و مسابقات ورزشی'},
          {name: 'ورزشی'},
          {name: 'اتوبوس، مترو و قطار'},
        ],
      },

      {name: 'تور و چارتر'},

      {
        name: 'کتاب و مجله',
        children: [
          {name: 'آموزشی'},
          {name: 'ادبی'},
          {name: 'تاریخی'},
          {name: 'مذهبی'},
          {name: 'مجلات'},
        ],
      },

      {name: 'دوچرخه/اسکیت/اسکوتر'},

      {
        name: 'حیوانات',
        children: [
          {name: 'گربه'},
          {name: 'موش و خرگوش'},
          {name: 'خزنده'},
          {name: 'پرنده'},
          {name: 'ماهی'},
          {name: 'لوازم جانبی'},
          {name: 'حیوانات مزرعه'},
          {name: 'سگ'},
        ],
      },

      {
        name: 'کلکسیون و سرگرمی',
        children: [{name: 'سکه، تمبر و اسکناس'}, {name: 'اشیای عتیقه'}],
      },

      {
        name: 'آلات موسیقی',
        children: [
          {name: 'گیتار، بیس و امپلیفایر'},
          {name: 'سازهای بادی'},
          {name: 'پیانو/کیبورد/آکاردئون'},
          {name: 'سنتی'},
          {name: 'درام و پرکاشن'},
          {name: 'ویولن'},
        ],
      },

      {
        name: 'ورزش و تناسب اندام',
        children: [
          {name: 'ورزش های توپی'},
          {name: 'کوهنوردی و کمپینگ'},
          {name: 'غواصی و ورزش های آبی'},
          {name: 'ماهیگیری'},
          {name: 'تجهیزات ورزشی'},
          {name: 'ورزش های زمستانی'},
          {name: 'اسب و تجهیزات اسب سواری'},
        ],
      },

      {name: 'اسباب بازی'},
    ],
  },

  {
    name: 'اجتماعی',
    iconName: 'supervisor-account',
    childes: 'رویداد، داوطلبانه، گم شده ها',
    children: [
      {
        name: 'رویداد',
        children: [{name: 'حراج'}, {name: 'گردهمایی و همایش'}, {name: 'ورزشی'}],
      },

      {name: 'داوطلبانه', children: [{name: 'تحقیقاتی'}]},

      {name: 'گم شده ها', children: [{name: 'حیوانات'}, {name: 'اشیا'}]},
    ],
  },

  {
    name: 'برای کسب و کار',
    iconName: 'person',
    iconType: 'fontisto',
    childes: 'تجهیزات و ماشین آلات، عمده فروشی',
    children: [
      {
        name: 'تجهیزات و ماشین آلات',
        children: [
          {name: 'فروشگاه و مغازه'},
          {name: 'آرایشگاه و سالون های زیبایی'},
          {name: 'دفتر کار'},
          {name: 'صنعتی'},
          {name: 'کافی شاپ و رستوران'},
          {name: 'پزشکی'},
        ],
      },

      {name: 'عمده فروشی'},
    ],
  },

  {
    name: 'اسخدام و کاریابی',
    iconName: 'business-center',
    childes:
      'اداری و مدیریت، سرایداری و نظافت، معماری، عمران و ساختمانی، خدمات فروشگاه و رستوران، رایانه و فناوری اطلاعات، مالی، حسابداری و حقوقی، بازاریابی و فروش، صنعتی، فنی و مهندسی، آموزشی، حمل و نقل، درمانی، زیبایی و بهداشتی، هنری و رسانه',
    children: [
      {name: 'اداری و مدیریت'},
      {name: 'سرایداری و نظافت'},
      {name: 'معماری، عمران و ساختمانی'},
      {name: 'خدمات فروشگاه و رستوران'},
      {name: 'رایانه و فناوری اطلاعات'},
      {name: 'مالی، حسابداری و حقوقی'},
      {name: 'بازاریابی و فروش'},
      {name: 'صنعتی، فنی و مهندسی'},
      {name: 'آموزشی'},
      {name: 'حمل و نقل'},
      {name: 'درمانی، زیبایی و بهداشتی'},
      {name: 'هنری و رسانه'},
    ],
  },
];

const SabthagahyParts = ({navigation, route}) => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.ConditionReducer);
  let data = Parts;
  if (route.params) {
    data = route.params.data;
  }

  const _onPress = (children, name, iconName) => {
    if (children) {
      navigation.push('SabtHagayParts', {
        data: children,
        name: name,
        iconName: iconName,
      });
    } else {
      dispatch(action(name));
      navigation.popToTop();
    }
  };

  return (
    <View
      style={{flex: 1, backgroundColor: theme.ThemeMode ? '#fff' : '#212121'}}>
      <String name="نمایش راهنمای دسته بندی ها" />
      <Divider />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TextStyled theme={theme.ThemeMode}>
          {route.params
            ? 'زیردسته های ' + route.params.name
            : 'دسته آگهی را انتخاب کنید.'}
        </TextStyled>

        <FlatList
          keyExtractor={(item) => item.name}
          data={data}
          ListFooterComponent={() => {
            return route.params ? (
              <RectButton>
                <View
                  style={{
                    borderBottomColor: '#707070',
                    borderBottomWidth: 0.5,
                  }}>
                  <PartsField
                    iconField={route.params.iconName}
                    title={'همه آگهی های ' + route.params.name}
                    divider={1}
                  />
                </View>
              </RectButton>
            ) : null;
          }}
          renderItem={({item}) => (
            <RectButton
              onPress={() => _onPress(item.children, item.name, item.iconName)}>
              <PartsField
                child={item.children ? true : false}
                iconField={item.iconName}
                title={item.name}
                childes={item.childes}
                iconType={item.iconType}
                hasSpace={true}
                divider={1}
              />
            </RectButton>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default SabthagahyParts;

const TextStyled = Styled.Text`

font-family: IRANSans-Medium;
font-size: 20px;
color: ${(props) => (props.theme === true ? '#000' : '#fff')};
margin-top: ${wp('13%')}px;
margin-bottom: ${wp('3%')}px;
margin-left: 10px;
`;
