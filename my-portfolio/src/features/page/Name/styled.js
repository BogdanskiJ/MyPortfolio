import styled from "styled-components";

export const StyledName = styled.div`
	width: fit-content;
	overflow: hidden;
	z-index: 3;
	margin-bottom: 30px;
	scroll-snap-align: start;
	scroll-snap-stop: always;
`;

export const StyledH1 = styled.h1`
	color: ${({ theme }) => theme.color.white};
	font-size: 48px;
	margin-bottom: 0;
`;

export const SpanBlink = styled.span`
	opacity: 1;
	animation: blinking 1s infinite;

	@keyframes blinking {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 0;
		}
		51% {
			opacity: 1;
		}
		100% {
			opacity: 1;
		}
	}
`;

export const StyledNameSliderDiv = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
`;

export const StyledNameSlider = styled.span`
	display: inline-block;
	animation: sliderAnimation 10s linear infinite;
	color: white;
	width: 100%;

	@keyframes sliderAnimation {
		0% {
			transform: translateX(100%);
		}
		100% {
			transform: translateX(-38%);
		}
	}
`;
