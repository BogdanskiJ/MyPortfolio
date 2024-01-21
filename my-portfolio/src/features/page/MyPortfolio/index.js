import React, { useEffect, useState } from "react";
import { StyledH2, StyledP } from "../styled";
import {
	StyledDescriptionBox,
	StyledDescriptionButton,
	StyledPortfolioProjectsBox,
	StyledPortfolioSection,
	StyledPortfolioTextBox,
	StyledProjectBox,
	StyledProjectH2,
	StyledDescriptionButton2,
	StyledDescriptionButton3,
	StyledProjectBoxImage,
} from "./styled";

import alekubek from "./images/alekubek.webp";
import alekubekSmall from "./images/alekubek-small.webp";
import alekubekGif from "./images/alekubekGif.gif";
import gusdatabase from "./images/gusdatabase.webp";
import gusdatabaseSmall from "./images/gusdatabase-small.webp";
import gusdatabseGif from "./images/gusdatabaseGif.gif";
import moviesbrowser from "./images/moviesbrowser.webp";
import moviesbrowserSmall from "./images/moviesbrowser-small.webp";
import moviesbrowserGif from "./images/moviesbrowserGif.gif";
import github from "./images/github.webp";
import githubSmall from "./images/github-small.webp";
import githubGif from "./images/GHRepositiories.gif";

import { PortfolioModal } from "./modal";
import { ProjectBox } from "./projectBox";

export const MyPortfolio = () => {
	const [isClicked, setIsClicked] = useState("initial");
	const [modalImg, setModalImg] = useState(github);
	const [modalLink, setModalLink] = useState("https://github.com/BogdanskiJ");
	const [modalName, setModalName] = useState("");

	const setData = (img, link, name) => {
		setModalImg(img);
		isClicked === "initial" || isClicked === false
			? setIsClicked(true)
			: setIsClicked(false);
		setModalLink(link);
		setModalName(name);
	};

	useEffect(() => {
		if (isClicked === true) {
			document.body.style.overflow = "hidden";
			document.body.style.marginRight = "6px";
			document.body.style.marginBottom = "6px";
		} else {
			document.body.style.overflow = "unset";
			document.body.style.marginRight = "0";
			document.body.style.marginBottom = "0";
		}
	}, [isClicked]);

	return (
		<StyledPortfolioSection id="myPortfolio">
			<StyledPortfolioTextBox>
				<StyledH2>My Portfolio</StyledH2>
				<StyledP>
					My portfolio Frontend Developer includes the creation of the frontend
					layer of an online store based on the Shoper platform, several
					websites and blogs. Additionally, I created interesting applications
					based on public APIs. You can find most of my projects on my GitHub.
				</StyledP>
			</StyledPortfolioTextBox>
			<StyledPortfolioProjectsBox>
				<ProjectBox
					mainGif={alekubekGif}
					url={"https://www.alekubek.pl/"}
					name={"AleKubek.pl"}
					backgroundImg={alekubekSmall}
					typeName={"E-commerce shop"}
					listImage={alekubek}
					setData={setData}
					descriptionText={
						"Online store with ceramic items. The project included navigation, menu, product presentatiom modules any many other things."
					}
				/>
				<ProjectBox
					mainGif={gusdatabseGif}
					url={
						"https://bogdanskij.github.io/LocalDataBank/#/jednostki-terytorialne"
					}
					name={"GUS Database"}
					backgroundImg={gusdatabaseSmall}
					typeName={"GHPages"}
					listImage={gusdatabase}
					setData={setData}
					descriptionText={
						"An application for easy and intuitive viewing of data collected by the Central Statistical Office."
					}
				/>
				<ProjectBox
					mainGif={moviesbrowserGif}
					url={"https://bogdanskij.github.io/movies-browser/#/popular-movies"}
					name={"Movie Browser"}
					backgroundImg={moviesbrowserSmall}
					typeName={"GHPages"}
					listImage={moviesbrowser}
					setData={setData}
					descriptionText={
						"An application to browse a database of movies, popular movies and actors and film producers."
					}
				/>
				<ProjectBox
					mainGif={githubGif}
					url={"https://github.com/BogdanskiJ"}
					name={"All GitHub Projects"}
					backgroundImg={githubSmall}
					typeName={"GH Projects"}
					listImage={github}
					setData={setData}
					descriptionText={"All projects I have created or participated in."}
				/>
			</StyledPortfolioProjectsBox>
			<PortfolioModal
				clicked={isClicked}
				modalImgSrc={modalImg}
				setData={setData}
				modalLink={modalLink}
				modalName={modalName}
				backgroundModalImg={alekubekSmall}
			/>
		</StyledPortfolioSection>
	);
};
