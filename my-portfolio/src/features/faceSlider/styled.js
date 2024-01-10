import styled from "styled-components";

import p1 from "../../images/projekt6.png";
import p2 from "../../images/projekt8.png";
import p3 from "../../images/projekt5.png";

export const StyledImageBox = styled.div`
	/* position: relative; */
	/* top: 0;
	left: 0; */
	/* width: 30%; */
	/* height: auto; */
	/* z-index: 2; */

	position: absolute;
	top: 0;
	left: 0;
	width: 30%;
	height: auto;
	z-index: 2;
	padding-bottom: 20%;
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

export const StyledImg1 = styled.img`
	position: fixed;
	left: 5%;
	top: 50vh;
	width: 300px;
`;
export const StyledImg2 = styled.img`
	position: fixed;
	left: 5%;
	top: 100vh;
	width: 300px;
`;
export const StyledImg3 = styled.img`
	position: fixed;
	left: 5%;
	top: 150vh;
	width: 300px;
`;
export const StyledImg4 = styled.img`
	position: fixed;
	left: 5%;
	top: 150vh;
	width: 300px;
`;
