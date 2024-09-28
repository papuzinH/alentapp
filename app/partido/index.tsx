import React, { useState } from "react";
import { View, Text } from "react-native";
import ButtonPrimary from "@/components/commons/ButtonPrimary";
import Icon from "react-native-vector-icons/MaterialIcons";

import CounterPartido from "@/components/counterPartido/CounterPartido";
import ValidatePresencia from "@/components/validatePresencia/ValidatePresencia";
import styles from "@/app/styles/generalStyles";

const Partido = () => {
	const [isValidate, setIsValidate] = useState(false);
	const [validating, setValidating] = useState(false);
	const [partidoStarted, setPartidoStarted] = useState(true);

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
							onPress={() => {}}
						/>
					)
				)}
				{/* <ButtonPrimary title="Cancelar" onPress={() => {}} type="secondary" /> */}
				{/* <ButtonPrimary title="Confirmar" onPress={() => {}} />  */}
			</View>
		</View>
	);
};

export default Partido;
