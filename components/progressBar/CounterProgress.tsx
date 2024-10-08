import React from "react";
import { View, Text } from "react-native";
import styles from "@/app/styles/generalStyles";

interface CounterProgressProps {
	points: number;
	maxPoints: number;
}

const CounterProgress: React.FC<CounterProgressProps> = ({
    points,
	maxPoints,
}) => {
	return (
		<Text style={styles.heading_subtitle}>
			{points} puntos / {maxPoints} puntos
		</Text>
	);
};

export default CounterProgress;
