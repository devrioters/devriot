import styled from "styled-components";
import NavItem from "./NavItem";
import icon1 from "../../../../assets/Header/group.svg";
import icon2 from "../../../../assets/Header/video.svg";
import icon3 from "../../../../assets/Header/email.svg";
import icon4 from "../../../../assets/Header/school.svg";
import icon5 from "../../../../assets/Header/work.svg";

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
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
		</Container>
	);
}
