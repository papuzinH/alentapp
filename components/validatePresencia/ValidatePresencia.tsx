import React, { FC, useState, useEffect } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import * as Location from "expo-location";

import styles from "@/app/styles/generalStyles";

interface ValidatePresenciaProps {
	isValidate: boolean;
	matchLocation: {
		latitude: number;
		longitude: number;
	};
	handleValidate: () => void;
}

const ValidatePresencia: FC<ValidatePresenciaProps> = ({
	isValidate,
	matchLocation,
	handleValidate,
}) => {
	const [location, setLocation] = useState(null);
	const [errorMsg, setErrorMsg] = useState(null);

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				setErrorMsg("Permission to access location was denied");
				return;
			}

			let location = await Location.getCurrentPositionAsync({});
			setLocation(location);
		})();
	}, []);

	useEffect(() => {
		if (location) {
			const { latitude, longitude } = location.coords;
			const { latitude: matchLatitude, longitude: matchLongitude } =
				matchLocation;

			// Aplicar la fórmula de Haversine
			const toRadians = (degree: number) => (degree * Math.PI) / 180;

			const earthRadius = 6371e3; // Radio de la Tierra en metros
			const deltaLat = toRadians(matchLatitude - latitude);
			const deltaLon = toRadians(matchLongitude - longitude);

			const lat1 = toRadians(latitude);
			const lat2 = toRadians(matchLatitude);

			const a =
				Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
				Math.cos(lat1) *
					Math.cos(lat2) *
					Math.sin(deltaLon / 2) *
					Math.sin(deltaLon / 2);

			const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

			const distance = earthRadius * c; // Distancia en metros

			// Si la distancia es menor a 100 metros, valida la presencia
			if (distance < 100) {
				setTimeout(() => {
					console.log("está");
					handleValidate();
				}, 3000);
			}
			
			console.log("Coordenadas actuales: ", latitude, longitude);
			console.log("Coordenadas del estadio: ", matchLatitude, matchLongitude);
			console.log("Distancia: ", distance);

		}
	}, [location]);

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
