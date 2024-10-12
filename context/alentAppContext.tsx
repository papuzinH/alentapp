import React, { createContext, useState, useMemo, FC, useEffect } from "react";

interface AppProviderProps {
	children: React.ReactNode;
}

interface User {
	username: string;
	points: number;
	coins: number;
	rank: string;
	position: number;
	misionesCompletadas: number[];
}

interface Mision {
	id: number;
	title: string;
	description: string;
	points: number;
	coins: number;
}

interface MatchData {
	dateHourMatch: string | number | Date;
	nameMatch: string;
	nextMatchInSeconds: number;
	matchDate: string;
	matchLocation: {
		latitude: number;
		longitude: number;
	};
}

interface OtherUser {
	name: string;
	points: number;
	position: number;
	active: boolean;
}

interface Ranks {
	id: number;
	name: string;
	minPoints: number;
	maxPoints: number;
}

interface TopThreeUsers {
	name: string;
	points: number;
	position: number;
}

interface AppContextProps {
	user: User;
	setUser: React.Dispatch<React.SetStateAction<User>>;
	misiones: Mision[];
	setMisiones: React.Dispatch<React.SetStateAction<Mision[]>>;
	matchData: MatchData;
	setMatchData: React.Dispatch<React.SetStateAction<MatchData>>;
	otherUsers: OtherUser[];
	setOtherUsers: React.Dispatch<React.SetStateAction<OtherUser[]>>;
	ranks: Ranks[];
	setRanks: React.Dispatch<React.SetStateAction<Ranks[]>>;
	topThreeUsers: TopThreeUsers[];
	setTopThreeUsers: React.Dispatch<React.SetStateAction<TopThreeUsers[]>>;
	validLocation: boolean;
	setValidLocation: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextProps>({
	user: {
		username: "",
		points: 0,
		coins: 0,
		rank: "",
		position: 0,
		misionesCompletadas: [],
	},
	setUser: () => {},
	misiones: [],
	setMisiones: () => {},
	matchData: {
		nameMatch: "",
		nextMatchInSeconds: 0,
		matchDate: "",
		dateHourMatch: "",
		matchLocation: {
			latitude: 0,
			longitude: 0,
		},
	},
	setMatchData: () => {},
	otherUsers: [
		{
			name: "",
			points: 0,
			position: 0,
			active: false,
		},
	],
	setOtherUsers: () => {},
	ranks: [],
	setRanks: () => {},
	topThreeUsers: [],
	setTopThreeUsers: () => {},
	validLocation: false,
	setValidLocation: () => {},
});

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
	const [user, setUser] = useState({
		username: "PepeArgento",
		points: 58,
		coins: 50,
		rank: "Hincha",
		position: 97,
		misionesCompletadas: [1, 2],
	});

	const [misiones, setMisiones] = useState([
		{
			id: 1,
			title: "Buen debút",
			description: "Obtener puntos por alentar por primera vez",
			points: 10,
			coins: 5,
		},
		{
			id: 2,
			title: "Fiel seguidor",
			description: "Alentar en 5 partidos seguidos",
			points: 20,
			coins: 10,
		},
		{
			id: 3,
			title: "Alentador profesional",
			description: "Alentar en 10 partidos seguidos",
			points: 30,
			coins: 15,
		},
		{
			id: 4,
			title: "Alentador de oro",
			description: "Alentar en 15 partidos seguidos",
			points: 40,
			coins: 20,
		},
		{
			id: 5,
			title: "Alentador de platino",
			description: "Alentar en 20 partidos seguidos",
			points: 50,
			coins: 25,
		},
	]);

	const [ranks, setRanks] = useState([
		{
			id: 1,
			name: "Antifútbol",
			minPoints: 0,
			maxPoints: 50,
		},
		{
			id: 2,
			name: "Hincha",
			minPoints: 51,
			maxPoints: 100,
		},
		{
			id: 3,
			name: "Fanático",
			minPoints: 101,
			maxPoints: 150,
		},
		{
			id: 4,
			name: "Apasionado",
			minPoints: 151,
			maxPoints: 200,
		},
		{
			id: 5,
			name: "Ultra",
			minPoints: 201,
			maxPoints: 250,
		},
	]);

	const [matchData, setMatchData] = useState({
		nameMatch: "River vs Boca",
		dateHourMatch: "2024-10-12T14:52:00",
		nextMatchInSeconds: 10000,
		matchLocation: {
			latitude: -34.60696684910933,
			longitude: -58.45704009925397,
		},
	});

	const [otherUsers, setOtherUsers] = useState([
		{
			name: "Lucas Pérez",
			points: 120,
			position: 1,
			active: false,
		},
		{
			name: "María Rodríguez",
			points: 110,
			position: 2,
			active: false,
		},
		{
			name: "Joaquín Gómez",
			points: 105,
			position: 3,
			active: false,
		},
		{
			name: "Sofía Sánchez",
			points: 95,
			position: 4,
			active: false,
		},
		{
			name: "Martín Fernández",
			points: 85,
			position: 5,
			active: false,
		},
		{
			name: "Pepe Argento",
			points: 75,
			position: 6,
			active: true,
		},
		{
			name: "Matías Ramírez",
			points: 65,
			position: 7,
			active: false,
		},
		{
			name: "Julieta Torres",
			points: 55,
			position: 8,
			active: false,
		},
		{
			name: "Alejandro Álvarez",
			points: 45,
			position: 9,
			active: false,
		},
		{
			name: "Valentina Díaz",
			points: 35,
			position: 10,
			active: false,
		},
	]);

	const [topThreeUsers, setTopThreeUsers] = useState<
		{ name: string; points: number; position: number }[]
	>([]);

	const [validLocation, setValidLocation] = useState(false);

	useEffect(() => {
		const topThree = otherUsers.splice(0, 3);
		setTopThreeUsers(topThree);
	}, [otherUsers]);

	// Memorizar los valores para evitar re-renderizados innecesarios
	const value = useMemo(
		() => ({
			user,
			setUser,
			misiones,
			setMisiones,
			matchData,
			setMatchData,
			otherUsers,
			setOtherUsers,
			topThreeUsers,
			setTopThreeUsers,
			ranks,
			setRanks,
			validLocation,
			setValidLocation
		}),
		[user, misiones, matchData, otherUsers, topThreeUsers, ranks]
	);

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
