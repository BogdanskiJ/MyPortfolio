import React, { useEffect, useRef, useState } from "react";
import { StyledH2, StyledP } from "../styled";
import {
	StyledSkillsBox,
	StyledSkillsSection,
	StyledSkillsTextBox,
	StyledTrail,
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
	const [trail, setTrail] = useState({ x: 0, y: 0 });

	const handleMouseTrail = (e) => {
		const newTrail = { x: e.clientX, y: e.clientY };
		setTrail(newTrail);
	};

	return (
		<StyledSkillsSection id="skills">
			<StyledSkillsTextBox>
				<StyledH2>Skills</StyledH2>
				<StyledP>
					I am a passionate Front-end Developer. I'm always looking for
					opportunities to learn more. I am involved in open-source projects. My
					experience includes c websites. If you have any problem with your
					website, please email me and I will try to help.
				</StyledP>
			</StyledSkillsTextBox>
			<StyledSkillsBox onMouseMove={handleMouseTrail}>
				<MovingIcons $iconsArray={iconsArray}></MovingIcons>
			</StyledSkillsBox>
		</StyledSkillsSection>
	);
};
