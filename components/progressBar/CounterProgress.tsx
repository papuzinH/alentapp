import React from "react";
import { View, Text } from "react-native";
import styles from "@/app/styles/generalStyles";

interface CounterProgressProps {
    counterLimits: {
        init: number;
        end: number;
    };
}

const CounterProgress:React.FC<CounterProgressProps> = ({counterLimits}) => {
    const {init, end} = counterLimits;
    return (
            <Text style={styles.heading_subtitle}>{init} puntos / {end} puntos</Text>
    );
}

export default CounterProgress;