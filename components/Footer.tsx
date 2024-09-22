// components/Footer.tsx
import React from "react";
import { View, Text } from "react-native";
import ItemFooter from "@/components/ItemFooter";

const Footer: React.FC = () => {
	return (
		<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
			<ItemFooter icon="format-list-numbered" text="Liga" onPress={() => {}} />
            <ItemFooter icon="person" text="Perfil" onPress={() => {}} />
            <ItemFooter icon="storefront" text="Tienda" onPress={() => {}} />
            <ItemFooter icon="settings" text="Ajustes" onPress={() => {}} />
		</View>
	);
};

export default Footer;
