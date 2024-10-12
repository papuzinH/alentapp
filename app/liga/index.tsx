import React, { useState, useEffect, useContext } from "react";
import { View } from "react-native";
import { AppContext } from "@/context/alentAppContext";

import TablePointsCointainer from "@/components/tablePoints/TablePointsCointainer";
import PodiumContainer from "@/components/podium/PodiumContainer";

const Liga = () => {
	const { otherUsers, topThreeUsers } = useContext(AppContext);

	return (
		(topThreeUsers.length !== 0 || otherUsers.length !== 0) && 
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#FFF",
				}}>
				<PodiumContainer podium={topThreeUsers} />
				<TablePointsCointainer users={otherUsers} />
			</View>
		)
	;
};

export default Liga;
