import styled from "styled-components";

export const StyledAboutBox = styled.div`
	height: 100vh;
	/* width: 70vw; */
	display: flex;
	flex-direction: row;
	position: relative;
	max-height: 100vh;
`;
export const StyledAboutTextBox = styled.div`
	max-width: 40%;
	padding: 20px;
	display: flex;
	z-index: 1;
	height: fit-content;
	position: sticky;
	top: 10px;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	background: ${({ theme }) => theme.color.codGray};
`;

export const StyledMovingLayerBox = styled.div`
	/* position: relative; */
	width: 100vw;
	height: 66vh;
	z-index: 2;
	top: 100px;
`;

export const StyledMovingLayer = styled.img`
	position: absolute;
	width: 100%;
	right: 0;
	height: 100%;
`;
