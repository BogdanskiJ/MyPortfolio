import {
	StyledBubbleBox,
	StyledNav,
	StyledNavBox,
	StyledNavBubbleImg,
	StyledNavLi,
	StyledNavSpanBig,
	StyledNavSpanMedium,
	StyledNavSpanSmall,
	StyledNavText,
	StyledNavUl,
} from "./styled";

import portfolioImg1 from "./images/alekubek.webp";
import portfolioImg2 from "./images/gusdatabase.webp";
import portfolioImg3 from "./images/moviebrowser.webp";
import contactImg1 from "./images/phone.webp";
import contactImg2 from "./images/github.webp";
import contactImg3 from "./images/linkedin.webp";
import skills1 from "./images/react.webp";
import skills2 from "./images/redux.webp";
import skills3 from "./images/js.webp";
import about1 from "./images/about2.webp";
import about2 from "./images/about1.webp";
import about3 from "./images/6.webp";

export const Navigation = ({ pageRef }) => {
	const handleScroll = (e) => {
		e.preventDefault();
		const target = e.target.getAttribute("href");
		const location = document.querySelector(target).offsetTop;

		if (pageRef.current) {
			pageRef.current.scrollTo({
				left: 0,
				top: location,
				behavior: "smooth",
			});
		}
	};
	return (
		<StyledNavBox>
			<StyledNav>
				<StyledNavUl>
					<StyledNavLi>
						<StyledNavText href="#about" onClick={handleScroll}>
							About
						</StyledNavText>
					</StyledNavLi>
					<StyledBubbleBox>
						<StyledNavSpanSmall>
							<StyledNavBubbleImg src={about1} />
						</StyledNavSpanSmall>
						<StyledNavSpanMedium>
							<StyledNavBubbleImg src={about2} />
						</StyledNavSpanMedium>
						<StyledNavSpanBig>
							<StyledNavBubbleImg src={about3} />
						</StyledNavSpanBig>
					</StyledBubbleBox>
					<StyledNavLi>
						<StyledNavText href="#myPortfolio" onClick={handleScroll}>
							My Portfolio
						</StyledNavText>
					</StyledNavLi>
					<StyledBubbleBox>
						<StyledNavSpanSmall>
							<StyledNavBubbleImg src={portfolioImg1} />
						</StyledNavSpanSmall>
						<StyledNavSpanMedium>
							<StyledNavBubbleImg src={portfolioImg2} />
						</StyledNavSpanMedium>
						<StyledNavSpanBig>
							<StyledNavBubbleImg src={portfolioImg3} />
						</StyledNavSpanBig>
					</StyledBubbleBox>
					<StyledNavLi>
						<StyledNavText href="#skills" onClick={handleScroll}>
							Skills
						</StyledNavText>
					</StyledNavLi>
					<StyledBubbleBox>
						<StyledNavSpanSmall>
							<StyledNavBubbleImg src={skills2} />
						</StyledNavSpanSmall>
						<StyledNavSpanMedium>
							<StyledNavBubbleImg src={skills3} />
						</StyledNavSpanMedium>
						<StyledNavSpanBig>
							<StyledNavBubbleImg src={skills1} />
						</StyledNavSpanBig>
					</StyledBubbleBox>
					<StyledNavLi>
						<StyledNavText href="#contact" onClick={handleScroll}>
							Contact
						</StyledNavText>
					</StyledNavLi>
					<StyledBubbleBox>
						<StyledNavSpanSmall>
							<StyledNavBubbleImg src={contactImg1} />
						</StyledNavSpanSmall>
						<StyledNavSpanMedium>
							<StyledNavBubbleImg src={contactImg3} />
						</StyledNavSpanMedium>
						<StyledNavSpanBig>
							<StyledNavBubbleImg src={contactImg2} />
						</StyledNavSpanBig>
					</StyledBubbleBox>
				</StyledNavUl>
			</StyledNav>
		</StyledNavBox>
	);
};
