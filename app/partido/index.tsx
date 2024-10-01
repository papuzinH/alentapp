import React, { useState } from "react";
import { View } from "react-native";
import ButtonPrimary from "@/components/commons/ButtonPrimary";

import CounterPartido from "@/components/counterPartido/CounterPartido";
import ValidatePresencia from "@/components/validatePresencia/ValidatePresencia";
import { useRouter, Href } from "expo-router";

const Partido = () => {
	const [isValidate, setIsValidate] = useState(false);
	const [validating, setValidating] = useState(false);
	const [partidoStarted, setPartidoStarted] = useState(true);
	const router = useRouter();

	const navigate = (route: string) => {
		router.push(route as Href);
	};

	const startValidating = () => {
		setValidating(true);
		setTimeout(() => {
			setIsValidate(true);
		}, 3000);
	};

	const stopValidating = () => {
		setValidating(false);
	};

	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#FFF",
			}}>
			{validating ? (
				<ValidatePresencia isValidate={isValidate} />
			) : (
				<CounterPartido
					partidoStarted={partidoStarted}
					isValidate={isValidate}
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
							onPress={() => {}}
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
