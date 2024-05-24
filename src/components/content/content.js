import { H2 } from '../h2/h2';
import styled from 'styled-components';

export const ContentContainer = ({ className, children, error }) =>
	error ? (
		<div className={className}>
			<H2>Ошибка</H2>
			<div>{error}</div>
		</div>
	) : (
		children
	);

export const Content = styled(ContentContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
