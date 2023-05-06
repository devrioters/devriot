import styled from "styled-components";
import NavItem from "./NavItem";
import icon1 from "../../../../assets/Header/group.svg";
import icon2 from "../../../../assets/Header/video.svg";
import icon3 from "../../../../assets/Header/email.svg";
import icon4 from "../../../../assets/Header/school.svg";
import icon5 from "../../../../assets/Header/work.svg";
import Button from "./../../Button";

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 80%;

	margin:0 20px 0 0;
	cursor:pointer;
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

export default function NavBar() {
	return (
		<Container>
			{navItems.map((i, key) => (
				<NavItem text={i.text} img={i.icon} key={key} />
			))}
			<Button className="header">LOGIN</Button>
		</Container>
	);
}
