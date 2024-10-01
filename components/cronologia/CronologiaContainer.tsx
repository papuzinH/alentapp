import React, {FC} from "react";
import { View, Text } from "react-native";
import styles from "@/app/styles/generalStyles";
import CronologiaItem from "./CronologiaItem";

interface CronologiaContainerProps {
	cronologia: {
		tiempo: string;
		evento: string;
	}[]
}

const CronologiaContainer:FC<CronologiaContainerProps> = ({ cronologia }) => {
	return (
		<View
			style={{
				width: "100%",
				justifyContent: "center",
			}}>
			<View
				style={{
					width: "100%",
					alignItems: "flex-start",
					justifyContent: "center",
					marginBottom: 20,
				}}>
				<Text style={[styles.heading_subtitle, { fontSize: 16 }]}>
					Cronología
				</Text>
			</View>
			<View
				style={{
					width: "100%",
					alignItems: "center",
					justifyContent: "center",
					gap: 16,
				}}>
				{cronologia.map((evento: {
					tiempo: string;
					evento: string;
				}, index: number) => {
					return (
						<CronologiaItem
							key={index}
							evento={evento}
							index={index}
						/>
					);
				})}
			</View>
		</View>
	);
};

export default CronologiaContainer;
