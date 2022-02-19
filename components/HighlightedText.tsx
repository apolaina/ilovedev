import React, { ReactNode } from 'react';
import { ITextProps, Text } from 'native-base';
import { ColorType } from 'native-base/lib/typescript/components/types';
import * as CSS from 'csstype';

interface Props {
  children: ReactNode;
  color?: ColorType;
  fontSize?: ITextProps['fontSize'];
  textAlign?: CSS.Property.TextAlign;
  underline?: boolean;
}

const HighlightedText: React.FC<Props> = ({
  children = <></>,
  color,
  fontSize = 'xl',
  textAlign = 'left',
  underline = false,
}: Props) => {
  let style = {
    fontFamily: 'VictorMono-Italic',
  };

  if (underline) {
    style = {
      ...style,
      ...{
        textDecorationLine: 'underline',
        textDecorationStyle: 'dashed', // iOS
      },
    };
  }

  return (
    <Text style={style} fontSize={fontSize} color={color} textAlign={textAlign}>
      {children}
    </Text>
  );
};

export default HighlightedText;
