import React, {FC} from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface TablePointsItemProps {
    name: string;
    points: number;
    position: number;
    active: boolean;
    lastItem: boolean;
}

const TablePointsItem:FC<TablePointsItemProps> = ({name, points, position, active, lastItem}) => {
	return (
		<View
			style={{
				flexDirection: "row",
				paddingHorizontal: 18,
				paddingVertical: 10,
				backgroundColor: active ? "#2699FB" : "#FFF",
				alignItems: "center",
                borderBottomWidth: 1,
                borderBottomColor: lastItem ? "#FFF" : "#2699FB"
			}}>
			<View
				style={{
					width: "60%",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "flex-start",
				}}>
				<View
					style={{
						width: 28,
						height: 28,
						backgroundColor: "#BCE0FD",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: 50,
						marginRight: 5,
					}}>
					<Icon name="person" size={15} color="#2699FB" />
				</View>
				<Text style={{ color: active ? "#FFF" : "#2699FB", fontSize: 12 }}>{name}</Text>
			</View>

			<Text style={{ color: active ? "#FFF" : "#2699FB", fontSize: 12, width: "30%" }}>{points}</Text>
			<Text style={{ color: active ? "#FFF" : "#2699FB", fontSize: 12, width: "10%" }}>{position}</Text>
		</View>
	);
};

export default TablePointsItem;
