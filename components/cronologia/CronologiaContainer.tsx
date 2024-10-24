import React, { FC, useContext } from "react";
import { View, Text } from "react-native";
import styles from "@/app/styles/generalStyles";
import CronologiaItem from "./CronologiaItem";
import { AppContext } from "@/context/alentAppContext";

interface CronologiaContainerProps {
	cronologia: {
		tiempo: string;
		evento: string;
	}[];
}

const CronologiaContainer: FC<CronologiaContainerProps> = ({ cronologia }) => {
	const { acciones } = useContext(AppContext);

	console.log(acciones);
	return (
		<View
			style={{
				width: "100%",
				justifyContent: "center",
			}}>
			<View
				style={{
					width: "100%",
					alignItems: "flex-start",
					justifyContent: "center",
					marginBottom: 20,
				}}>
				<Text style={[styles.heading_subtitle, { fontSize: 16 }]}>
					Cronología
				</Text>
			</View>
			<View
				style={{
					width: "100%",
					alignItems: "center",
					justifyContent: "center",
					gap: 16,
				}}>
				{acciones.map(
					(
						accion: {
							accion: string;
							fechaInicio: string;
							fechaFin: string;
						},
						index: number
					) => {
						return (
							<CronologiaItem
								key={index}
								tiempo={new Date(accion.fechaInicio).toLocaleTimeString()} // La hora en formato legible
								evento={accion.accion} // El nombre del evento
								inicio={accion.fechaInicio} // La hora de inicio
								fin={accion.fechaFin} // La hora de fin
							/>
						);
					}
				)}
			</View>
		</View>
	);
};

export default CronologiaContainer;
