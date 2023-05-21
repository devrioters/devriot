import { GlobalStyles } from "./styles/GlobalStyles";
import Header from "./components/global/Header/Header";
import Home from "./components/global/Home/Home";

function App() {
	return (
		<>
			<GlobalStyles />
			<Header />
			<Home/>
		</>
	);
}

export default App;
