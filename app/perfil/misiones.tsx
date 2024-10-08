import React from "react";
import { View, FlatList } from "react-native";
import MisionItem from "@/components/misionItem/MisionItem";

const Misiones = () => {
	const misiones = [
		{
			title: "Buen debút",
			description: "Obtener puntos por alentar por primera vez",
			points: 10,
			coins: 5,
		},
		{
			title: "Fiel seguidor",
			description: "Alentar en 5 partidos seguidos",
			points: 20,
			coins: 10,
		},
		{
			title: "Alentador profesional",
			description: "Alentar en 10 partidos seguidos",
			points: 30,
			coins: 15,
		},
		{
			title: "Alentador de oro",
			description: "Alentar en 15 partidos seguidos",
			points: 40,
			coins: 20,
		},
		{
			title: "Alentador de platino",
			description: "Alentar en 20 partidos seguidos",
			points: 50,
			coins: 25,
		}
	];

	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<FlatList
				data={misiones}
				renderItem={({ item }) => (
					<MisionItem
						title={item.title}
						description={item.description}
						points={item.points}
						coins={item.coins}
						achieved={false}
					/>
				)}
				keyExtractor={(item, index) => index.toString()}
			/>
		</View>
	);
};

export default Misiones;
