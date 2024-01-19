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
import Img1 from "./images/1.png";
import Webp1 from "./images/1.webp";
import Webp2 from "./images/2.webp";
import Webp3 from "./images/3.webp";
import Webp4 from "./images/4.webp";
import Webp5 from "./images/5.webp";
import Webp6 from "./images/6.webp";
import portfolioImg1 from "./images/alekubek.webp";
import portfolioImg2 from "./images/gusdatabase.webp";
import portfolioImg3 from "./images/moviebrowser.webp";

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
							<StyledNavBubbleImg src={Webp4} />
						</StyledNavSpanSmall>
						<StyledNavSpanMedium>
							<StyledNavBubbleImg src={Webp5} />
						</StyledNavSpanMedium>
						<StyledNavSpanBig>
							<StyledNavBubbleImg src={Webp6} />
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
							<StyledNavBubbleImg src={Img1} />
						</StyledNavSpanSmall>
						<StyledNavSpanMedium>
							<StyledNavBubbleImg src={Img1} />
						</StyledNavSpanMedium>
						<StyledNavSpanBig>
							<StyledNavBubbleImg src={Img1} />
						</StyledNavSpanBig>
					</StyledBubbleBox>
					<StyledNavLi>
						<StyledNavText href="#contact" onClick={handleScroll}>
							Contact
						</StyledNavText>
					</StyledNavLi>
					<StyledBubbleBox>
						<StyledNavSpanSmall>
							<StyledNavBubbleImg src={Img1} />
						</StyledNavSpanSmall>
						<StyledNavSpanMedium>
							<StyledNavBubbleImg src={Img1} />
						</StyledNavSpanMedium>
						<StyledNavSpanBig>
							<StyledNavBubbleImg src={Img1} />
						</StyledNavSpanBig>
					</StyledBubbleBox>
				</StyledNavUl>
			</StyledNav>
		</StyledNavBox>
	);
};
