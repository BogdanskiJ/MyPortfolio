import React, { useState } from "react";
import { StyledH2, StyledP } from "../styled";
import {
	StyledSkillsBox,
	StyledSkillsSection,
	StyledSkillsTextBox,
} from "./styled";

import css3 from "./images/css3.svg";
import html5 from "./images/html5.svg";
import js from "./images/js.svg";
import react from "./images/react.svg";
import redux from "./images/redux.svg";
import chartJs from "./images/logo.svg";
import { MovingIcons } from "./movingIcons";

export const Skills = () => {
	const iconsArray = [
		{ img: react, name: "react" },
		{ img: js, name: "js" },
		{ img: redux, name: "redux" },
		{ img: css3, name: "css3" },
		{ img: html5, name: "html5" },
		{ img: chartJs, name: "chartJs" },
	];

	const [mouseOver, setMouseOver] = useState(false);

	const handleMouseOver = () => {
		setMouseOver(!mouseOver);
	};

	return (
		<StyledSkillsSection id="skills" onMouseOver={handleMouseOver}>
			<StyledSkillsTextBox>
				<StyledH2>Skills</StyledH2>
				<StyledP>
					I use many modern tools, frameworks and libraries. In my project I
					used React, JavaScript, Redux, Styled Components, ChartJS and many
					other. You can check the tools I used and the way I used them in my
					projects on GitHub.
				</StyledP>
			</StyledSkillsTextBox>
			<StyledSkillsBox>
				<MovingIcons
					$iconsArray={iconsArray}
					$mouseOver={mouseOver}></MovingIcons>
			</StyledSkillsBox>
		</StyledSkillsSection>
	);
};
