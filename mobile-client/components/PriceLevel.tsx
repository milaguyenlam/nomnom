import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface Props {
  priceLevel: number;
}

const displayPriceLevel = (priceLevel: number) => {
  let result = [];

  for (let i = 0; i < priceLevel; i++) {
    result.push(
      <Text key={i} style={styles.priceLevelSign}>
        $
      </Text>
    );
  }

  return result;
};

export default function PriceLevel({ priceLevel }: Props) {
  return (
    <View style={styles.priceLevelWrapper}>
      {displayPriceLevel(priceLevel)}
    </View>
  );
}

const styles = StyleSheet.create({
  priceLevelWrapper: {
    flexDirection: "row",
  },
  priceLevelSign: {
    fontSize: 18,
    color: "#fff",
  },
});
