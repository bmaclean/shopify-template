import {Link} from 'gatsby';
import styled from '@emotion/styled';

// Call To Action button

// TODO: Themeing

const CTAButton = styled(Link)`
	color: #ffffff;
	background-color: #d71111;
	padding: 12px 20px;
	font-family: Montserrat, sans-serif;
	font-weight: 600;
	font-style: normal;
	letter-spacing: 0.1em;
	text-transform: uppercase;
	font-size: 0.8125em;
	text-align: center;
	cursor: pointer;
	text-decoration: none;
	&:hover {
		background: #bf0f0f;
	}
`;

export default CTAButton;
