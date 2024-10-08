// components/Footer.tsx
import React from "react";
import { View } from "react-native";
import { Href, useRouter, usePathname } from "expo-router";

import ItemFooter from "@/components/commons/footer/ItemFooter";
import ItemFooterRound from "@/components/commons/footer/ItemFooterRound";

const Footer: React.FC = () => {
	const router = useRouter();
	const pathname = usePathname();

	const navigate = (route: string) => {
		router.push(route as Href);
	};
	console.log(pathname);

	const isActive = (route: string) => { return pathname.includes(route); };

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
				isActive={isActive("/liga")}
			/>
			<ItemFooter
				icon="person"
				text="Perfil"
				onPress={() => navigate("perfil")}
				isActive={isActive("/perfil")}
			/>
			<ItemFooter
				icon="storefront"
				text="Tienda"
				onPress={() => navigate("tienda")}
				isActive={isActive("/tienda")}
			/>
			<ItemFooter
				icon="settings"
				text="Ajustes"
				onPress={() => navigate("config")}
				isActive={isActive("/config")}
			/>
			<ItemFooterRound
				icon="sports-soccer"
				onPress={() => navigate("partido")}
				isActive={isActive("/partido")}
			/>
		</View>
	);
};

export default Footer;
