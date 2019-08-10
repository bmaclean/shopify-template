import React, {useContext} from 'react';
import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {Flex, Box} from '@rebass/grid/emotion';
import logo from '../../images/logo.png';
import cart from '../../images/cart.png';

import StoreContext from '../../context/StoreContext';

const CartCounter = styled.span({
	backgroundColor: 'white',
	color: '#663399',
	borderRadius: '20px',
	padding: '0 10px',
	fontSize: '1.2rem',
	float: 'right',
	margin: '-10px',
	zIndex: 999
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
				height: '100px',
				position: 'absolute',
				zIndex: 10
			}}
		>
			<Box p={5} ml={20}>
				<Link to="/">
					<img src={logo} css={{height: '80px'}} />
				</Link>
			</Box>
			<Box mr={20}>
				<Link
					to="/"
					css={{
						color: 'white',
						fontFamily: 'Montserrat,sans-serif',
						fontWeight: 600,
						letterSpacing: '0.1em',
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
					<img src={cart} css={{height: '20px'}}></img>
					{lineItems.length !== 0 && (
						<CartCounter>{lineItems.length}</CartCounter>
					)}
				</Link>
			</Box>
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
