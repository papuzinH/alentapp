import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import PodiumItem from "./PodiumItem";

interface PodiumProps {
  podium: {
    name: string;
    points: number;
    position: number;
  }[];
}

const PodiumContainer: FC<PodiumProps> = ({ podium }) => {

  const secondPlace = podium.find(item => item.position === 2);
  const firstPlace = podium.find(item => item.position === 1);
  const thirdPlace = podium.find(item => item.position === 3);

  return (
    <View style={styles.podiumContainer}>
      <View style={styles.podiumItemContainer}>
        {secondPlace && <PodiumItem podiumItem={secondPlace} />}
      </View>

      <View style={[styles.podiumItemContainer, styles.firstPlace]}>
        {firstPlace && <PodiumItem podiumItem={firstPlace} />}
      </View>

      <View style={styles.podiumItemContainer}>
        {thirdPlace && <PodiumItem podiumItem={thirdPlace} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  podiumContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end", 
    gap: 20, 
	marginBottom: 20,
  },
  podiumItemContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  firstPlace: {
    marginBottom: 20, 
  },
});

export default PodiumContainer;
