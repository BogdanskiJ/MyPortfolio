import styled from "styled-components";

export const StyledPageBody = styled.div`
	max-width: 1920px;
	margin: auto;
`;

export const StyledResults = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	align-items: stretch;
	gap: 10px;
	margin: 20px;

	@media ((max-width: ${({ theme }) => theme.breakpoint.md})) {
		flex-direction: column;
		margin: 20px;
	}
`;
