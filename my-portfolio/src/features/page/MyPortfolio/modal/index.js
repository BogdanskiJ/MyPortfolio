import React, { useState } from "react";
import {
	StyledPortfolioModal,
	StyledPortfolioModalBox,
	StyledPortfolioModalButton,
	StyledPortfolioModalCloseButton,
	StyledPortfolioModalImg,
	StyledPortfolioModalLink,
} from "./styled";

import { CloseButton } from "./closeButton";

export const PortfolioModal = ({
	modalImgSrc,
	clicked,
	setData,
	modalLink,
	modalName,
	backgroundModalImg,
}) => {
	let initialClicked = false;
	clicked === "initial" ? (initialClicked = true) : (initialClicked = false);

	const [isFullLoaded, setIsFullLoaded] = useState(false);
	const loaded = () => {
		setIsFullLoaded(true);
	};

	return (
		<StyledPortfolioModalBox
			$clicked={clicked}
			$initialClicked={initialClicked}
			onClick={() => setData(modalImgSrc, modalLink, modalName)}>
			<StyledPortfolioModal
				$clicked={clicked}
				onLoad={() => loaded()}
				$backgroundModalImg={backgroundModalImg}
				$isFullLoaded={isFullLoaded}>
				<StyledPortfolioModalImg
					src={modalImgSrc}
					loading="lazy"
					$isFullLoaded={isFullLoaded}
				/>
			</StyledPortfolioModal>
			<StyledPortfolioModalButton $clicked={clicked}>
				<StyledPortfolioModalLink
					href={modalLink}
					rel="noopener noreferrer"
					target="_blank">{`Go to ${modalName}`}</StyledPortfolioModalLink>
			</StyledPortfolioModalButton>
			<StyledPortfolioModalCloseButton $clicked={clicked}>
				<CloseButton color={"white"} />
			</StyledPortfolioModalCloseButton>
		</StyledPortfolioModalBox>
	);
};
