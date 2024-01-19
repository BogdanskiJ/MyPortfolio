import React from "react";
import {
	SpanBlink,
	StyledH1,
	StyledName,
	StyledNameSlider,
	StyledNameSliderDiv,
} from "./styled";

export const Name = () => {
	return (
		<StyledName>
			<StyledH1>
				Jakub Bogdański<SpanBlink>_</SpanBlink>
			</StyledH1>
			<StyledNameSliderDiv>
				<StyledNameSlider>Frontend Developer</StyledNameSlider>
			</StyledNameSliderDiv>
		</StyledName>
	);
};
