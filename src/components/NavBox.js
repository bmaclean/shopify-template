import React from 'react';
import {Flex, Box} from '@rebass/grid/emotion';
import {BlockText, CenteredFlex} from './ui';

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
					<CenteredFlex
						key={subpage.title}
						flex="1"
						onMouseOver={() => setSelected(subpage)}
						css={{
							// background:
							// 	selected.title === subpage.title
							// 		? 'rgba(255, 255, 255, 0.3)'
							// 		: '',
							fontSize: '0.8125em',
							cursor: 'pointer',
							'&:hover': {
								color: '#111111',
								background: 'rgba(255, 255, 255, 0.5)'
							}
						}}
					>
						<BlockText>{subpage.title}</BlockText>
					</CenteredFlex>
				))}
			</Flex>
		</div>
	);
}
