import { GlobalStyles } from "./styles/GlobalStyles";
import Header from "./components/global/Header/Header";
import Home from "./components/global/Home/Home";
import Banner from "./components/global/Banner/Banner";

function App() {
	return (
		<>
			<GlobalStyles />
			<Header />
			<Home />
			<Banner />
		</>
	);
}

export default App;
