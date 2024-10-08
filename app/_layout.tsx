// app/_layout.tsx
import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";
import Footer from "@/components/commons/footer/Footer";
import Header from "@/components/commons/header/Header";
import { AppProvider } from "@/context/alentAppContext";

export default function Layout() {
	return (
		<AppProvider>
			<View style={styles.container}>
				<Header />
				<View style={{ flex: 1, padding: 20, paddingBottom: 0 }}>
					<Stack
						initialRouteName="Inicio"
						screenOptions={{ headerShown: false }}>
						<Stack.Screen name="index" options={{ title: "Inicio" }} />
					</Stack>
				</View>
				<Footer />
			</View>
		</AppProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between",
	},
});
