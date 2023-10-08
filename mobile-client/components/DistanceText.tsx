import { StyleSheet, View, Text } from "react-native";

interface Props {
  distance: number;
}

const displayDistance = (distance: number) => {
  if (distance < 1) return `${(distance * 1000).toFixed(1)} m`;

  return `${distance.toFixed(1)} km`;
};

export default function DistanceText({ distance }: Props) {
  return (
    <View style={styles.distanceTextWrapper}>
      <Text style={styles.distanceText}>{displayDistance(distance)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  distanceTextWrapper: {
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  distanceText: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingTop: 7,
    paddingRight: 14,
    paddingLeft: 14,
    paddingBottom: 7,
    borderRadius: 8,
    color: "#fff",
  },
});
