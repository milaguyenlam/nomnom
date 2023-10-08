import { Dimensions, StyleSheet, View, ActivityIndicator } from "react-native";
import React from "react";

import colorConstants from "../constants/Colors";

export default function LoadingScreen() {
  return (
    <View style={styles.loadingScreenWrapper}>
      <ActivityIndicator size={80} color={colorConstants.headerOrange} />
    </View>
  );
}

const styles = StyleSheet.create({
  loadingScreenWrapper: {
    height: Dimensions.get("window").height * 0.6,
    justifyContent: "center",
  },
});
