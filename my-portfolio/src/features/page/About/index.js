import React, { useEffect, useRef, useState } from "react";
import { StyledH2, StyledP, StyledPageDiv } from "../styled";
import {
	StyledAboutBox,
	StyledAboutTextBox,
	StyledDiv1,
	StyledDiv2,
	StyledDiv3,
	StyledDiv4,
	StyledDiv5,
	StyledDiv6,
	StyledMovingLayer,
	StyledMovingLayerBox,
} from "./styled";

import MovingLayerA from "./images/movingLayerA.png";
import MovingLayerB from "./images/movingLayerB.png";
import MovingLayerC from "./images/movingLayerC.png";
import MovingLayerD from "./images/movingLayerD.png";
import MovingLayerE from "./images/movingLayerE.png";

export const About = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const containerRef = useRef(null);

	const updateMousePosition = (ev) => {
		setMousePosition({
			x: ev.clientX - containerRef.current.offsetLeft,
			y: ev.clientY - containerRef.current.offsetTop,
		});
	};

	useEffect(() => {
		const container = containerRef.current;
		container.addEventListener("mousemove", updateMousePosition);

		return () => {
			container.removeEventListener("mousemove", updateMousePosition);
		};
	}, []);

	const calculateTransform = (index) => {
		// Różne skale przekształcenia dla różnych obrazów
		const scale = 1 + index * 0.05;
		return `translate(${mousePosition.x * scale}px, ${
			mousePosition.y * scale
		}px)`;
	};

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
			<StyledMovingLayerBox>
				<StyledMovingLayer src={MovingLayerA}></StyledMovingLayer>
				<StyledMovingLayer src={MovingLayerB}></StyledMovingLayer>
				<StyledMovingLayer src={MovingLayerC}></StyledMovingLayer>
				<StyledMovingLayer src={MovingLayerD}></StyledMovingLayer>
				<StyledMovingLayer src={MovingLayerE}></StyledMovingLayer>
			</StyledMovingLayerBox>
			{/* <StyledDiv1></StyledDiv1>
			<StyledDiv2></StyledDiv2>
			<StyledDiv3></StyledDiv3>
			<StyledDiv4></StyledDiv4>
			<StyledDiv5></StyledDiv5>
			<StyledDiv6></StyledDiv6> */}
		</StyledAboutBox>
	);
};
