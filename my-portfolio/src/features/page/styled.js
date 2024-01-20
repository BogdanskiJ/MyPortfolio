import styled from "styled-components";
import p1 from "../../images/projekt6.png";
import p2 from "../../images/projekt8.png";
import p3 from "../../images/projekt5.png";

export const StyledImageBox = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: auto;
	z-index: 2;
	padding-bottom: 20%;
`;
export const StyledDiv = styled.div`
	position: absolute;
	z-index: 4;
	width: 70vw;
	/* padding-right: 10px; */
	left: 30vw;
	top: 0;

	scroll-snap-type: y mandatory;
	overflow: auto;
	height: 100vh;

	&::-webkit-scrollbar {
		width: 0;
		height: 0;
	}
	&::-webkit-scrollbar-track {
		background: none;
	}
	&::-webkit-scrollbar-thumb {
		background: none;
	}
	&::-webkit-scrollbar-thumb:hover {
		background: none;
	}
	&::-webkit-scrollbar-thumb:active {
		background: none;
	}

	//zjebane scroll snap
`;

export const StyledImage = styled.div`
	height: 100vh;
	width: 100%;
	background-position: top 5% left 6%;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: 20%;
	background-image: url(${p1});
`;
export const StyledImageShadow = styled.div`
	height: 100vh;
	width: 100%;
	position: absolute;
`;
export const StyledImage2 = styled.div`
	height: 100vh;
	width: 100%;
	background-position: top 5% left 6%;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: 20%;
	background-image: url(${p2});
`;
export const StyledImage3 = styled.div`
	height: 700vh;
	width: 100%;
	background-position: top 5% left 6%;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: 20%;
	background-image: url(${p3});
`;

export const StyledH2 = styled.h2`
	color: ${({ theme }) => theme.color.white};
	font-size: 2rem;

	@media screen and ((max-width: ${({ theme }) => theme.breakpoint.lg})) {
		font-size: 1.5rem;
	}
`;

export const StyledP = styled.p`
	color: ${({ theme }) => theme.color.white};
	text-align: justify;
	line-height: 1.5;
	font-size: 1.2rem;

	@media screen and ((max-width: ${({ theme }) => theme.breakpoint.lg})) {
		line-height: 1.2;
		font-size: 0.6rem;
	}
`;

export const StyledPageSection = styled.div`
	height: 100vh;
	position: relative;
	display: flex;
	flex-direction: row;
	width: 70vw;
`;
