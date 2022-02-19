import React, { ReactNode } from 'react';
import { Text } from 'native-base';
import { ITextProps } from 'native-base/lib/typescript/components/primitives/Text/types';

interface Props extends ITextProps {
  children: ReactNode;
}

const Heading: React.FC<Props> = (props: Props) => (
  <Text {...props} fontSize="3xl" fontFamily="NanumGothic_800ExtraBold">
    {props.children}
  </Text>
);

export default Heading;
