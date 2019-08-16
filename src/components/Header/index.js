import React, {useContext} from 'react';
import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {Flex, Box} from '@rebass/grid/emotion';

import {BlockText} from '../ui';
import StoreContext from '../../context/StoreContext';
import logo from '../../images/white-logo.png';
import cart from '../../images/cart.png';

const CartCounter = styled.span({
	backgroundColor: 'white',
	color: '#663399',
	borderRadius: '20px',
	padding: '0 10px',
	fontSize: '1.2rem',
	textDecoration: 'none',
	float: 'right',
	margin: '-10px',
	zIndex: 999
});

const Header = ({fixed}) => {
	const context = useContext(StoreContext);

	const {lineItems} = context.checkout;

	return (
		<Flex
			flexDirection="row"
			alignItems="center"
			justifyContent="space-between"
			width="100%"
			css={{
				backgroundColor: fixed ? '#111111' : 'transparent',
				height: '8em',
				position: fixed ? 'sticky' : 'absolute',
				top: 0,
				zIndex: 10
			}}
		>
			<Box p={5} ml={20}>
				<Link to="/">
					<img src={logo} css={{height: '80px'}} />
				</Link>
			</Box>
			<Flex mr={100}>
				<Link
					to="/shop"
					css={{
						display: 'flex',
						alignItems: 'center',
						color: 'white',
						marginRight: '32px',
						textDecoration: 'none',
						'&.visited': {
							color: 'white',
							textDecoration: 'none'
						}
					}}
				>
					<BlockText>Shop</BlockText>
				</Link>
				<Link to="/cart">
					<Flex alignItems="center">
						<img src={cart} css={{height: '20px'}}></img>
						{lineItems.length !== 0 && (
							<CartCounter
								css={{
									marginLeft: '8px',
									'&.visited': {
										color: 'black',
										textDecoration: 'none'
									}
								}}
							>
								{lineItems.length}
							</CartCounter>
						)}
					</Flex>
				</Link>
			</Flex>
		</Flex>
	);
};

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ''
};

export default Header;
