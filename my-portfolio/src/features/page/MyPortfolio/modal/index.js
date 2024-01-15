import React from "react";
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
}) => {
	let initialClicked = false;
	clicked === "initial" ? (initialClicked = true) : (initialClicked = false);
	return (
		<StyledPortfolioModalBox
			$clicked={clicked}
			$initialClicked={initialClicked}
			onClick={() => setData(modalImgSrc, modalLink, modalName)}>
			<StyledPortfolioModal $clicked={clicked}>
				<StyledPortfolioModalImg src={modalImgSrc} />
			</StyledPortfolioModal>
			<StyledPortfolioModalButton $clicked={clicked}>
				<StyledPortfolioModalLink
					href={modalLink}
					rel="noopener noreferrer"
					target="_blank">{`Przejdź do strony ${modalName}`}</StyledPortfolioModalLink>
			</StyledPortfolioModalButton>
			<StyledPortfolioModalCloseButton $clicked={clicked}>
				<CloseButton />
			</StyledPortfolioModalCloseButton>
		</StyledPortfolioModalBox>
	);
};
