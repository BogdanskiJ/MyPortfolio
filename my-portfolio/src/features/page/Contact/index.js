import React from "react";
import { StyledH2, StyledP, StyledPageSection } from "../styled";
import {
	StyledContactIconBox,
	StyledContactSection,
	StyledContactTextBox,
	StyledIconAnchor,
	StyledIconBox,
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
					I am a passionate Front-end Developer. I'm always looking for
					opportunities to learn more. I am involved in open-source projects. My
					experience includes creating responsive e-commerce websites, web
					applications and all types of websites. If you have any problem with
					your website, please email me and I will try to help.
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
				</StyledIconBox>
				<StyledIconBox>
					<StyledIconAnchor
						href="https://www.linkedin.com/in/jakub-bogdanski-51b64027b/"
						rel="noopener noreferrer"
						target="_blank">
						<LinkedInIcon />
					</StyledIconAnchor>
				</StyledIconBox>
				<StyledIconBox>
					<StyledIconAnchor
						href="mailto:bogdanskikuba@gmail.com"
						rel="noopener noreferrer"
						target="_blank">
						<MailIcon />
					</StyledIconAnchor>
				</StyledIconBox>
				<StyledIconBox>
					<StyledIconAnchor
						href="tel:+48881646426"
						rel="noopener noreferrer"
						target="_blank">
						<PhoneIcon />
					</StyledIconAnchor>
				</StyledIconBox>
			</StyledContactIconBox>
		</StyledContactSection>
	);
};
