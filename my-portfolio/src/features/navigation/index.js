import {
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
// import Img1 from "./images/2.png";
// import Img1 from "./images/3.png";

export const Navigation = () => {
	const handleScroll = (e) => {
		e.preventDefault();
		const target = e.target.getAttribute("href");
		const location = document.querySelector(target).offsetTop;

		window.scrollTo({
			left: 0,
			top: location,
			behavior: "smooth",
		});
	};
	return (
		<StyledNavBox>
			<StyledNav>
				<StyledNavUl>
					<StyledNavLi>
						<StyledNavText href="#about" onClick={handleScroll}>
							About
						</StyledNavText>
						<StyledNavSpanSmall>
							<StyledNavBubbleImg src={Img1} />
						</StyledNavSpanSmall>
						<StyledNavSpanMedium>
							<StyledNavBubbleImg src={Img1} />
						</StyledNavSpanMedium>
						<StyledNavSpanBig>
							<StyledNavBubbleImg src={Img1} />
						</StyledNavSpanBig>
					</StyledNavLi>
					<StyledNavLi>
						<StyledNavText href="#myPortfolio" onClick={handleScroll}>
							My Portfolio
						</StyledNavText>
						<StyledNavSpanSmall>
							<StyledNavBubbleImg src={Img1} />
						</StyledNavSpanSmall>
						<StyledNavSpanMedium>
							<StyledNavBubbleImg src={Img1} />
						</StyledNavSpanMedium>
						<StyledNavSpanBig>
							<StyledNavBubbleImg src={Img1} />
						</StyledNavSpanBig>
					</StyledNavLi>
					<StyledNavLi>
						<StyledNavText href="#skills" onClick={handleScroll}>
							Skills
						</StyledNavText>
						<StyledNavSpanSmall>
							<StyledNavBubbleImg src={Img1} />
						</StyledNavSpanSmall>
						<StyledNavSpanMedium>
							<StyledNavBubbleImg src={Img1} />
						</StyledNavSpanMedium>
						<StyledNavSpanBig>
							<StyledNavBubbleImg src={Img1} />
						</StyledNavSpanBig>
					</StyledNavLi>
					<StyledNavLi>
						<StyledNavText href="#education" onClick={handleScroll}>
							Education
						</StyledNavText>
						<StyledNavSpanSmall>
							<StyledNavBubbleImg src={Img1} />
						</StyledNavSpanSmall>
						<StyledNavSpanMedium>
							<StyledNavBubbleImg src={Img1} />
						</StyledNavSpanMedium>
						<StyledNavSpanBig>
							<StyledNavBubbleImg src={Img1} />
						</StyledNavSpanBig>
					</StyledNavLi>
					<StyledNavLi>
						<styledNavText href="#contact" onClick={handleScroll}>
							Contact
						</styledNavText>
						<StyledNavSpanSmall>
							<StyledNavBubbleImg src={Img1} />
						</StyledNavSpanSmall>
						<StyledNavSpanMedium>
							<StyledNavBubbleImg src={Img1} />
						</StyledNavSpanMedium>
						<StyledNavSpanBig>
							<StyledNavBubbleImg src={Img1} />
						</StyledNavSpanBig>
					</StyledNavLi>
				</StyledNavUl>
			</StyledNav>
		</StyledNavBox>
	);
};
