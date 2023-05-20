import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
	background-color: var(--color-green);
	font: var(--font-button-1);
	color: white;

	&.header {
		padding: var(--button-header-pdg);
		font: var(--font-button-header);
		background-color: var(--button-header-color);
	}

	&.banner {
		margin:20px 0;
		padding: var(--button-banner-pdg);
		font: var(--font-button-header);
		background-color: var(--button-banner-color);
	}

	&.card{
		padding: var(--button-card-pdg);
		font: var(--font-card-button);
		background-color: var(--button-card-color);
	}
`;

export default function Button(props) {
	return (
		<StyledButton className={props.className} onClick={props.onClick}>
			{props.children}
		</StyledButton>
	);
}

Button.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	children: PropTypes.node,
};
