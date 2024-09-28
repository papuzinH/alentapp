import React, { FC } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import styles from "@/app/styles/generalStyles";

interface CounterPartidoProps {
	isValidate: boolean,
    partidoStarted: boolean
}

const CounterPartido: FC<CounterPartidoProps> = ({partidoStarted, isValidate}) => {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#FFF",
			}}>
			<Text
				style={[
					styles.heading_primary,
					{ fontWeight: "normal", marginBottom: 15 },
				]}>
				{partidoStarted ? "¡Comenzó el partido!" : "Próximo partido dentro de:"}
			</Text>
			<Text style={{ fontSize: 40, color: "#2699FB", textAlign: "center" }}>
				00:00:00
			</Text>
			{isValidate && (
				<View
					style={{
						flexDirection: "row",
						gap: 10,
						marginTop: 60,
						maxWidth: 300,
					}}>
					<Icon name="check-circle-outline" size={35} color="#2699FB" />
					<Text style={styles.heading_subtitle}>
						¡Estás en el estadio! Dentro de poco comenzará el evento
					</Text>
				</View>
			)}
		</View>
	);
};

export default CounterPartido;
