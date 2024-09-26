import React, {useState} from "react";
import { View, Text } from "react-native";
import styles from "@/app/styles/generalStyles";

import CounterProgress from "./CounterProgress";
import BarProgress from "./BarProgress";
import LimitsProgressBar from "./LimitsProgressBar";

const ProgressBarContainer = () => {
    
   
    
    const [counterLimits, setCounterLimits] = useState({init: 0, end: 50});
    const [points, setPoints] = useState(20);
    const [total, setTotal] = useState(50);
    const [nameLimits, setNameLimits] = useState({left: "Antifútbol", right: "Nuevito de cancha"});
	return (
		<View style={{ justifyContent: "center", flexWrap: "wrap", width: "100%" }}>
			<CounterProgress counterLimits={counterLimits}/>
			<BarProgress points={points} total={total} />
			<LimitsProgressBar nameLimits={nameLimits} />
		</View>
	);
};

export default ProgressBarContainer;
