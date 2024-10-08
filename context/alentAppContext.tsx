import React, { createContext, useState, useMemo, FC } from "react";

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
	nextMatchIn: number;
}

interface OtherUser {
	name: string;
	score: number;
}

interface Ranks {
    id: number;
    name: string;
    minPoints: number;
    maxPoints: number;
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
		nextMatchIn: 0,
	},
	setMatchData: () => {},
	otherUsers: [],
	setOtherUsers: () => {},
    ranks: [],
    setRanks: () => {},
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
		nextMatchIn: 3600, // Tiempo en segundos hasta el próximo partido
	});

	const [otherUsers, setOtherUsers] = useState([
		{ name: "Alice", score: 120 },
		{ name: "Bob", score: 90 },
	]);

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
            ranks,
            setRanks
		}),
		[user, misiones, matchData, otherUsers]
	);

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
