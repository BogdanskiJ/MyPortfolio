import styled from "styled-components";

export const StyledSkillsSection = styled.div`
	height: 100vh;
	display: flex;
	width: auto;
	flex-direction: row;
	position: relative;
	scroll-snap-align: start;
	scroll-snap-stop: always;
`;
export const StyledSkillsTextBox = styled.div`
	display: flex;
	flex-direction: column;
	position: sticky;
	top: 10px;
	height: fit-content;
	max-width: 40%;
	padding: 20px;
`;

export const StyledSkillsBox = styled.div`
	width: 100vw;
	height: 95vh;
	display: flex;
	flex-direction: column;
	gap: 10px;
	position: relative;
`;
export const StyledTrail = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	pointer-events: none;
	opacity: 1;
	transition: 0.2s ease;
`;

export const StyledSvg = styled.svg`
	position: fixed;
	top: 0;
	left: 0;

	z-index: 1000;
`;

export const StyledPath = styled.path`
	fill: none;

	stroke: yellow;
	stroke-width: 8px;
	stroke-linecap: round;
	stroke-linejoin: round;
`;
