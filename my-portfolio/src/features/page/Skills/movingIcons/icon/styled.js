import styled, { keyframes } from "styled-components";

export const StyledMovingIconsBox = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 0;
	right: 0;
	z-index: 4;
	justify-content: space-around;
	align-items: flex-start;
`;

export const StyledIcon = styled.img`
	width: ${(props) => `${props.$iconWidth}px`};
	position: absolute;
	aspect-ratio: 1;
	left: 0;
	z-index: 4;
	@media screen and ((max-width: ${({ theme }) => theme.breakpoint.lg})) {
		height: 4vh;
	}
`;

export const StyledIconName = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	text-transform: uppercase;
	transition: 2s ease;
	color: ${({ theme }) => theme.color.keppel};
	z-index: 5;
	font-size: 2rem;
	font-weight: bold;

	@media screen and ((max-width: ${({ theme }) => theme.breakpoint.lg})) {
		font-size: 1rem;
	}
`;

export const StyledIconBox = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	position: relative;
	height: ${(props) => `${props.$iconWidth}px`};
	min-height: 6vh;

	@media screen and ((max-width: ${({ theme }) => theme.breakpoint.lg})) {
		height: 3vh;
	}

	${StyledIcon} {
		animation: ${(props) =>
			props.$initial
				? "none"
				: props.$boxHover
				? `slideIcon 2s linear forwards`
				: "slideIconReverse 2s linear forwards"};
	}
	${StyledIconName} {
		animation: ${(props) =>
			props.$initial
				? "none"
				: props.$boxHover
				? `slideName 2s ease-in-out forwards`
				: "slideNameReverse 2s linear forwards"};
	}

	@keyframes slideName {
		0% {
			transform: translateY(0) rotateX(0deg);
		}
		50% {
			transform: translateY(200%) rotateX(60deg);
			color: ${({ theme }) => theme.color.dixie};
		}
		100% {
			transform: translateY(0) rotateX(0deg);
		}
	}

	@keyframes slideNameReverse {
		0% {
			transform: translateY(0) rotateX(0deg);
		}
		35% {
			transform: translateX(-20%) rotateX(0deg);
			color: ${({ theme }) => theme.color.keppel};
		}
		50% {
			transform: scale(2) translateX(0);
			color: ${({ theme }) => theme.color.dixie};
		}
		75% {
			transform: translateX(10%) rotateX(0deg);
			color: ${({ theme }) => theme.color.keppel};
		}
		100% {
			transform: translateY(0) rotateX(0deg) translateX(0);
		}
	}

	@keyframes slideIcon {
		0% {
			transform: translateY(0) rotateX(0deg);
		}
		100% {
			transform: ${(props) =>
				`translateX(calc(${props.$boxWidth}px - ${props.$iconWidth}px)) rotate(${props.$rotateCounter}deg)`};
		}
	}
	@keyframes slideIconReverse {
		0% {
			transform: ${(props) =>
				`translateX(calc(${props.$boxWidth}px - ${props.$iconWidth}px)) rotate(${props.$rotateCounter}deg)`};
		}
		100% {
			transform: translateY(0) rotateX(0deg);
		}
	}
`;
