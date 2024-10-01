import React from "react";
import { View, Text } from "react-native";
import styles from "@/app/styles/generalStyles";

import CronologiaContainer from "@/components/cronologia/CronologiaContainer";
import CircularProgress from "@/components/circularProgress/CircularProgress";

const Live = () => {
	const [cronologia, setCronologia] = React.useState([
		{
			tiempo: "00:00",
			evento: "¡Comenzó el partido!",
		},
		{
			tiempo: "03:05",
			evento: "Salto",
		},
		{
			tiempo: "04:12",
			evento: "Aplausos",
		},
		{
			tiempo: "05:30",
			evento: "Vaivén",
		},
	]);

	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#FFF",
			}}>
			<View style={{ marginTop: 50 }}>
				<CircularProgress duration={10000} />
			</View>
			<View
				style={{
					flex: 1,
					alignItems: "center",
					justifyContent: "center",
				}}>
				<View>
					<Text style={{ fontSize: 40, color: "#2699FB", fontWeight: "bold" }}>
						0 <Text style={styles.heading_primary}>PTS</Text>
					</Text>
				</View>
				<CronologiaContainer cronologia={cronologia} />
			</View>
			<Text style={[styles.heading_subtitle, { color: "#97D0FE" }]}>
				Última actualización: 00:00hs
			</Text>
		</View>
	);
};

export default Live;
