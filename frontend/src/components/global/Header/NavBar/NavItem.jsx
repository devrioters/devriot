import styled from "styled-components";

const Container = styled.div`
	display: flex;
`;

const Icon = styled.img`
	max-height: 2.5rem;
`;

const Text = styled.span`
	font: var(--font-header);
	margin-left: 1.4rem;
`;

export default function NavItem(props) {
	return (
		<Container>
			<Icon src={props.img} />
			<Text>{props.text}</Text>
		</Container>
	);
}
