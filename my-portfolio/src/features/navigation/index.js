import { StyledNav, StyledNavBox, StyledNavLi, StyledNavUl } from "./styled";

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

export const Navigation = () => {
	return (
		<StyledNavBox>
			<StyledNav>
				<StyledNavUl>
					<StyledNavLi href="#about" onClick={handleScroll}>
						About
					</StyledNavLi>
					<StyledNavLi href="#myPortfolio" onClick={handleScroll}>
						My Portfolio
					</StyledNavLi>
					<StyledNavLi href="#skills" onClick={handleScroll}>
						Skills
					</StyledNavLi>
					<StyledNavLi href="#education" onClick={handleScroll}>
						Education
					</StyledNavLi>
					<StyledNavLi href="#contact" onClick={handleScroll}>
						Contact
					</StyledNavLi>
				</StyledNavUl>
			</StyledNav>
		</StyledNavBox>
	);
};
