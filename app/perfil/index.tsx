import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/generalStyles";

import PositionBarContainer from "@/components/positionBar/PositionBarContainer";
import ProgressBarContainer from "@/components/progressBar/ProgressBarContainer";
import ButtonPrimary from "@/components/commons/ButtonPrimary";
import MisionesSectionContainer from "@/components/misionesSection/MisionesSectionContainer";

const Perfil = () => {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#FFF",
			}}>
			<View style={{ flex: 1, width: "100%", alignItems: "center", justifyContent: "center" }}>
				<Text style={styles.heading_primary}>Pepe Argento</Text>
				<Text style={styles.heading_subtitle}>Antifútbol</Text>
				<PositionBarContainer />
				<ProgressBarContainer />
				<MisionesSectionContainer />
			</View>
			<ButtonPrimary title="Editar Avatar" onPress={() => {}} />
		</View>
	);
};

export default Perfil;
