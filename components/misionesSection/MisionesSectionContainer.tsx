import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "@/app/styles/generalStyles";

import MisionesIcon from "./MisionesIcon";
import MisionesVerTodos from "./MisionesVerTodos";

const MisionesSectionContainer = () => {
	return (
		<>
			<View
				style={{
					flexDirection: "row",
					width: "100%",
					paddingVertical: 10,
					borderBottomWidth: 4,
					borderBottomColor: "#BCE0FD",
					marginBottom: 10,
				}}>
				<Text style={[{ textAlign: "left" }, styles.heading_title]}>
					Misiones
				</Text>
			</View>
			<View style={{ width: "100%", flexDirection: "row", gap: 10, alignItems: "center"}}>
				<MisionesIcon achieved={true} />
                <MisionesIcon />
                <MisionesIcon />
                <MisionesIcon />
                <MisionesVerTodos />
			</View>
		</>
	);
};

export default MisionesSectionContainer;
