import React, { FC } from "react";
import { View, Text } from "react-native";
import styles from "@/app/styles/generalStyles";
import Icon from "react-native-vector-icons/MaterialIcons";

import MisionesIcon from "@/components/misionesSection/MisionesIcon";
import { opacity } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

interface MisionItemProps {
	title: string;
	description: string;
	points: number;
    coins: number;
	achieved: boolean;
}

const MisionItem: FC<MisionItemProps> = ({
	title,
	description,
	points,
    coins,
	achieved,
}) => {
	return (
		<View style={{ flexDirection: "row", gap: 18, width: "100%", padding: 20, ...(!achieved && { opacity: 0.5 }) }}>
			<MisionesIcon achieved={true} />
			<View style={{ maxWidth: 173 }}>
				<Text style={styles.heading_subtitle}>{title}</Text>
				<Text style={{ color: "#BCE0FD", fontSize: 12 }}>
					{description}
				</Text>
			</View>
			<View
				style={{
					justifyContent: "center",
					marginLeft: "auto",
					alignItems: "flex-end",
					marginRight: 0,
				}}>
				<Text style={styles.heading_subtitle}>+{points} pts</Text>
				<View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
					<Text style={[styles.heading_subtitle]}>+{coins}</Text>
					<Icon name="paid" size={20} color="#2699FB" />
				</View>
			</View>
		</View>
	);
};

export default MisionItem;
