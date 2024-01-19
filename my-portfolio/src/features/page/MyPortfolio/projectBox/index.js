import React, { useState } from "react";
import {
	StyledDescriptionBox,
	StyledDescriptionButton,
	StyledProjectBox,
	StyledProjectBoxImage,
	StyledProjectH2,
	StyledDescriptionButton2,
	StyledDescriptionButton3,
	StyledDescriptionHoverBox,
	StyledDescriptionText,
} from "./styled";

export const ProjectBox = ({
	mainGif,
	url,
	name,
	backgroundImg,
	typeName,
	listImage,
	setData,
	descriptionText,
}) => {
	const [isFullLoaded, setIsFullLoaded] = useState(false);
	const loaded = () => {
		setIsFullLoaded(true);
	};
	return (
		<StyledProjectBox
			onClick={() => setData(mainGif, url, name)}
			onLoad={() => loaded()}
			$backgroundImage={backgroundImg}
			$isFullLoaded={isFullLoaded}>
			<StyledProjectBoxImage
				src={listImage}
				loading="lazy"
				$isFullLoaded={isFullLoaded}
			/>
			<StyledDescriptionHoverBox>
				<StyledProjectH2>{`${name}`}</StyledProjectH2>
				<StyledDescriptionBox>
					<StyledDescriptionText>{descriptionText}</StyledDescriptionText>
					<StyledDescriptionButton>{`${typeName}`}</StyledDescriptionButton>
				</StyledDescriptionBox>
			</StyledDescriptionHoverBox>
		</StyledProjectBox>
	);
};
