import styled from "styled-components";
import NavBar from "./NavBar/NavBar";
import logo from "../../../assets/logo.png";

const Container = styled.div`
	background-color: var(--color-blue-1);
	padding: 3.5rem 0;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

export default function Header() {
	return (
		<Container>
			<Wrapper className="wrapper">
				<img src={logo} alt="Site logo" width={209} height={46} />
				<NavBar />
			</Wrapper>
		</Container>
	);
}
