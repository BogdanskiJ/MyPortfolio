import styled from "styled-components";

export const StyledAboutBox = styled.div`
	height: auto;
	width: 70vw;
	display: flex;
	flex-direction: row;
	position: relative;
	overflow: hidden;
	max-height: 100vh;
`;
export const StyledAboutTextBox = styled.div`
	max-width: 40%;
	padding: 20px;
	display: flex;
	z-index: 1;
	height: 100vh;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	background: ${({ theme }) => theme.color.codGray};
`;

export const StyledDiv1 = styled.div`
	background: #1b1b1b;
	height: 40px;
	width: 200px;
`;
export const StyledDiv2 = styled.div`
	background: #33b198;
	height: 40px;
	width: 200px;
`;
export const StyledDiv3 = styled.div`
	background: #e4523b;
	height: 40px;
	width: 200px;
`;
export const StyledDiv4 = styled.div`
	background: #0b454d;
	height: 40px;
	width: 200px;
`;
export const StyledDiv5 = styled.div`
	background: #ecc417;
	height: 40px;
	width: 200px;
`;
export const StyledDiv6 = styled.div`
	background: #e8931e;
	height: 40px;
	width: 200px;
`;

export const StyledMovingLayerBox = styled.div`
	/* position: relative; */
	width: 100vw;
	height: 100vh;
`;

export const StyledMovingLayer = styled.img`
	position: absolute;
	width: 100%;
	right: 0;
	height: 100%;
`;
