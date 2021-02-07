import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Styled from 'styled-components';

const ImagesField = ({source}) => {
  return <Image source={source} />;
};

const DiffProps = (preProps, nextProps) => {
  return preProps.source === nextProps.source;
};

export default React.memo(ImagesField, DiffProps);

const Image = Styled.Image`

  width: ${wp('100%')};
  height: 300Px;
  resize-mode: stretch;
  overflow: hidden;
`;
