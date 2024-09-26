import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "@/app/styles/generalStyles";
import { useRouter, Href } from "expo-router";

const MisionesVerTodos = () => {
    const router = useRouter();

    const navigate = (route: string) => {
        router.push(route as Href);
    };

	return (
		<TouchableOpacity
            onPress={() => navigate("perfil/misiones")}
			style={{
				alignItems: "center",
				gap: 5,
				marginLeft: "auto",
				marginRight: 0,
			}}>
			<View
				style={{
					width: 30,
					height: 30,
					borderWidth: 2,
					borderColor: "#2699FB",
					borderRadius: 50,
					justifyContent: "center",
					alignItems: "center",
				}}>
				<Icon name="arrow-forward" size={25} color="#2699FB" />
			</View>
			<Text style={styles.heading_tertiary}>Ver todos</Text>
		</TouchableOpacity>
	);
};

export default MisionesVerTodos;
