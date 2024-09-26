import React, { useEffect, useState } from "react";
import { View } from "react-native";

interface BarProgressProps {
	points: number;
	total: number;
}

const BarProgress: React.FC<BarProgressProps> = ({ points, total }) => {
	const [barWidth, setBarWidth] = useState(0);

	useEffect(() => {
		let progress = (points / total) * 100;
		setBarWidth(progress);
	}, [points, total]);

	return (
		<View style={{ position: "relative", marginVertical: 5 }}>
			<View
				style={{
                    height: 20,
					backgroundColor: "#BCE0FD",
					flexDirection: "row",
					width: "100%",
				}}></View>
			<View
				style={{
					height: 20,
					backgroundColor: "#2699FB",
					flexDirection: "row",
					width: `${barWidth}%`,
					position: "absolute",
				}}></View>
		</View>
	);
};

export default BarProgress;
