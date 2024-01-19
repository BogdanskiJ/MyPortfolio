import React, { useEffect, useState } from "react";
import { StyledIcon, StyledIconBox, StyledIconName } from "./styled";

export const Icon = ({ icon, $boxWidth, $rotateCounter, $iconWidth }) => {
	const [boxHover, setBoxHover] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);
	const [initial, setInitial] = useState(true);

	const handleMouseLeave = () => {
		setInitial(false);
		if (!isAnimating) {
			setIsAnimating(true);
		}
	};

	const handleMouseOver = () => {
		setInitial(false);
		if (!isAnimating) {
			setIsAnimating(true);
		}
	};

	useEffect(() => {
		let timer;

		if (isAnimating) {
			setBoxHover(!boxHover);
			timer = setTimeout(() => {
				setIsAnimating(!isAnimating);
			}, 2000);
		}
		return () => {
			if (timer) clearTimeout(timer);
		};
	}, [isAnimating]);

	return (
		<StyledIconBox
			onMouseEnter={handleMouseOver}
			onMouseLeave={handleMouseLeave}
			$boxWidth={$boxWidth}
			$rotateCounter={$rotateCounter}
			$boxHover={boxHover}
			$iconWidth={$iconWidth}
			$initial={initial}>
			<StyledIcon src={icon.img} $iconWidth={$iconWidth} />
			<StyledIconName>{icon.name}</StyledIconName>
		</StyledIconBox>
	);
};
