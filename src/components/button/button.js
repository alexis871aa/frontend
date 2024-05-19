import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonContainer = ({ className, children }) => (
	<Link className={className} to="/login">
		{children}
	</Link>
);

export const Button = styled(ButtonContainer)`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #eee;
	border: 1px solid #000;
	font-size: ${({ size = '18px' }) => size};
	margin: ${({ margin = '0' }) => margin};
	width: ${({ width = '100px' }) => width};
	height: ${({ height = '32px' }) => height};
`;
