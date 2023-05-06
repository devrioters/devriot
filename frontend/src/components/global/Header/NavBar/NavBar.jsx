import styled from "styled-components";
import NavItem from "./NavItem";
import icon1 from "../../../../assets/Header/group.svg";
import icon2 from "../../../../assets/Header/video.svg";
import icon3 from "../../../../assets/Header/email.svg";
import icon4 from "../../../../assets/Header/school.svg";
import icon5 from "../../../../assets/Header/work.svg";
import Button from "./../../Button";

const Container = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 80%;

	margin: 0 20px 0 0;
	cursor: pointer;
`;

const SplitDiv = styled.div`
	width: 1px;
	height: 1px;
	padding: 2rem 0;
	background-color: white;
`;

const navItems = [
	{
		text: "Fórum",
		icon: icon1,
	},
	{
		text: "Participe",
		icon: icon2,
	},
	{
		text: "Notícias",
		icon: icon3,
	},
	{
		text: "Codar",
		icon: icon4,
	},
	{
		text: "Vagas",
		icon: icon5,
	},
];

const handleClick = () => {};

export default function NavBar() {
	return (
		<Container>
			{navItems.map((i, key) => (
				<NavItem text={i.text} img={i.icon} key={key} />
			))}
			<SplitDiv />
			<Button className="header" onClick={handleClick}>
				LOGIN
			</Button>
		</Container>
	);
}
