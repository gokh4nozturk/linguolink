import React from "react";

export default function useMediaQuery(query: string) {
	const mediaQuery = window.matchMedia(query);
	const [isMatch, setIsMatch] = React.useState(mediaQuery.matches);

	React.useEffect(() => {
		const handler = () => setIsMatch(mediaQuery.matches);
		mediaQuery.addEventListener("change", handler);
		return () => mediaQuery.removeEventListener("change", handler);
	}, [mediaQuery]);

	return isMatch;
}