import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/generalStyles";

import PositionBarContainer from "@/components/positionBar/PositionBarContainer";
import ProgressBarContainer from "@/components/progressBar/ProgressBarContainer";

const Perfil = () => {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text style={styles.heading_primary}>Pepe Argento</Text>
			<Text style={styles.heading_subtitle}>Antifútbol</Text>
			<PositionBarContainer />
			<ProgressBarContainer />
		</View>
	);
};

export default Perfil;
