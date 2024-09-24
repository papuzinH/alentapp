import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface FooterProps {
	icon: string;
	text: string;
	url: string;
	onPress: () => void;
}

const ItemFooter: React.FC<FooterProps> = ({ icon, text, onPress }) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			activeOpacity={0.7} // Controla la opacidad al presionar
			style={{
				flex: 1,
				backgroundColor: "#2699FB", // Color de fondo original
				padding: 10,
				justifyContent: "center",
				alignItems: "center",
			}}>
			<View>
				<Icon name={icon} size={24} color="#fff" style={{ textAlign: "center" }} />
				<Text style={{ textAlign: "center", color: "#fff", marginTop: 5 }}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default ItemFooter;
