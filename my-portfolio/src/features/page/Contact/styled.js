import styled from "styled-components";

export const StyledContactSection = styled.div`
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

export const StyledContactTextBox = styled.div`
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
		position: relative;
	}
`;

export const StyledContactIconBox = styled.div`
	width: 100vw;
	height: 94vh;
	z-index: 2;
	top: 3vh;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: 20px;

	@media screen and ((max-width: ${({ theme }) => theme.breakpoint.lg})) {
		flex-direction: column;
		align-items: flex-start;
		height: fit-content;
		padding: 20px;
	}
`;

export const StyledIconBox = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	transition: all 0.3s ease-out;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: fit-content;
`;
export const StyledIconHoverBox = styled.div`
	height: 80%;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0;
	visibility: hidden;
	color: white;
	transition: all 0.2s ease-in-out;
	font-size: 20px;
	font-weight: bold;
	padding-left: 0;
	transform: translateX(-3vw);
	z-index: 1;
	padding-left: 0;
	text-align: center;

	&:hover {
		opacity: 1;
		visibility: visible;
		padding-left: 6vw;
	}
`;

export const StyledHoverAnchor = styled.a`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-decoration: none;
	color: currentColor;
	font-size: 1rem;

	@media screen and ((max-width: ${({ theme }) => theme.breakpoint.lg})) {
		font-size: 0.7rem;
	}
`;

export const StyledIconAnchor = styled.a`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: fit-content;
	z-index: 2;
	transition: 0.2s ease-in-out;

	&:hover + ${StyledIconHoverBox} {
		opacity: 1;
		visibility: visible;
		padding-left: 6vw;
	}
`;

export const StyledIconImg = styled.svg`
	width: 100px;
`;
