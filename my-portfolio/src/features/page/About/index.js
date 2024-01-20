import React, { useEffect, useRef } from "react";
import { StyledH2, StyledP } from "../styled";
import Parallax from "parallax-js";
import {
	StyledAboutBox,
	StyledAboutTextBox,
	StyledMovingLayer,
	StyledMovingLayerBox,
} from "./styled";

import Layer1 from "./images/layer1.svg";
import Layer2 from "./images/layer2.svg";
import Layer3 from "./images/layer3.svg";
import Layer4 from "./images/layer4.svg";
import Layer5 from "./images/layer5.svg";

export const About = () => {
	const scene = useRef(null);

	useEffect(() => {
		const parallaxInstance = new Parallax(scene.current, {
			relativeInput: true,
		});
	}, [scene]);

	return (
		<StyledAboutBox id="about">
			<StyledAboutTextBox>
				<StyledH2>About me</StyledH2>
				<StyledP>
					Hi, I'm Kuba. I'm a passionate Frontend Developer. I'm always looking
					for opportunities to learn more and more. My experience includes
					creating applications and websites. I worked in teams but also created
					independently. I am involved in open-source projects. I used many
					technologies at work, most ofeten I worked with React.
				</StyledP>
			</StyledAboutTextBox>
			<StyledMovingLayerBox ref={scene}>
				<StyledMovingLayer data-depth="0.2" src={Layer1} />

				<StyledMovingLayer data-depth="0.4" src={Layer2} />

				<StyledMovingLayer data-depth="0.6" src={Layer3} />

				<StyledMovingLayer data-depth="0.8" src={Layer4} />

				<StyledMovingLayer data-depth="0.1" src={Layer5} />
			</StyledMovingLayerBox>
		</StyledAboutBox>
	);
};
