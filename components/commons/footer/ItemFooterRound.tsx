// components/Footer.tsx
import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface ItemFooterRoundProps {
	icon: string;
	onPress: () => void;
	isActive?: boolean;
}

const ItemFooterRound: React.FC<ItemFooterRoundProps> = ({ icon, onPress, isActive }) => {
	return (
		<TouchableOpacity
			style={{
				top: "-50%",
				left: "50%",
				transform: [{ translateX: -30 }],
				width: 60,
				height: 60,
				borderRadius: 50,
				position: "absolute",
				backgroundColor:  isActive ? "#BCE0FD" : "#FFF",
				justifyContent: "center",
				alignItems: "center",
				// Sombra para iOS
				shadowColor: "#000",
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.25,
				shadowRadius: 3.84,
				// Sombra para Android
				elevation: 5,
			}}
			onPress={onPress}>
			<Icon
				name={icon}
				size={24}
				color={!isActive ? "#2699FB" : "#FFF"}
				style={{ textAlign: "center" }}
			/>
		</TouchableOpacity>
	);
};

export default ItemFooterRound;
