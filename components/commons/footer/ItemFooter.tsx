import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "./FooterStyles";

interface FooterProps {
	icon: string;
	text: string;
	onPress: () => void;
}

const ItemFooter: React.FC<FooterProps> = ({ icon, text, onPress }) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			activeOpacity={0.7} // Controla la opacidad al presionar
			style={styles.item_footer}>
			<View>
				<Icon name={icon} size={24} color="#fff" style={{ textAlign: "center" }} />
				<Text style={{ textAlign: "center", color: "#fff", marginTop: 5 }}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default ItemFooter;
