import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "./FooterStyles";

interface FooterProps {
	icon: string;
	text: string;
	onPress: () => void;
	isActive?: boolean;
}

const ItemFooter: React.FC<FooterProps> = ({
	icon,
	text,
	onPress,
	isActive,
}) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			activeOpacity={0.7} // Controla la opacidad al presionar
			style={[styles.item_footer, isActive && { backgroundColor: "#BCE0FD" }]}>
			<View>
				<Icon
					name={icon}
					size={24}
					color={isActive ? "#2699FB" : "#FFF"}
					style={{ textAlign: "center" }}
				/>
				<Text
					style={{
						textAlign: "center",
						color: isActive ? "#2699FB" : "#FFF",
						marginTop: 5,
						fontSize: 10,
					}}>
					{text}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default ItemFooter;
