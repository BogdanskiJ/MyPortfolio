import styled from "styled-components";

export const StyledNavBox = styled.div`
	display: flex;
	width: 100%;
	height: fit-content;
`;

export const StyledNav = styled.nav`
	display: flex;
	width: 100%;
	flex-direction: row;
	justify-content: space-around;
	padding: 10px;
	position: fixed;
	top: 0;
	height: fit-content;
	z-index: 999;
	background: transparent;
`;

export const StyledNavButton = styled.button`
	display: flex;
	width: auto;
	color: #33b198;
	background: transparent;
	border: none;
`;
