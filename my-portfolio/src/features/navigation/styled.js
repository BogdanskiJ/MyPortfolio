import styled from "styled-components";

export const StyledNavBox = styled.div`
	display: flex;
	width: 30%;
	z-index: 4;
`;

export const StyledNav = styled.nav`
	display: flex;
	width: 30%;
	flex-direction: column;
	justify-content: space-around;
	bottom: 0;
	padding-left: 5%;
	position: fixed;
	z-index: 1;
	background: transparent;
	pointer-events: none;
`;

export const StyledNavUl = styled.ul`
	padding: 0;
	display: flex;
	flex-direction: column;
	/* gap: 3vh; */
	pointer-events: none;
`;

export const StyledNavText = styled.span`
	width: fit-content;
	font-size: clamp(1rem, 1.6vw, 5rem);
	/* font-size: clamp(1rem, 1.6vw, 5rem); */
	max-width: 33vw;
	cursor: pointer;
	pointer-events: auto;
`;

export const StyledNavSpanBig = styled.span`
	display: block;
	border-radius: 50%;
	transition: transform 0.5s ease;
	right: 0;
	z-index: 1;
	bottom: 50%;
	height: 130px;
	width: 130px;
	overflow: hidden;
	position: absolute;
	opacity: 0;
	transform: scale(0);

	@media ((max-width: ${({ theme }) => theme.breakpoint.xl})) {
		height: 110px;
		width: 110px;
	}
	@media ((max-width: ${({ theme }) => theme.breakpoint.lg})) {
		height: 90px;
		width: 90px;
	}
	@media ((max-width: ${({ theme }) => theme.breakpoint.md})) {
		height: 75px;
		width: 75px;
	}
	@media ((max-width: ${({ theme }) => theme.breakpoint.sm})) {
		height: 60px;
		width: 60px;
	}

	@keyframes bubblesAnimation {
		0% {
			opacity: 1;
			bottom: 0;
		}
		90% {
			opacity: 1;
		}
		100% {
			opacity: 0;
			bottom: 100px;
		}
	}

	@keyframes sides {
		0% {
			margin-right: 0;
		}
		100% {
			margin-right: 50px;
		}
	}
`;
export const StyledNavSpanMedium = styled.span`
	display: block;
	border-radius: 50%;
	transition: transform 0.5s ease;
	right: -20%;
	z-index: 2;
	bottom: -20%;
	height: 90px;
	width: 90px;
	position: absolute;
	overflow: hidden;
	opacity: 0;
	transform: scale(0);

	@media ((max-width: ${({ theme }) => theme.breakpoint.xl})) {
		height: 80px;
		width: 80px;
	}
	@media ((max-width: ${({ theme }) => theme.breakpoint.lg})) {
		height: 65px;
		width: 65px;
	}
	@media ((max-width: ${({ theme }) => theme.breakpoint.md})) {
		height: 50px;
		width: 50px;
	}
	@media ((max-width: ${({ theme }) => theme.breakpoint.sm})) {
		height: 30px;
		width: 30px;
	}

	@keyframes bubblesAnimation {
		0% {
			opacity: 1;
			bottom: 20%;
		}
		90% {
			opacity: 1;
		}
		100% {
			opacity: 0;
			bottom: 100px;
		}
	}

	@keyframes sidesMedium {
		0% {
			margin-right: 50px;
		}
		50% {
			margin-right: 0;
		}
		100% {
			margin-right: 50px;
		}
	}
`;

export const StyledNavSpanSmall = styled.span`
	display: block;
	border-radius: 50%;
	width: 60px;
	transition: transform 0.5s ease;
	height: 60px;
	right: -40%;
	z-index: 3;
	bottom: 0;
	overflow: hidden;
	position: absolute;
	opacity: 0;
	transform: scale(0);

	@media ((max-width: ${({ theme }) => theme.breakpoint.xl})) {
		height: 50px;
		width: 50px;
	}
	@media ((max-width: ${({ theme }) => theme.breakpoint.lg})) {
		height: 40px;
		width: 40px;
	}
	@media ((max-width: ${({ theme }) => theme.breakpoint.md})) {
		height: 30px;
		width: 30px;
	}
	@media ((max-width: ${({ theme }) => theme.breakpoint.sm})) {
		height: 20px;
		width: 20px;
	}

	@keyframes bubblesAnimation {
		0% {
			opacity: 1;
			bottom: 0;
		}
		90% {
			opacity: 1;
		}
		100% {
			opacity: 0;
			bottom: 100px;
		}
	}

	@keyframes sides {
		0% {
			margin-right: 0;
		}
		100% {
			margin-right: 50px;
		}
	}
`;

export const StyledNavBubbleImg = styled.img`
	width: 100%;
	display: block;
`;

export const StyledBubbleBox = styled.div`
	position: relative;
	z-index: 5;
`;

export const StyledNavLi = styled.li`
	display: flex;
	width: auto;
	color: ${({ theme }) => theme.color.keppel};
	background: transparent;
	border: none;
	position: relative;
	text-transform: uppercase;
	font-weight: bold;
	z-index: 2;
	pointer-events: none;
	padding-bottom: 3vh;

	&:hover + ${StyledBubbleBox} {
		${StyledNavSpanBig} {
			transition-delay: 0s;
			animation-delay: 0s;
			transform: scale(1);
			animation: bubblesAnimation 4s linear 1,
				sides 2s ease-in-out infinite alternate;
		}
		${StyledNavSpanMedium} {
			transition-delay: 0.5s;
			animation-delay: 0.5s;
			transform: scale(1);
			animation: bubblesAnimation 4s linear 1,
				sidesMedium 4s ease-in-out infinite;
		}
		${StyledNavSpanSmall} {
			transition-delay: 1s;
			animation-delay: 1s;
			transform: scale(1);
			animation: bubblesAnimation 4s linear 1,
				sides 2s ease-in-out infinite alternate;
		}
	}
`;
