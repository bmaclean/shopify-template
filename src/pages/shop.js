import React from 'react';
import {Box, Flex} from '@rebass/grid/emotion';

import Layout from '../layouts';
import {NavBox, SEO, Header} from '../components';
import {CenteredFlex} from '../components/ui';

// TODO: could these be autogenerated from the set of product types/associated images?
import XboxOne from '../images/xbox-one.png';
import XboxOneS from '../images/xbox-one-s.png';
import PS4 from '../images/ps4.png';
import PS4Slim from '../images/ps4-slim.png';
import NintendoSwitch from '../images/nintendo-switch.png';
import Accessory from '../images/controller-grip.png';

const ShopPage = () => {
	return (
		<Flex flexDirection="column">
			<Header fixed={true} />
			<SEO title="Home" keywords={['console style', 'console skins']} />
			<CenteredFlex mt="2em">
				<h1 css={{fontSize: '3em'}}>Catalog</h1>
			</CenteredFlex>
			<CenteredFlex justifyContent="space-evenly" mt="3em">
				{/* TODO: links for console types should be autogenerated based on provided product types */}
				<NavBox
					subpages={[
						{title: 'Xbox One', image: XboxOne},
						{title: 'Xbox One S', image: XboxOneS}
					]}
				></NavBox>
				<NavBox
					subpages={[
						{title: 'PlayStation 4', image: PS4},
						{title: 'PlayStation 4 Slim', image: PS4Slim}
					]}
				></NavBox>
			</CenteredFlex>
			<CenteredFlex justifyContent="space-evenly" mt="4em">
				<NavBox
					subpages={[{title: 'Nintendo Switch', image: NintendoSwitch}]}
				></NavBox>
				<NavBox subpages={[{title: 'Accessories', image: Accessory}]}></NavBox>
			</CenteredFlex>
		</Flex>
	);
};

export default ShopPage;
