import React from 'react';
import {Flex} from '@rebass/grid/emotion';

export default function CenteredFlex({children, ...rest}) {
	return (
		<Flex justifyContent="center" alignItems="center" {...rest}>
			{children}
		</Flex>
	);
}
