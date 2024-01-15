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
	transition: 1s ease-in-out;
	transform: translate(-50%, -50%);
	position: absolute;
`;

export const StyledPortfolioModalImg = styled.img`
	width: 100%;
	height: auto;
	max-width: 100%;
	margin: auto;
	border-radius: 20px;
	max-height: 100%;
`;

export const StyledPortfolioModalButton = styled.button`
	display: flex;
	padding: 0 2vw;
	height: 6vh;
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
`;

export const StyledPortfolioModalLink = styled.a`
	text-decoration: none;
	text-align: center;
	color: ${({ theme }) => theme.color.codGray};
	font-weight: bold;
	font-size: 3vh;
`;

export const StyledPortfolioModalCloseButton = styled.button`
	max-width: 40px;
	max-height: 40px;
	top: 2vh;
	right: 4vw;
	padding: 0;
	background: transparent;
	border: none;
	position: fixed;
	display: flex;
	cursor: pointer;
`;
