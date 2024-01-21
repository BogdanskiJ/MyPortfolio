import styled, { css } from "styled-components";
export const StyledPortfolioSection = styled.div`
	height: 100vh;
	position: relative;
	display: flex;
	flex-direction: row;
	/* width: 65vw; */
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

export const StyledDescriptionHoverBox = styled.div`
	width: 100%;
	height: 100%;
	z-index: 3;
	opacity: 0;
	visibility: hidden;
	transition: 0.3s ease-in-out;
	background-color: rgba(219, 127, 8, 0.7);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
`;

export const StyledProjectBoxImage = styled.img`
	opacity: ${(props) => (props.$isFullLoaded ? "1" : "0")};
	transition: opacity 0.2s ease-in-out;
	width: 100%;
	height: 25vh;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 2;
	object-position: center;
	object-fit: cover;
	transition: 0.3s ease-in-out;
`;

export const StyledProjectH2 = styled.h2`
	color: ${({ theme }) => theme.color.white};
	background: ${({ theme }) => theme.color.codGray};
	min-height: 30px;
	height: fit-content;
	text-align: center;
	margin: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	text-align: center;
	z-index: 3;
	transition: 0.3s ease-in-out;
	transform: translateY(-100px);
	position: relative;
	top: 0;
	box-shadow: 0px 3px 6px 0px #33af96;

	@media screen and ((max-width: ${({ theme }) => theme.breakpoint.lg})) {
		opacity: 1;
		visibility: visible;
		transform: translateY(0);
		min-height: 20px;
		font-size: 1rem;
		box-shadow: 0px 0px 6px 0px #33af96;
	}

	&:hover {
		background: ${({ theme }) => theme.color.mineShaft};
	}
	&:active {
		background: ${({ theme }) => theme.color.doveGray};
	}
`;

export const StyledDescriptionBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	cursor: pointer;
	z-index: 3;
	height: 100%;

	@media screen and ((max-width: ${({ theme }) => theme.breakpoint.lg})) {
		/* width: 100%;
		gap: 0;
		font-size: 0.7rem;
		transform: translateY(0); */
		display: none;
	}
`;

export const StyledDescriptionText = styled.span`
	color: ${({ theme }) => theme.color.codGray};
	font-weight: bold;
	text-align: center;
	height: 100%;
	display: flex;
	align-content: center;
	justify-content: center;
	align-items: center;
	transition: 0.3s ease-in-out;
	transform: translateY(100px);
`;

export const StyledDescriptionButton = styled.button`
	color: ${({ theme }) => theme.color.white};
	background: ${({ theme }) => theme.color.codGray};
	border-radius: 5px;
	border: none;
	cursor: pointer;
	transition: 0.3s ease-in-out;
	transform: translateY(-100px);
	margin-bottom: 5px;
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

export const StyledProjectBox = styled.div`
	display: flex;
	height: 100%;
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
	transition: 0.3s ease-in-out;

	&:hover {
		${StyledDescriptionHoverBox} {
			opacity: 1;
			visibility: visible;
		}
		${StyledProjectBoxImage} {
			transform: scale(1.05);
		}
		${StyledProjectH2} {
			transform: translate(0);
		}
		${StyledDescriptionText} {
			transform: translateY(0);
		}
		${StyledDescriptionButton} {
			transform: translateY(0);
		}
	}

	&::before {
		content: "";
		position: absolute;
		inset: 0;
		animation: pulse 2.5s infinite;
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

export const StyledDescriptionHeader = styled.div`
	display: flex;
	align-items: flex-start;
	align-content: flex-start;
	justify-content: center;
	width: 100%;
	height: fit-content;
	position: relative;
	top: 0;
`;
