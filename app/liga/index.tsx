import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import TablePointsCointainer from "@/components/tablePoints/TablePointsCointainer";
import PodiumContainer from "@/components/podium/PodiumContainer";

const Liga = () => {
	const [users, setUsers] = useState([
		{
			"name": "Lucas Pérez",
			"points": 120,
			"position": 1,
			"active": false
		},
		{
			"name": "María Rodríguez",
			"points": 110,
			"position": 2,
			"active": false
		},
		{
			"name": "Joaquín Gómez",
			"points": 105,
			"position": 3,
			"active": false
		},
		{
			"name": "Sofía Sánchez",
			"points": 95,
			"position": 4,
			"active": false
		},
		{
			"name": "Martín Fernández",
			"points": 85,
			"position": 5,
			"active": false
		},
		{
			"name": "Pepe Argento",
			"points": 75,
			"position": 6,
			"active": true
		},
		{
			"name": "Matías Ramírez",
			"points": 65,
			"position": 7,
			"active": false
		},
		{
			"name": "Julieta Torres",
			"points": 55,
			"position": 8,
			"active": false
		},
		{
			"name": "Alejandro Álvarez",
			"points": 45,
			"position": 9,
			"active": false
		},
		{
			"name": "Valentina Díaz",
			"points": 35,
			"position": 10,
			"active": false
		}
	]
	);

	const [topThreeUsers, setTopThreeUsers] = useState<{ name: string; points: number; position: number; }[]>([]);
	
	useEffect(() => {
		const usersCopy = [...users];
		const topThree = usersCopy.splice(0, 3);
		setTopThreeUsers(topThree);
		setUsers(usersCopy);
	}, []);

	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#FFF"}}>
			<PodiumContainer podium={topThreeUsers} />
			<TablePointsCointainer users={users} />
		</View>
	);
};

export default Liga;
