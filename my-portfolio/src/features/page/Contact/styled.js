import styled from "styled-components";

export const StyledContactSection = styled.div`
	height: 100vh;
	width: 70vw;
	display: flex;
	flex-direction: row;
	position: relative;
	max-height: 100vh;
	overflow: hidden;
	scroll-snap-align: start;
	scroll-snap-stop: always;
`;

export const StyledContactTextBox = styled.div`
	max-width: 40%;
	padding: 20px;
	display: flex;
	z-index: 1;
	height: fit-content;
	position: sticky;
	top: 10px;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	background: ${({ theme }) => theme.color.codGray};
`;

export const StyledContactIconBox = styled.div`
	width: 100vw;
	height: 100vh;
	z-index: 2;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding: 20px 0;
	gap: 20px;
`;

export const StyledIconBox = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	transition: all 0.4s ease-out;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 70%;
`;

export const StyledIconAnchor = styled.a`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: fit-content;
`;

export const StyledIconImg = styled.svg`
	width: 100px;
`;
