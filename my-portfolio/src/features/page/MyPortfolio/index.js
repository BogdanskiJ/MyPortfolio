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

import { PortfolioModal } from "./modal";
import { ProjectBox } from "./projectBox";

export const MyPortfolio = () => {
	const [isClicked, setIsClicked] = useState("initial");
	const [modalImg, setModalImg] = useState(alekubek);
	const [modalLink, setModalLink] = useState("https://www.alekubek.pl/");
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
		} else {
			document.body.style.overflow = "unset";
			document.body.style.marginRight = "0";
		}
	}, [isClicked]);

	return (
		<StyledPortfolioSection id="myPortfolio">
			<StyledPortfolioTextBox>
				<StyledH2>My Portfolio</StyledH2>
				<StyledP>
					I am a passionate Front-end Developer. I'm always looking for
					opportunities to learn more. I am involved in open-source projects. My
					experience includes creating responsive e-commerce websites, web
					applications and all types of websites. If you have any problem with
					your website, please email me and I will try to help.
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
				/>
				<ProjectBox
					mainGif={moviesbrowserGif}
					url={"https://bogdanskij.github.io/movies-browser/#/popular-movies"}
					name={"Movie Browser"}
					backgroundImg={moviesbrowserSmall}
					typeName={"GHPages"}
					listImage={moviesbrowser}
					setData={setData}
				/>
				<ProjectBox
					mainGif={alekubekGif}
					url={"https://github.com/BogdanskiJ"}
					name={"All GitHub Projects"}
					backgroundImg={githubSmall}
					typeName={"GH Projects"}
					listImage={github}
					setData={setData}
				/>
			</StyledPortfolioProjectsBox>
			<PortfolioModal
				clicked={isClicked}
				modalImgSrc={modalImg}
				setData={setData}
				modalLink={modalLink}
				modalName={modalName}
				backgroundModalImg={githubSmall}
			/>
		</StyledPortfolioSection>
	);
};
