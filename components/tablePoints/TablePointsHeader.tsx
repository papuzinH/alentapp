import React from "react";
import { View, Text } from "react-native";

const TablePointsHeader = () => {
	return (
		<View style={{ flexDirection: "row", paddingHorizontal: 18, marginBottom: 10 }}>
			<Text style={{ color: "#2699FB", fontSize: 12, width: "60%" }}>
				Hincha
			</Text>
			<Text style={{ color: "#2699FB", fontSize: 12, width: "30%" }}>
				Puntos{" "}
			</Text>
			<Text style={{ color: "#2699FB", fontSize: 12, width: "10%" }}>Pos.</Text>
		</View>
	);
};

export default TablePointsHeader;
