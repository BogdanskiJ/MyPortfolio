import styled from "styled-components";

export const StyledAboutBox = styled.div`
	height: 100vh;
	width: 70vw;
	display: flex;
	flex-direction: row;
	position: relative;
	max-height: 100vh;
	overflow: hidden;
	scroll-snap-align: start;
	scroll-snap-stop: always;

	@media screen and ((max-width: ${({ theme }) => theme.breakpoint.lg})) {
		flex-direction: column;
	}
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

	@media screen and ((max-width: ${({ theme }) => theme.breakpoint.lg})) {
		max-width: 100%;
		max-height: 33vh;
	}
`;

export const StyledMovingLayerBox = styled.div`
	width: 33vw;
	height: 70vh;
	z-index: 2;
	top: 15vh;
	left: 5vw;

	@media screen and ((max-width: ${({ theme }) => theme.breakpoint.lg})) {
		width: 66vw;
		height: 60vh;
		max-height: 66vh;
		top: 10vh;
		left: 0;
	}
`;

export const StyledMovingLayer = styled.img`
	position: absolute;
	width: 100%;
	right: 0;
	height: 100%;

	@media screen and ((max-width: ${({ theme }) => theme.breakpoint.lg})) {
		height: 50vh;
	}
`;
