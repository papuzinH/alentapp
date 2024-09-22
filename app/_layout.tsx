// app/_layout.tsx
import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";
import Footer from "@/components/Footer";

export default function Layout() {
	return (
		<View style={styles.container}>
			<Stack initialRouteName="Home" screenOptions={{ headerShown: false }}>
				<Stack.Screen name="index" options={{ title: "Home" }} />
			</Stack>
			<Footer />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
	}
});
