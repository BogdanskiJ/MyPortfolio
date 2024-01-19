import styled, { css } from "styled-components";
export const StyledPortfolioSection = styled.div`
	height: 100vh;
	position: relative;
	display: flex;
	flex-direction: row;
	scroll-snap-align: start;
	scroll-snap-stop: always;
`;

export const StyledPortfolioTextBox = styled.div`
	display: flex;
	flex-direction: column;
	position: sticky;
	top: 10px;
	height: fit-content;
	max-width: 40%;
	padding: 20px;
`;

export const StyledPortfolioProjectsBox = styled.div`
	display: flex;
	width: 100vw;
	height: 95vh;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const StyledProjectBox = styled.div`
	display: flex;
	height: 25vh;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	background-image: ${(props) => `url(${props.$backgroundImage})`};
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	overflow: hidden;
	cursor: pointer;
	position: relative;
	z-index: 1;

	&::before {
		content: "";
		content: ${(props) => (props.$isFullLoaded ? "" : "none")};
		position: absolute;
		inset: 0;
		animation: pulse 1.5s infinite;
		background-color: rgba(255, 255, 255, 0.2);
	}

	@keyframes pulse {
		0% {
			background-color: rgba(255, 255, 255, 0.2);
		}
		50% {
			background-color: rgba(255, 255, 255, 0);
		}
		100% {
			background-color: rgba(255, 255, 255, 0.2);
		}
	}
`;

export const StyledProjectBoxImage = styled.img`
	opacity: ${(props) => (props.$isFullLoaded ? "1" : "0")};
	transition: opacity 200ms ease-in-out;
	width: 100%;
	height: 25vh;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 2;
	object-position: center;
	object-fit: cover;
`;

export const StyledProjectH2 = styled.h2`
	color: ${({ theme }) => theme.color.cinnabar};
	width: 50%;
	text-align: center;
	z-index: 3;
`;

export const StyledDescriptionBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 10px;
	width: 50%;
	cursor: pointer;
	z-index: 3;
`;

export const StyledDescriptionButton = styled.button`
	color: ${({ theme }) => theme.color.white};
	background-color: ${({ theme }) => theme.color.cinnabar};
	border-radius: 5px;
	border: none;
	cursor: pointer;
`;
export const StyledDescriptionButton2 = styled.button`
	color: ${({ theme }) => theme.color.white};
	background-color: ${({ theme }) => theme.color.deepSeaGreen};
	border-radius: 5px;
	border: none;
	cursor: pointer;
`;
export const StyledDescriptionButton3 = styled.button`
	color: ${({ theme }) => theme.color.white};
	background-color: ${({ theme }) => theme.color.dixie};
	border-radius: 5px;
	border: none;
	cursor: pointer;
`;

export const StyledDescriptionImage = styled.img`
	width: 160px;
	height: 90px;
	border-radius: 10px;
`;
