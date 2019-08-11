import React from 'react';
import {Flex, Box} from '@rebass/grid/emotion';

import {Copy, CTAButton, SEO, SubscriptionInput} from '../components';

import BackgroundImage from '../images/xbox-background.png';

const IndexPage = ({image}) => (
	<>
		<SEO title="Home" keywords={['gatsby', 'application', 'react']} />
		<div
			css={{
				backgroundImage: `linear-gradient(#101010, transparent 200%), url(${BackgroundImage})`,
				backgroundPosition: 'top left',
				backgroundAttachment: 'fixed',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				height: '100vh',
				width: '100%'
			}}
		>
			<div
				css={{
					display: 'flex',
					height: '100%',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
					lineHeight: 1.42
				}}
			>
				<h1 css={{color: 'white', fontSize: '3em'}}>
					Your Console. Your Style.
				</h1>
				<CTAButton to="/shop">Shop Console Skins</CTAButton>
			</div>
		</div>
		<Copy>
			<Flex
				css={{
					height: '28em'
				}}
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
			>
				<h1>Why ConsoleStyle?</h1>
				<p>
					When everything else in life is customizable, your console should be
					too.
				</p>

				<p>
					It&apos;s time to define your personality, and pick the skin that lets
					you best express yourself.
				</p>

				<p>Don&apos;t let your console stay bland. Give it ConsoleStyle.</p>
			</Flex>
		</Copy>
		<Flex
			alignItems="center"
			justifyContent="space-evenly"
			p={50}
			css={{
				height: '40em',
				background: '#e6e6e6',
				clipPath: 'polygon(0 0, 100% 8%, 100% 100%, 0 100%)'
			}}
		>
			<Copy>
				<Flex
					alignItems="center"
					justifyContent="flex-start"
					flexDirection="column"
				>
					<h2>Claim your console identity.</h2>
					<p>It&apos;s time to take action and</p> <br />
					<CTAButton to="/shop">Style your console</CTAButton>
				</Flex>
			</Copy>
			<Box>
				{/* TODO: image */}
				<img css={{height: '350px'}} src={BackgroundImage} />
			</Box>
		</Flex>
		<Copy>
			<Flex
				alignItems="center"
				justifyContent="center"
				flexDirection="column"
				css={{
					height: '24em',
					clipPath: 'polygon(0 0, 100% 8%, 100% 100%, 0 100%)'
				}}
			>
				<h2>Don&apos;t miss out on exclusive offers.</h2>
				<p>We want you back, and we&apos;ll make it worth your while.</p>
				<p>
					Subscribe to our emails for exclusive access to promotions and
					discounts.
				</p>
				<SubscriptionInput />
			</Flex>
		</Copy>
	</>
);

export default IndexPage;
