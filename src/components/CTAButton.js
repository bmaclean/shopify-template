import React from 'react';
import {Link} from 'gatsby';
import styled from '@emotion/styled';

import {BlockText} from './ui';

// Call To Action button

// TODO: Themeing

const StyledLink = ({children, ...rest}) => (
	<Link {...rest}>
		<BlockText>{children}</BlockText>
	</Link>
);

const CTAButton = styled(StyledLink)`
	color: #ffffff;
	background-color: #d71111;
	padding: 12px 20px;
	font-size: 0.8125em;
	text-align: center;
	cursor: pointer;
	text-decoration: none;
	&:hover {
		background: #bf0f0f;
	}
`;

export default CTAButton;
