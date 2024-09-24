import React from "react";
import { View, Text } from "react-native";
import styles from "@/app/styles/generalStyles";
import { useSegments } from "expo-router";

const Header: React.FC = () => {

    const segments = useSegments();
    const routeName:string = segments[segments.length - 1];

	// Determinar el título según la ruta actual
	const getTitle = () => {
		switch (routeName) {
			case "index":
				return "Inicio";
			case "perfil":
				return "Mi Perfil";
			case "liga":
				return "Liga";
			case "tienda":
				return "Tienda";
			case "config":
				return "Ajustes";
			default:
				return "Página";
		}
	};
	
	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "center",
				paddingTop: 40,
				paddingBottom: 20,
			}}>
			<Text style={styles.heading_title}>{getTitle()}</Text>
		</View>
	);
};

export default Header;
