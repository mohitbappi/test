import { useLocation } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
	const location = useLocation();
	const [accessToken, setAccessToken] = useState("");
	const [refreshToken, setRefreshToken] = useState("");

	useEffect(() => {
		if (location.pathname.includes("/dashboard")) {
			const path = location.pathname?.split("?")?.[1];
			const accessToken = path?.split("&")?.[0];
			const refreshToken = path?.split("&")?.[1];

			setAccessToken(accessToken);
			setRefreshToken(refreshToken);
		}

		window.open(
			"https://spring-app.auth.ap-south-1.amazoncognito.com/oauth2/authorize?client_id=2r7cqks9bo59crtb9qm1mn3b99&response_type=code&scope=email%20openid%20profile&redirect_uri=https%3A%2F%2Fums-hxzqmgba6q-uc.a.run.app%2Foauth2%2Fcallback&client_secret=14sc5ram1jv85kfqdmua6urh719re5opd50j9pudf0rclpncfneo&identity_provider=personal-azure-ad",
			"_self"
		);
	}, []);

	return (
		<div className="App">
			{accessToken
				? `AccessToken: ${accessToken} and RefreshToken: ${refreshToken}`
				: "Welcome"}
		</div>
	);
}

export default App;
