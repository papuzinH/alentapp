import React from "react";
import { View, Text, ViewStyle } from "react-native";

import styles from "@/app/styles/generalStyles";

interface PositionBarItemProps {
    position: string;
    text: string;
    style?: ViewStyle;
}

const PositionBarItem: React.FC<PositionBarItemProps> = ({position, text, style}) => {
    return (
        <View
            style={[{paddingHorizontal: 20, justifyContent: "center", alignItems: "center"}, style]}>
                <Text style={styles.heading_primary}>{position}</Text>
            <Text style={styles.heading_tertiary}>{text}</Text>
        </View>
    );
};

export default PositionBarItem;