import styled from "styled-components";
import NavBar from "./NavBar/NavBar";
import logo from "../../../assets/logo.png";

const Container = styled.header`
	background-color: var(--color-blue-1);
	padding: 2.25rem 5rem;
	
	border-bottom:0.15rem solid rgba(87, 87, 87, 0.10);
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;

	> div {
		display: flex;
		align-items: center;
	}

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
