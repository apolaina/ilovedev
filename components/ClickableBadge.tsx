import React, { ReactNode } from 'react';
import { Badge, Link } from 'native-base';

interface Props {
  text: string;
  href: string;
}

const ClickableBadge: React.FC<Props> = ({ text, href }: Props) => (
  <Link href={href} isExternal pb={3}>
    <Badge
      colorScheme="primary"
      variant="solid"
      alignSelf="center"
      roundedTopLeft="lg"
      roundedBottomRight="lg"
      _text={{
        fontSize: 'xl',
      }}>
      {text}
    </Badge>
  </Link>
);

export default ClickableBadge;
