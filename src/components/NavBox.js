import React from 'react';
import {Link} from 'gatsby';
import {Flex, Box} from '@rebass/grid/emotion';
import {CenteredFlex} from './ui';

// TODO: subpage links should be generated, not explicitly provided

export default function NavBox({image, subpages}) {
	const [selected, setSelected] = React.useState(subpages[0]);

	return (
		<div
			css={{
				height: '12em',
				width: '32em',
				backgroundImage: `linear-gradient(transparent, #101010 110%), url(${selected.image})`,
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover'
			}}
		>
			<Flex css={{height: '80%'}}></Flex>
			<Flex css={{color: 'white', height: '20%', width: '100%'}}>
				{subpages.map(subpage => (
					<Link
						key={subpage.title}
						to={`/shop/${subpage.link}`}
						css={{
							flex: '1',
							color: '#ffffff',
							textDecoration: 'none',
							'&.visited': {
								color: '#111111',
								textDecoration: 'none'
							}
						}}
					>
						<CenteredFlex
							flex="1"
							onMouseOver={() => setSelected(subpage)}
							css={{
								fontFamily: 'Montserrat, sans-serif',
								fontWeight: 600,
								fontStyle: 'normal',
								letterSpacing: '0.1em',
								height: '100%',
								textTransform: 'uppercase',
								fontSize: '0.8125em',
								cursor: 'pointer',
								textDecoration: 'none',
								'&:hover': {
									color: '#111111',
									background: 'rgba(255, 255, 255, 0.5)'
								}
							}}
						>
							{subpage.title}
						</CenteredFlex>
					</Link>
				))}
			</Flex>
		</div>
	);
}
