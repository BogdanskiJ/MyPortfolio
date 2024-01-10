import styled from "styled-components";

export const StyledNavBox = styled.div`
	display: flex;
	width: 30%;
`;

export const StyledNav = styled.nav`
	display: flex;
	width: 30%;
	flex-direction: column;
	justify-content: space-around;
	padding-top: 40%;
	padding-left: 5%;
	position: fixed;
	z-index: 999;
	background: transparent;
`;

export const StyledNavUl = styled.ul`
	padding: 0;
	display: flex;
	flex-direction: column;
	gap: 10px;
	font-size: 30px;
`;

export const StyledNavLi = styled.li`
	display: flex;
	width: auto;
	color: ${({ theme }) => theme.color.keppel};
	background: transparent;
	border: none;
	cursor: pointer;
`;
