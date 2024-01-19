import { StyledSvgMail } from "./styled";

export const MailIcon = () => {
	return (
		<StyledSvgMail viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
			<title>bogdanskikuba@gmail.com</title>
			<defs>
				<linearGradient id="myGradient">
					<stop offset="0%" stopColor="rgb(66,132,243)" />
					<stop offset="50%" stopColor="rgb(234,67,53)" />
					<stop offset="100%" stopColor="rgb(52,168,82)" />
				</linearGradient>
			</defs>
			<g>
				<circle
					className="social-group__outline"
					strokeWidth="20"
					cx="300"
					cy="300"
					r="262.5"
					id="circle4"
				/>
				<circle
					className="social-group__inner-circle"
					fill="#2d76b0"
					cx="300"
					cy="300"
					r="252.5"
					id="circle6"
				/>
				<path
					d="M 145.96797,394.62267 250.76456,289.56251 145.96797,204.11218 Z m 116.34108,-95.67696 -108.0649,108.32846 h 290.56283 l -103.2152,-108.32846 -34.05362,29.04573 v 0 c -2.75892,2.26067 -6.7297,2.26067 -9.48863,0 l -35.74049,-29.15116 z m 90.56365,-9.59406 101.15933,106.11446 V 203.16331 Z M 155.35116,192.72583 302.42484,312.70421 443.43641,192.72583 Z"
					id="path4-3-3"
					strokeWidth="5.27146"
					fill="url(#myGradient)"
				/>
			</g>
		</StyledSvgMail>
	);
};
