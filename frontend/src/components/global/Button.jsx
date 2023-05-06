import styled from "styled-components";

const StyledButton = styled.button`
	background-color: var(--color-green);
	font: var(--font-button-1);
	color: white;

	&.header {
		padding: var(--button-header-pdg);
		font: var(--font-button-header);
		background-color: var(--button-header-color);
	}
`;

export default function Button(props) {
	return (
		<StyledButton className={props.className}>
			{props.children}
		</StyledButton>
	);
}
