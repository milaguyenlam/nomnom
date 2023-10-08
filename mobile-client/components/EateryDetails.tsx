import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { DocumentData } from "firebase/firestore";

interface Props {
  eatery: DocumentData;
}

export default function EateryDetails({ eatery }: Props) {
  const [showOpeningHours, setShowOpeningHours] = useState<boolean>(false);

  const {
    contact: {
      opening_hours: { weekday_text },
      phone_number,
      website,
    },
    location: { address },
    tags,
  } = eatery;

  const date = new Date();
  console.log("tags ", tags);

  return (
    <>
      <View style={styles.eateryDetails}>
        <Text style={styles.detailHeader}>Contact</Text>
        <View style={styles.divider}></View>
        <Text style={styles.details}>{address}</Text>
        <Text style={styles.details}>
          {weekday_text[calculateDayIndex(date.getDay() - 1)]}
        </Text>
        <Pressable
          style={[styles.details, styles.openingHours]}
          onPress={() => setShowOpeningHours(!showOpeningHours)}
        >
          <Text style={{ color: "#c2bcf2" }}>View all opening hours</Text>
          <MaterialIcons name="expand-more" size={24} color="#c2bcf2" />
        </Pressable>
        {showOpeningHours && (
          <View style={{ backgroundColor: "red" }}>
            <Text>{weekday_text[0]}</Text>
            <Text>{weekday_text[1]}</Text>
            <Text>{weekday_text[2]}</Text>
            <Text>{weekday_text[3]}</Text>
            <Text>{weekday_text[4]}</Text>
            <Text>{weekday_text[5]}</Text>
            <Text>{weekday_text[6]}</Text>
          </View>
        )}
        <Text style={styles.details}>{`+420 ${phone_number}`}</Text>
        <Text style={styles.details}>
          {website.replace(/^(https?:\/\/)?/, "").replace(/\/$/, "")}
        </Text>
      </View>
      <View style={styles.eateryDetails}>
        <Text style={styles.detailHeader}>Categories</Text>
        <View style={styles.divider}></View>
        <View style={styles.categories}>
          {tags.map((tag: string, index: number) => {
            return (
              <View key={index} style={styles.categoryWrapper}>
                <Text>{capitalizeFirstLetter(tag)}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </>
  );
}

const calculateDayIndex = (dayIndex: number) => {
  if (dayIndex === -1) return 6;

  return dayIndex;
};

const capitalizeFirstLetter = (tag: string) => {
  const [firstLetter, ...rest] = tag;
  return `${firstLetter.toUpperCase()}${rest.join("")}`;
};

const styles = StyleSheet.create({
  eateryDetails: {
    padding: 20,
  },
  detailHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  divider: {
    height: 2,
    backgroundColor: "#f0f0f0",
  },
  details: {
    marginVertical: 5,
  },
  openingHours: {
    flexDirection: "row",
    alignItems: "center",
  },
  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 5,
  },
  categoryWrapper: {
    alignSelf: "flex-start",
    borderRadius: 1000,
    paddingHorizontal: 18,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "#000",
    marginVertical: 3,
    marginRight: 6,
  },
});
