import React, { useState } from "react";
import {
	StyledDescriptionBox,
	StyledDescriptionButton,
	StyledProjectBox,
	StyledProjectBoxImage,
	StyledProjectH2,
	StyledDescriptionButton2,
	StyledDescriptionButton3,
} from "./styled";

export const ProjectBox = ({
	mainGif,
	url,
	name,
	backgroundImg,
	typeName,
	listImage,
	setData,
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
			<StyledProjectH2>{`${name}`}</StyledProjectH2>
			<StyledDescriptionBox>
				{typeName === "E-commerce shop" ? (
					<StyledDescriptionButton>{`${typeName}`}</StyledDescriptionButton>
				) : typeName === "GHPages" ? (
					<StyledDescriptionButton2>{`${typeName}`}</StyledDescriptionButton2>
				) : (
					<StyledDescriptionButton3>{`${typeName}`}</StyledDescriptionButton3>
				)}
			</StyledDescriptionBox>
		</StyledProjectBox>
	);
};
