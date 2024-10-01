import React, { FC } from "react";
import { View, Text } from "react-native";
import styles from "@/app/styles/generalStyles";

interface CronologiaItemProps {
	evento: {
		tiempo: string;
		evento: string;
	};
	index: number;
}

const CronologiaItem: FC<CronologiaItemProps> = ({ evento, index }) => {
	return (
		<View
			key={index}
			style={{
				width: "100%",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-between",
				gap: 16,
			}}>
			<Text style={[styles.heading_subtitle, { fontSize: 16 }]}>
				{evento.tiempo}
			</Text>
			<Text style={[styles.heading_subtitle, { fontSize: 16 }]}>
				{evento.evento}
			</Text>
		</View>
	);
};

export default CronologiaItem;
