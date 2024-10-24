import React, { useState, useEffect, useContext } from "react";
import { View } from "react-native";
import ButtonPrimary from "@/components/commons/ButtonPrimary";

import CounterPartido from "@/components/counterPartido/CounterPartido";
import ValidatePresencia from "@/components/validatePresencia/ValidatePresencia";
import { useRouter, Href } from "expo-router";
import { AppContext } from "@/context/alentAppContext";

const Partido = () => {
	const [isValidate, setIsValidate] = useState(false);
	const [validating, setValidating] = useState(false);
	const [partidoStarted, setPartidoStarted] = useState(false);
	const [timeForStart, setTimeForStart] = useState("");

	const { matchData } = useContext(AppContext);

	//refrescar el tiempo cada segundo
	useEffect(() => {
		const interval = setInterval(() => {
			// Obtener la fecha y hora actual según el sistema local
			const now = new Date().getTime(); // Esto ya da la hora local del sistema

			// Asegúrate de que matchData.dateHourMatch esté en el formato "YYYY-MM-DDTHH:MM:SS"
			const matchDate = new Date(matchData.dateHourMatch).getTime(); // Convertido a la zona horaria del sistema

			const diff = matchDate - now; // Diferencia en milisegundos

			if (diff <= 0) {
				setPartidoStarted(true);
				clearInterval(interval); // Detenemos el intervalo porque el partido ya empezó
			} else {
				// Convertir la diferencia en horas, minutos y segundos
				const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
				const minutes = Math.floor((diff / (1000 * 60)) % 60);
				const seconds = Math.floor((diff / 1000) % 60);

				// Formatear el tiempo restante como "HH:MM:SS"
				setTimeForStart(
					`${String(hours).padStart(2, "0")}:${String(minutes).padStart(
						2,
						"0"
					)}:${String(seconds).padStart(2, "0")}`
				);
			}
		}, 1000);

		return () => clearInterval(interval); // Limpiar intervalo al desmontar el componente
	}, [matchData]);

	const router = useRouter();

	const navigate = (route: string) => {
		router.push(route as Href);
	};

	const startValidating = () => {
		setValidating(true);
	};

	const stopValidating = () => {
		setValidating(false);
	};

	const handleValidate = (param: boolean) => {
		setIsValidate(param);
	};

	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#FFF",
				paddingBottom: 40,
			}}>
			{validating ? (
				<ValidatePresencia
					isValidate={isValidate}
					handleValidate={handleValidate}
					matchLocation={matchData.matchLocation}
				/>
			) : (
				<CounterPartido
					partidoStarted={partidoStarted}
					isValidate={isValidate}
					timeForStart={timeForStart}
				/>
			)}

			<View>
				{validating ? (
					isValidate ? (
						<ButtonPrimary
							title="Confirmar"
							onPress={() => {
								stopValidating();
							}}
						/>
					) : (
						<ButtonPrimary
							title="Cancelar"
							onPress={() => {
								stopValidating();
							}}
							type="secondary"
						/>
					)
				) : !isValidate ? (
					<ButtonPrimary
						title="Validar Presencia"
						onPress={() => {
							startValidating();
						}}
					/>
				) : (
					partidoStarted && (
						<ButtonPrimary
							title="Ir al Partido"
							onPress={() => {
								navigate("partido/live");
							}}
						/>
					)
				)}
			</View>
		</View>
	);
};

export default Partido;
