import styled from "styled-components";

export const StyledPortfolioModalBox = styled.div`
	overflow: hidden;
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	background: ${({ theme }) => theme.color.modalTransparent};
	z-index: 6;
	display: ${(props) => (props.$initialClicked ? "none" : "flex")};

	animation: ${(props) =>
		props.$initialClicked
			? "none"
			: props.$clicked
			? "slide-in-right 1s ease-in-out both"
			: "slide-out-right 1s ease-in-out both"};

	@keyframes slide-in-right {
		0% {
			transform: translateX(100%);
			opacity: 0.5;
		}
		100% {
			transform: translateX(0);
			opacity: 1;
		}
	}
	@keyframes slide-out-right {
		0% {
			transform: translateX(0);
			opacity: 1;
		}
		100% {
			transform: translateX(100%);
			opacity: 0.5;
		}
	}
`;

export const StyledPortfolioModalInsideBox = styled.div`
	position: absolute;
	background: red;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

export const StyledPortfolioModal = styled.div`
	width: 80vw;
	height: 80vh;
	top: 50%;
	left: 50%;
	display: flex;
	transform: translate(-50%, -50%);
	position: absolute;
	background-image: ${(props) =>
		props.$isFullLoaded ? "none" : `url(${props.$backgroundModalImg})`};
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;

	&::before {
		content: "";
		position: absolute;
		cursor: pointer;
		width: 80vw;
		height: 80vh;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 20px;
		animation: ${(props) =>
			props.$isFullLoaded ? "none" : "pulse2 2.5s infinite"};
	}

	@keyframes pulse2 {
		0% {
			background-color: rgba(255, 255, 255, 0);
		}
		50% {
			background-color: rgba(255, 255, 255, 0.2);
		}
		100% {
			background-color: rgba(255, 255, 255, 0);
		}
	}
`;

export const StyledPortfolioModalImg = styled.img`
	width: 100%;
	height: auto;
	max-width: 100%;
	margin: auto;
	border-radius: 20px;
	max-height: 100%;
	opacity: ${(props) => (props.$isFullLoaded ? "1" : "0")};
	transition: opacity 200ms ease-in-out;
	object-position: center;
	object-fit: cover;
	cursor: pointer;
`;

export const StyledPortfolioModalButton = styled.button`
	display: flex;
	height: 6vh;
	padding: 0;
	border-radius: 20px;
	position: absolute;
	top: 3vh;
	left: 50%;
	transform: translate(-50%, 0%);
	z-index: 6;
	align-content: center;
	justify-content: center;
	align-items: center;
	border: none;
	background: ${({ theme }) => theme.color.goldTips};
	transition: 0.2s ease-in-out;

	&:hover {
		background: ${({ theme }) => theme.color.sahara};
	}
	&:active {
		background: ${({ theme }) => theme.color.butteredRum};
	}
`;

export const StyledPortfolioModalLink = styled.a`
	text-decoration: none;
	text-align: center;
	color: ${({ theme }) => theme.color.codGray};
	font-weight: bold;
	font-size: 3vh;
	transition: 0.3s ease-in-out;
	width: 100%;
	height: 100%;
	padding: 0 2vw;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const StyledPortfolioModalCloseButton = styled.button`
	max-width: 40px;
	max-height: 40px;
	top: 2vh;
	right: 4vw;
	padding: 8px;
	margin: 10px;
	background: ${({ theme }) => theme.color.red};
	border: none;
	border-radius: 50%;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: 0.2s ease-in-out;

	&:hover {
		background: ${({ theme }) => theme.color.brightRed};
	}
	&:active {
		background: ${({ theme }) => theme.color.maroon};
	}
`;
