import React from "react";
import { View, Text } from "react-native";
import PositionBarItem from "./PositionBarItem";

const PositionBarContainer: React.FC = () => {
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 40,
                paddingBottom: 20,
            }}>
            <PositionBarItem position="97°" text="Posición"/>
            <PositionBarItem position="0" text="Partidos" style={{borderRightWidth: 5, borderLeftWidth: 5, borderRightColor: "#BCE0FD", borderLeftColor: "#BCE0FD"}} />
            <PositionBarItem position="0" text="Monedas" />
        </View>
    );
};

export default PositionBarContainer;