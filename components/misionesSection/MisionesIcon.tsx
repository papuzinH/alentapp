import React from "react";
import { TouchableOpacity, View } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

interface MisionesIconProps {
	achieved?: boolean;
}

const MisionesIcon: React.FC<MisionesIconProps> = ({ achieved }) => {
	return (
		<View
			style={{
				width: 50,
				height: 50,
				borderRadius: 50,
				backgroundColor: achieved ? "#2699FB" : "#BCE0FD",
				justifyContent: "center",
				alignItems: "center",
				opacity: achieved ? 1 : 0.5,
			}}>
			<Icon
				name="emoji-events"
				size={32}
				color={achieved ? "#FFF" : "#2699FB"}
				style={{ textAlign: "right" }}
			/>
		</View>
	);
};

export default MisionesIcon;
