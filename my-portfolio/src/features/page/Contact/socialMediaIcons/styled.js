import styled from "styled-components";

export const StyledSvgGH = styled.svg`
	width: 6vw;
	aspect-ratio: 1;
	display: flex;
	flex-direction: row;
	align-content: center;
	justify-content: center;
	align-items: center;
	min-width: 40px;

	& g {
		fill: none;
	}

	& circle:nth-of-type(1) {
		stroke: white;
		transform-origin: 50% 50%;
		transition: all 0.2s;
	}
	& circle:nth-of-type(2) {
		fill: none;
		transform-origin: 50% 50%;
		transition: all 0.2s;
	}
	& path {
		fill: white;
		transition: all 0.2s;
	}

	&:hover,
	&:active,
	&:focus {
		& circle:nth-of-type(1) {
			stroke: white;
			transform: scale(1.1);
			transition: all 0.45s;
		}
		& circle:nth-of-type(2) {
			fill: white;
			transition: all 0.45s;
		}
		& path {
			fill: black;
			transition: all 0.45s;
		}
	}
`;

export const StyledSvgLinkedin = styled.svg`
	width: 6vw;
	aspect-ratio: 1;
	display: flex;
	flex-direction: row;
	align-content: center;
	justify-content: center;
	align-items: center;
	min-width: 40px;

	& g {
		fill: none;
	}

	& circle:nth-of-type(1) {
		stroke: white;
		transform-origin: 50% 50%;
		transition: all 0.2s;
	}
	& circle:nth-of-type(2) {
		fill: none;
		transform-origin: 50% 50%;
		transition: all 0.2s;
	}

	& path {
		fill: white;
		transition: all 0.2s;
	}

	&:hover,
	&:active,
	&:focus {
		& circle:nth-of-type(1) {
			stroke: #4f92ac;
			transform: scale(1.1);
			transition: all 0.45s;
		}
		& circle:nth-of-type(2) {
			fill: white;
			transition: all 0.45s;
		}
		& path {
			fill: #4f92ac;
			transition: all 0.45s;
		}
	}
`;

export const StyledSvgMail = styled.svg`
	width: 6vw;
	aspect-ratio: 1;
	display: flex;
	flex-direction: row;
	align-content: center;
	justify-content: center;
	align-items: center;
	min-width: 40px;

	& g {
		fill: none;
	}

	& circle:nth-of-type(1) {
		stroke: white;
		transform-origin: 50% 50%;
		transition: all 0.2s;
	}
	& circle:nth-of-type(2) {
		fill: none;
		transform-origin: 50% 50%;
		transition: all 0.2s;
	}

	& path {
		fill: white;
		transition: all 0.2s;
	}

	&:hover,
	&:active,
	&:focus {
		& circle:nth-of-type(1) {
			stroke: white;
			transform: scale(1.1);
			transition: all 0.45s;
		}
		& circle:nth-of-type(2) {
			fill: white;
			transition: all 0.45s;
		}
		& path {
			fill: url(#myGradient);
			transition: all 0.45s;
		}
	}
`;

export const StyledSvgPhone = styled.svg`
	width: 6vw;
	aspect-ratio: 1;
	display: flex;
	flex-direction: row;
	align-content: center;
	justify-content: center;
	align-items: center;
	min-width: 40px;

	& g {
		fill: none;
	}

	& circle:nth-of-type(1) {
		stroke: white;
		transform-origin: 50% 50%;
		transition: all 0.2s;
	}
	& circle:nth-of-type(2) {
		fill: none;
		transform-origin: 50% 50%;
		transition: all 0.2s;
	}

	& path {
		fill: white;
		transition: all 0.2s;
	}

	&:hover,
	&:active,
	&:focus {
		& circle:nth-of-type(1) {
			stroke: white;
			transform: scale(1.1);
			transition: all 0.45s;
		}
		& circle:nth-of-type(2) {
			fill: white;
			transition: all 0.45s;
		}
		& path {
			fill: black;
			transition: all 0.45s;
		}
	}
`;
