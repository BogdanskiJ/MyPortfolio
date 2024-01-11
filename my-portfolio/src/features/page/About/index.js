import React, { useEffect, useRef } from "react";
import { StyledH2, StyledP } from "../styled";
import Parallax from "parallax-js";
import {
	StyledAboutBox,
	StyledAboutTextBox,
	StyledMovingLayer,
	StyledMovingLayerBox,
} from "./styled";

import MovingLayerA from "./images/movingLayerA.png";
import MovingLayerB from "./images/movingLayerB.png";
import MovingLayerC from "./images/movingLayerC.png";
import MovingLayerD from "./images/movingLayerD.png";
import MovingLayerE from "./images/movingLayerE.png";

export const About = () => {
	const scene = useRef(null);

	useEffect(() => {
		const parallaxInstance = new Parallax(scene.current, {
			relativeInput: true,
		});
	}, [scene]);

	console.log(scene.current);
	// const scene = document.querySelector("#scene");
	// const parallaxInstance = new Parallax(scene, {
	// 	relativeInput: true,
	// });
	return (
		<StyledAboutBox id="about">
			<StyledAboutTextBox>
				<StyledH2>About me</StyledH2>
				<StyledP>
					Hi, I'm Kuba. I'm a passionate Frontend Developer. I'm always looking
					for opportunities to learn more. I am involved in open-source
					projects. My experience includes creating responsive e-commerce
					websites, web applications and all types of websites. If you have any
					problem with your website, please email me and I will try to help.
				</StyledP>
			</StyledAboutTextBox>
			<StyledMovingLayerBox ref={scene}>
				<StyledMovingLayer data-depth="0.2" src={MovingLayerA} />

				<StyledMovingLayer data-depth="0.4" src={MovingLayerB} />

				<StyledMovingLayer data-depth="0.6" src={MovingLayerC} />

				<StyledMovingLayer data-depth="0.8" src={MovingLayerD} />

				<StyledMovingLayer data-depth="0.1" src={MovingLayerE} />
			</StyledMovingLayerBox>
		</StyledAboutBox>
	);
};
