import React from "react";
import { View, Text } from "react-native";
import styles from "@/app/styles/generalStyles";

interface LimitsProgressBarProps {
	nameLimits: {
		left: string;
		right: string;
	};
}

const LimitsProgressBar: React.FC<LimitsProgressBarProps> = ({nameLimits}) => {
    const { left, right } = nameLimits;
	return (
		<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
			<Text style={[{ maxWidth: 80 }, styles.heading_secondary]}>
				{left}
			</Text>
			<Text
				style={[
					{ maxWidth: 80, textAlign: "right" },
					styles.heading_secondary,
				]}>
				{right}
			</Text>
		</View>
	);
};

export default LimitsProgressBar;
