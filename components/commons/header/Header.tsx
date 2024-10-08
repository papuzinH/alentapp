import React from "react";
import { View, Text } from "react-native";
import styles from "@/app/styles/generalStyles";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useSegments, useRouter } from "expo-router";

const Header: React.FC = () => {
	const segments = useSegments();
	const router = useRouter();
	const routeName: string = segments[segments.length - 1];

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
			case "partido":
				return "Partido";
			case "misiones":
				return "Misiones";
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
			{routeName === "misiones" && (
				<Icon
					name="arrow-back"
					size={24}
					onPress={() => router.back()}
					style={{ position: "absolute", left: 20, top: 40 }}
				/>
			)}
			<Text style={styles.heading_title}>{getTitle()}</Text>
		</View>
	);
};

export default Header;
