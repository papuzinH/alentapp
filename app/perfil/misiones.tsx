import React, {useContext} from "react";
import { View, FlatList } from "react-native";
import MisionItem from "@/components/misionItem/MisionItem";
import { AppContext } from "@/context/alentAppContext";

const Misiones = () => {
	const { misiones, user } = useContext(AppContext);

	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<FlatList
				data={misiones}
				renderItem={({ item }) => (
					<MisionItem
						title={item.title}
						description={item.description}
						points={item.points}
						coins={item.coins}
						achieved={user.misionesCompletadas.includes(item.id)}
					/>
				)}
				keyExtractor={(item, index) => index.toString()}
			/>
		</View>
	);
};

export default Misiones;
