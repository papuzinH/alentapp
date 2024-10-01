import React, { FC, useState, useEffect } from "react";
import { View, FlatList, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import TablePointsHeader from "@/components/tablePoints/TablePointsHeader";
import TablePointsItem from "./TablePointsItem";
import SearchFilter from "../commons/SearchFilter";

interface TablePointsCointainerProps {
	users: {
		name: string;
		points: number;
		position: number;
		active: boolean;
	}[];
}

const TablePointsCointainer: FC<TablePointsCointainerProps> = ({ users }) => {
	const [query, setQuery] = useState("");
	const [filteredUsers, setFilteredUsers] = useState(users);

	const handleSearch = (text: string) => {
		setQuery(text);
	};

	useEffect(() => {
		// ignorar mayúsculas, minúsculas, signos de puntuación y tildes
		const normalizedQuery = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
		const filtered = users.filter((user) =>
			user.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(normalizedQuery)
		);
		setFilteredUsers(filtered);
	}, [query]);

	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				width: "100%",
			}}>
			
			<SearchFilter handleSearch={handleSearch} />
			<TablePointsHeader />
			<FlatList
				data={filteredUsers}
				renderItem={({ item, index }) => (
					<TablePointsItem
						key={index}
						lastItem={index === users.length - 1}
						name={item.name}
						points={item.points}
						position={item.position}
						active={item.active}
					/>
				)}
				keyExtractor={(item, index) => index.toString()}
			/>
		</View>
	);
};

export default TablePointsCointainer;
