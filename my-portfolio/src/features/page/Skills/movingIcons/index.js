import React, { useEffect, useRef, useState } from "react";
import { StyledMovingIconsBox } from "./styled";
import { Icon } from "./icon";

export const MovingIcons = ({ $iconsArray }) => {
	const movingIconsBoxRef = useRef(null);
	const [boxWidth, setBoxWidth] = useState(900);
	const [iconWidth, setIconWidth] = useState(60);
	const [rotateCounter, setRotateCounter] = useState(3);

	const boxToIconRatio = 7;

	const handleOnLoad = () => {
		setBoxWidth(movingIconsBoxRef.current.getBoundingClientRect().width);
		setIconWidth(
			movingIconsBoxRef.current.getBoundingClientRect().width / boxToIconRatio,
		);
		setRotateCounter(Math.floor(boxToIconRatio / 3) * 360);
	};

	return (
		<StyledMovingIconsBox ref={movingIconsBoxRef} onLoad={handleOnLoad}>
			{$iconsArray.map((icon) => (
				<Icon
					key={icon.img}
					icon={icon}
					$boxWidth={boxWidth}
					$rotateCounter={rotateCounter}
					$iconWidth={iconWidth}
				/>
			))}
		</StyledMovingIconsBox>
	);
};
