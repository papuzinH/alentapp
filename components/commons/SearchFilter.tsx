import React, { FC } from "react";
import { View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface SearchFilterProps {
    handleSearch: (text: string) => void;
}

const SearchFilter:FC<SearchFilterProps> = ({handleSearch}) => {
 
	return (
		<View style={{ width: "100%", position: "relative", marginBottom: 20 }}>
			<Icon
				name="search"
				size={20}
				color="#2699FB"
				style={{
					position: "absolute",
					left: 12,
					zIndex: 1,
					top: "50%",
					transform: [{ translateY: -10 }],
				}}
			/>
			<TextInput
				placeholder="Buscar hincha"
				onChangeText={handleSearch}
				style={{
					width: "100%",
					backgroundColor: "#FFF",
					borderRadius: 50,
					paddingHorizontal: 10,
					paddingLeft: 40,
					paddingVertical: 18,
					borderWidth: 2,
					borderColor: "#BCE0FD",
					fontSize: 12,
				}}
			/>
		</View>
	);
};

export default SearchFilter;
