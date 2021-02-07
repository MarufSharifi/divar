const initialState = {
  BottomTabBarShow: true,
  ThemeMode: true,
  ShowChildren: false,
  FirstTime: true,
};

const ConditionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SetThemeMode':
      return {...state, ThemeMode: action.value};

    case 'SHOW_CHILD':
      return {...state, ShowChildren: action.value};

    case 'FIRST_TIME':
      return {...state, FirstTime: false};
    default:
      return state;
  }
};

export default ConditionReducer;
