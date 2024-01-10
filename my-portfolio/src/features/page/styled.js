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
	position: relative;
	z-index: 1;
	width: 70%;
	padding-right: 10%;
	top: 200px;
	/* margin-top: 200px; */
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
`;

export const StyledP = styled.p`
	color: ${({ theme }) => theme.color.white};
	text-align: justify;
	line-height: 1.5;
`;

export const StyledPageDiv = styled.div`
	height: 100vh;
`;
