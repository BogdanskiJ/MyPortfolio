import React from "react";
import { StyledDiv } from "./styled";
import { MyPortfolio } from "./MyPortfolio";
import { Skills } from "./Skills";
import { Eductaion } from "./Education";
import { Contact } from "./Contact";
import { About } from "./About";
import { Name } from "./Name";

export const Page = () => {
	return (
		<StyledDiv>
			<Name />
			<About />
			<MyPortfolio />
			<Skills />
			<Eductaion />
			<Contact />
		</StyledDiv>
	);
};
