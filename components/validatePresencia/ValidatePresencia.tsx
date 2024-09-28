import React, { FC } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import styles from "@/app/styles/generalStyles";

interface ValidatePresenciaProps {
	isValidate: boolean;
}

const ValidatePresencia: FC<ValidatePresenciaProps> = ({ isValidate }) => {
	return (
		<View
			style={{
				justifyContent: "center",
				alignItems: "center",
				gap: 25,
				flex: 1,
			}}>
			{isValidate ? (
				<Icon name="check-circle-outline" size={100} color="#2699FB" />
			) : (
				<Icon name="add-location-alt" size={100} color="#2699FB" />
			)}
			<Text
				style={[
					styles.heading_primary,
					{ fontWeight: "normal", textAlign: "center" },
				]}>
				{isValidate
					? "Presencia validada"
					: "Validando presencia en el estadio..."}
			</Text>
			{isValidate && (
				<Text
					style={[
						styles.heading_subtitle,
						{ textAlign: "center", maxWidth: 230 },
					]}>
					Preparate para alentar, apoyar al equipo y sumar puntos
				</Text>
			)}
		</View>
	);
};

export default ValidatePresencia;
