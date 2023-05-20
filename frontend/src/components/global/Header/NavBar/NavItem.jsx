import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
	display: flex;
	align-items:center;
	padding: .3rem;

	will-change: background-color;
	transition:all .4s;
	border-radius:5px;
	
	:hover{
		background-color:#ffffff2c;
	}
`;

const Icon = styled.img`
	max-height: 1.8rem;
`;

const Text = styled.span`
	font: var(--font-header);
	margin-left: 1.2rem;
`;

export default function NavItem(props) {
	return (
		<Container>
			<Icon src={props.img} />
			<Text>{props.text}</Text>
		</Container>
	);
}

NavItem.propTypes = {
	img: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};
