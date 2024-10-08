import React, {useContext} from "react";
import { View, Text } from "react-native";
import styles from "../styles/generalStyles";

import PositionBarContainer from "@/components/positionBar/PositionBarContainer";
import ProgressBarContainer from "@/components/progressBar/ProgressBarContainer";
import ButtonPrimary from "@/components/commons/ButtonPrimary";
import MisionesSectionContainer from "@/components/misionesSection/MisionesSectionContainer";

import { AppContext } from "@/context/alentAppContext";

const Perfil = () => {

	const { user, ranks } = useContext(AppContext);
	const rank = ranks.find((rank) => rank.name === user.rank);

	console.log(rank)

	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#FFF",
				paddingBottom: 40,
			}}>
			<View style={{ flex: 1, width: "100%", alignItems: "center", justifyContent: "center" }}>
				<Text style={styles.heading_primary}>{user.username}</Text>
				<Text style={styles.heading_subtitle}>{user.rank}</Text>
				<PositionBarContainer />
				<ProgressBarContainer minPoints={rank?.minPoints} maxPoints={rank?.maxPoints} points={user?.points} ranks={ranks} userRank={rank} />
				<MisionesSectionContainer />
			</View>
			<ButtonPrimary title="Editar Avatar" onPress={() => {}} />
		</View>
	);
};

export default Perfil;
