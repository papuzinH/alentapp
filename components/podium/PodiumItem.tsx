import React, { FC } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface PodiumItemProps {
	podiumItem: {
		name: string;
		points: number;
		position: number;
	};
}

const PodiumItem: FC<PodiumItemProps> = ({ podiumItem }) => {
	return (
		<View
			style={{
				justifyContent: "center",
				alignItems: "center",
				gap: 10,
				paddingTop: 20,
			}}>
			<View
				style={{
					backgroundColor: "#BCE0FD",
					justifyContent: "center",
					alignItems: "center",
					borderRadius: 50,
					width: 74,
					height: 74,
				}}>
				<Icon name="person" size={30} color="#2699FB" />
			</View>
			<View style={{ justifyContent: "center", alignItems: "center" }}>
				<Text style={{ fontSize: 12, color: "#2699FB" }}>
					{podiumItem.points} pts
				</Text>
				<Text style={{ fontSize: 12, color: "#2699FB", fontWeight: "bold" }}>
					{podiumItem.name}
				</Text>
			</View>
		</View>
	);
};

export default PodiumItem;
