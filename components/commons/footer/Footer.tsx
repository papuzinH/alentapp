// components/Footer.tsx
import React from "react";
import { View } from "react-native";
import { Href, useRouter } from "expo-router";

import ItemFooter from "@/components/commons/footer/ItemFooter";
import ItemFooterRound from "@/components/commons/footer/ItemFooterRound";

const Footer: React.FC = () => {
	const router = useRouter();

	const navigate = (route: string) => {
		router.push(route as Href);
	};

	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				position: "relative",
			}}>
			<ItemFooter
				icon="format-list-numbered"
				text="Liga"
				onPress={() => navigate("liga")}
			/>
			<ItemFooter
				icon="person"
				text="Perfil"
				style={{ paddingRight: 40 }}
				onPress={() => navigate("perfil")}
			/>
			<ItemFooter
				icon="storefront"
				text="Tienda"
				style={{ paddingLeft: 40 }}
				onPress={() => navigate("tienda")}
			/>
			<ItemFooter
				icon="settings"
				text="Ajustes"
				onPress={() => navigate("config")}
			/>
			<ItemFooterRound
				icon="sports-soccer"
				onPress={() => navigate("partido")}
			/>
		</View>
	);
};

export default Footer;
