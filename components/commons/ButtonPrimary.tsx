import React from "react";
import { View, Text, TouchableHighlight } from "react-native";

interface ButtonProps {
	title: string;
	onPress: () => void;
	type?: string;
}

const ButtonPrimary: React.FC<ButtonProps> = ({ title, onPress, type }) => {
	const stylesPrimary = {
		backgroundColor: "#2699FB",
		paddingVertical: 17,
		paddingHorizontal: 45,
		borderRadius: 35,
		borderColor: "#2699FB",
		borderWidth: 3,
	};

	const stylesSecondary = {
		backgroundColor: "#fff",
		color: "#2699FB",
		paddingVertical: 17,
		paddingHorizontal: 45,
		borderRadius: 35,
		borderColor: "#2699FB",
		borderWidth: 3,
	};

	return (
		<TouchableHighlight
			onPress={onPress}
			underlayColor="#4A86BA"
			style={type === "secondary" ? stylesSecondary : stylesPrimary}>
			<View>
				<Text
					style={{
						color: type === "secondary" ? "#2699FB" : "#fff",
						textTransform: "uppercase",
						fontSize: 10,
						fontWeight: "bold",
					}}>
					{title}
				</Text>
			</View>
		</TouchableHighlight>
	);
};

export default ButtonPrimary;
