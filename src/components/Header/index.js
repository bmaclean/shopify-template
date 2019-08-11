import React, {useContext} from 'react';
import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {Flex, Box} from '@rebass/grid/emotion';

import StoreContext from '../../context/StoreContext';
import logo from '../../images/logo.png';
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
	zIndex: 999,
});

const Header = ({siteTitle}) => {
	const context = useContext(StoreContext);

	const {lineItems} = context.checkout;

	return (
		<Flex
			flexDirection="row"
			alignItems="center"
			justifyContent="space-between"
			width="100%"
			css={{
				backgroundColor: 'transparent',
				height: '200px',
				position: 'absolute',
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
					to="/"
					css={{
						color: 'white',
						fontFamily: 'Montserrat,sans-serif',
						fontWeight: 600,
						letterSpacing: '0.1em',
						marginRight: '32px',
						textDecoration: 'none',
						textTransform: 'uppercase',
						'&.visited': {
							color: 'white',
							textDecoration: 'none'
						}
					}}
				>
					Collections
				</Link>
				<Link to="/cart">
					<Flex alignItems="center">
						<img src={cart} css={{height: '20px'}}></img>
						{lineItems.length !== 0 && (
							<CartCounter css={{marginLeft: '8px', 
	'&.visited': {
		color: 'black',
		textDecoration: 'none'
	}}}>{lineItems.length}</CartCounter>
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
