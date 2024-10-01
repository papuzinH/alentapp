import React, { FC } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import PodiumItem from "./PodiumItem";

interface PodiumContainerProps {
	podium: {
		name: string;
		points: number;
		position: number;
	}[];
}

const PodiumContainer: FC<PodiumContainerProps> = ({ podium }) => {
	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "flex-start",
				width: "100%",
				paddingHorizontal: 40,
				marginBottom: 25,
			}}>
			{podium.map((user, index) => (
				<PodiumItem key={index} podiumItem={user} />
			))}
		</View>
	);
};

export default PodiumContainer;
