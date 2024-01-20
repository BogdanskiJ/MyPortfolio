import React from "react";
import { StyledH2, StyledP, StyledPageSection } from "../styled";
import {
	StyledContactIconBox,
	StyledContactSection,
	StyledContactTextBox,
	StyledHoverAnchor,
	StyledIconAnchor,
	StyledIconBox,
	StyledIconHoverBox,
	StyledIconImg,
} from "./styled";
import { GitHubIcon } from "./socialMediaIcons/github";
import { LinkedInIcon } from "./socialMediaIcons/linkedin.js";
import { MailIcon } from "./socialMediaIcons/mail.js";
import { PhoneIcon } from "./socialMediaIcons/phone.js";

export const Contact = () => {
	return (
		<StyledContactSection id="contact">
			<StyledContactTextBox>
				<StyledH2>Contact</StyledH2>
				<StyledP>
					I am open to job offers and would love to get to know your company. Id
					you need help with your website, please contact me.
				</StyledP>
			</StyledContactTextBox>
			<StyledContactIconBox>
				<StyledIconBox>
					<StyledIconAnchor
						href="https://github.com/BogdanskiJ"
						rel="noopener noreferrer"
						target="_blank">
						<GitHubIcon />
					</StyledIconAnchor>
					<StyledIconHoverBox>
						<StyledHoverAnchor
							href="https://github.com/BogdanskiJ"
							rel="noopener noreferrer"
							target="_blank">
							GitHub - BogdanskiJ
						</StyledHoverAnchor>
					</StyledIconHoverBox>
				</StyledIconBox>
				<StyledIconBox>
					<StyledIconAnchor
						href="https://www.linkedin.com/in/jakub-bogdanski-51b64027b/"
						rel="noopener noreferrer"
						target="_blank">
						<LinkedInIcon />
					</StyledIconAnchor>
					<StyledIconHoverBox>
						<StyledHoverAnchor
							href="https://www.linkedin.com/in/jakub-bogdanski-51b64027b/"
							rel="noopener noreferrer"
							target="_blank">
							LinkedIn - Jakub Bogdański
						</StyledHoverAnchor>
					</StyledIconHoverBox>
				</StyledIconBox>
				<StyledIconBox>
					<StyledIconAnchor
						href="mailto:bogdanskikuba@gmail.com"
						rel="noopener noreferrer"
						target="_blank">
						<MailIcon />
					</StyledIconAnchor>
					<StyledIconHoverBox>
						<StyledHoverAnchor
							href="mailto:bogdanskikuba@gmail.com"
							rel="noopener noreferrer"
							target="_blank">
							bogdanskikuba@gmail.com
						</StyledHoverAnchor>
					</StyledIconHoverBox>
				</StyledIconBox>
				<StyledIconBox>
					<StyledIconAnchor
						href="tel:+48881646426"
						rel="noopener noreferrer"
						target="_blank">
						<PhoneIcon />
					</StyledIconAnchor>
					<StyledIconHoverBox>
						<StyledHoverAnchor
							href="tel:+48881646426"
							rel="noopener noreferrer"
							target="_blank">
							881 646 426
						</StyledHoverAnchor>
					</StyledIconHoverBox>
				</StyledIconBox>
			</StyledContactIconBox>
		</StyledContactSection>
	);
};
