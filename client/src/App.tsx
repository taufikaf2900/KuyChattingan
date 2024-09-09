import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignInPage from "./pages/auth/sign-in";
import SignUpPage from "./pages/auth/sign-up";
import ProfilePage from "./pages/profile";
import ChatPage from "./pages/chat";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to={"/auth/sign-in"} />} />
				<Route
					path="/auth"
					element={<Navigate to={"/auth/sign-in"} />}
				/>
				<Route path="/auth/sign-in" element={<SignInPage />} />
				<Route path="/auth/sign-up" element={<SignUpPage />} />
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="/chat" element={<ChatPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
