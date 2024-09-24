// components/Footer.tsx
import React from "react";
import { View } from "react-native";
import ItemFooter from "@/components/ItemFooter";
import { useRouter } from "expo-router";

const Footer: React.FC = () => {
	const router = useRouter();

	const navigate = (route: string) => {
		router.push(route);
	};

	return (
		<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
			<ItemFooter icon="format-list-numbered" text="Liga" onPress={() => {navigate("liga")}}/>
			<ItemFooter icon="person" text="Perfil" onPress={() => {navigate("perfil")}}/>
			<ItemFooter icon="storefront" text="Tienda" onPress={() => {navigate("tienda")}}/>
			<ItemFooter icon="settings" text="Ajustes" onPress={() => {navigate("config")}}/>
		</View>
	);
};

export default Footer;
