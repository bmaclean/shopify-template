import React from 'react';
import {Flex, Box} from '@rebass/grid/emotion';

import {CTAButton} from './';
import {CenteredFlex} from './ui';

// TODO: MailChimp integration

export default function SubscriptionInput({...rest}) {
	return (
		<CenteredFlex
			p={4}
			css={{
				height: '3em',
				width: '32em',
				background: 'white',
				boxShadow: '20px 20px 50px -5px rgba(0, 0, 0, 0.7)'
			}}
			{...rest}
		>
			<Box width={3 / 4}>
				<input
					type="email"
					placeholder="Email"
					css={{
						border: 'none',
						width: '100%',
						fontSize: '1.25em',
						fontFamily: 'Didot, serif'
					}}
				/>
			</Box>
			<Box width={1 / 4}>
				<CTAButton>Subscribe</CTAButton>
			</Box>
		</CenteredFlex>
	);
}
