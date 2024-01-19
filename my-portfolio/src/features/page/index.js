import React, { forwardRef } from "react";
import { StyledDiv } from "./styled";
import { MyPortfolio } from "./MyPortfolio";
import { Skills } from "./Skills";
import { Contact } from "./Contact";
import { About } from "./About";
import { Name } from "./Name";

export const Page = forwardRef((props, ref) => {
	return (
		<StyledDiv ref={ref}>
			<Name />
			<About />
			<MyPortfolio />
			<Skills />
			<Contact />
		</StyledDiv>
	);
});
