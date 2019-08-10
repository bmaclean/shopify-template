import React from 'react';
import {Link} from 'gatsby';

import SEO from '../components/seo';
import ProductGrid from '../components/ProductGrid';
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
				height: '800px',
				width: '100%',
				'-webkit-filter': 'grayscale(100%)'
			}}
		>
			<div
				css={{
					display: 'flex',
					height: '100%',
					lineHeight: '1',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column'
				}}
			>
				<h1 css={{color: 'white'}}>Your Console. Your Style.</h1>
			</div>
		</div>
		<ProductGrid />
	</>
);

export default IndexPage;
