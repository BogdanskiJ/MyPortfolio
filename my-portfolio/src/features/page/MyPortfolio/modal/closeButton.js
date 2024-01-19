import React from "react";

export const CloseButton = ({ color }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="40"
			height="40"
			fillRule="evenodd"
			clipRule="evenodd"
			imageRendering="optimizeQuality"
			shapeRendering="geometricPrecision"
			textRendering="geometricPrecision"
			version="1.1"
			viewBox="0 0 40 40"
			xmlSpace="preserve">
			<g transform="translate(-700 -280)">
				<path
					fill={color}
					strokeWidth="0.089"
					d="M738.393 281.607c-2.143-2.143-5.714-2.143-7.857 0L720 292.143l-10.536-10.536c-2.143-2.143-5.714-2.143-7.857 0s-2.143 5.714 0 7.857L712.143 300l-10.536 10.536c-2.143 2.143-2.143 5.714 0 7.857a5.54 5.54 0 003.929 1.607 5.54 5.54 0 003.928-1.607L720 307.857l10.536 10.536a5.54 5.54 0 003.928 1.607 5.54 5.54 0 003.929-1.607c2.143-2.143 2.143-5.714 0-7.857L727.857 300l10.536-10.536c2.143-2.143 2.143-5.714 0-7.857z"
					className="fil1"></path>
			</g>
		</svg>
	);
};
