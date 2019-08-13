import React from 'react';
import {Box} from '@rebass/grid/emotion';

import {Copy, SEO, Header} from '../components';
import {CenteredFlex} from '../components/ui';

const Shop = () => {
	return (
		<>
			<SEO title="Home" keywords={['console style', 'console skins']} />
			<Header />
			<CenteredFlex>
				<Box></Box>
				<Box></Box>
				<Box></Box>
			</CenteredFlex>
		</>
	);
};
