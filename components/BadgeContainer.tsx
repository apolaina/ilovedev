import React, { ReactNode } from 'react';
import { HStack } from 'native-base';
import { IStackProps } from 'native-base/src/components/primitives/Stack/Stack';

interface Props extends IStackProps {
  children: ReactNode;
}

const BadgeContainer: React.FC<Props> = (props: Props) => (
  <HStack space="3" flexWrap="wrap" pt={5} {...props}>
    {props.children}
  </HStack>
);

export default BadgeContainer;
