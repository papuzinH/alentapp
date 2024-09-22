import React from "react";
import { View, Text, TouchableHighlight } from "react-native";

interface ButtonProps {
	title: string;
	onPress: () => void;
}

const ButtonPrimary: React.FC<ButtonProps> = ({ title, onPress }) => {
	return (
		<TouchableHighlight
			onPress={onPress}
			underlayColor="#4A86BA"
			style={{
				backgroundColor: "#2699FB",
				paddingVertical: 20,
				paddingHorizontal: 30,
				borderRadius: 35,
			}}>
			<View>
				<Text
					style={{ color: "#fff", textTransform: "uppercase", fontSize: 14 }}>
					{title}
				</Text>
			</View>
		</TouchableHighlight>
	);
};

export default ButtonPrimary;
