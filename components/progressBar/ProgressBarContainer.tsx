import React, { useState, FC } from "react";
import { View, Text } from "react-native";
import styles from "@/app/styles/generalStyles";

import CounterProgress from "./CounterProgress";
import BarProgress from "./BarProgress";
import LimitsProgressBar from "./LimitsProgressBar";

interface ProgressBarContainerProps {
	points: number;
	minPoints: number;
	maxPoints: number;
	ranks: {
		id: number;
		name: string;
		minPoints: number;
		maxPoints: number;
	}[];
	userRank: {
		id: number;
		name: string;
	};
}

const ProgressBarContainer: FC<ProgressBarContainerProps> = ({ points, minPoints, maxPoints, ranks, userRank }) => {

	const nameLimits = {
		left: ranks.find(rank => rank.name === userRank.name)?.name.toString() || "",
		right: ranks[userRank.id]?.name.toString() || "",
	}

	return (
		<View style={{ justifyContent: "center", flexWrap: "wrap", width: "100%" }}>
			<CounterProgress points={points} maxPoints={maxPoints} />
			<BarProgress points={points} maxPoints={maxPoints} minPoints={minPoints} />
			<LimitsProgressBar nameLimits={nameLimits} />
		</View>
	);
};

export default ProgressBarContainer;
