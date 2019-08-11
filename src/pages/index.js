import React from 'react';
import {Link} from 'gatsby';
import {Flex, Box} from '@rebass/grid/emotion';

import CTAButton from '../components/CTAButton';
import ProductGrid from '../components/ProductGrid';
import SEO from '../components/seo';

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
		<Flex
			css={{
				height: '28em',
				fontFamily: 'Didot, serif'
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
	</>
);

export default IndexPage;
