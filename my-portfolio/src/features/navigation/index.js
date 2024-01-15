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
						<StyledNavText href="#myPortfolio" onClick={handleScroll}>
							My Portfolio
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
						<StyledNavText href="#education" onClick={handleScroll}>
							Education
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
