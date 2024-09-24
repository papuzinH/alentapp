import React from "react";
import { View, Text } from "react-native";

import PositionBarContainer from "@/components/positionBar/PositionBarContainer";

const Perfil = () => {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
				<PositionBarContainer />
			</Text>
		</View>
	);
};

export default Perfil;