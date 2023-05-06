import styled from "styled-components";
import NavBar from "./NavBar/NavBar";
import logo from "../../../assets/logo.png";

const Container = styled.div`
	background-color: var(--color-blue-1);
	padding: 2.25rem 0;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;

	img {
		width: 30%;
	}
`;

export default function Header() {
	return (
		<Container>
			<Wrapper className="wrapper">
				<div>
					<img src={logo} alt="Site logo" width={209} height={46} />
				</div>
				<NavBar />
			</Wrapper>
		</Container>
	);
}
