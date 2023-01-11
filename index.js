import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Swiper from "react-native-swiper";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    paddingTop: 80,
    marginHorizontal: 30,
  },
  img: {
    alignSelf: "center",
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    height: h * 0.5,
    width: w * 0.9,
  },
  title: {
    fontFamily: "Montserrat_700Bold",
    marginTop: 60,
    marginHorizontal: 10,
    fontSize: 32,
  },
  text: {
    color: "#767676",
    fontFamily: "Montserrat_400Regular",
    marginTop: 20,
    fontSize: 16,
    lineHeight: 25,
    marginLeft: 10,
  },
});

const Onboarding = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  return (
    <Swiper
      buttonWrapperStyle={{
        backgroundColor: "transparent",
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
        left: 0,
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 20,
        justifyContent: "flex-end",
        alignItems: "flex-end",
      }}
      style={styles.wrapper}
      showsButtons={true}
      paginationStyle={{
        marginRight: w * 0.7,
        marginBottom: h * 0.02,
      }}
      activeDotColor="#000000"
      dotColor="#998FA2"
      nextButton={
        <View
          style={{
            height: 60,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
            width: 60,
            backgroundColor: "#000000",
          }}
        >
          <AntDesign name="arrowright" size={22} color="#FFF" />
        </View>
      }
      prevButton={
        <View
          style={{
            height: 60,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
            width: 60,
            backgroundColor: "#000000",
            marginHorizontal: 20,
          }}
        >
          <AntDesign name="arrowleft" size={22} color="#FFF" />
        </View>
      }
    >
      <View style={styles.slide}>
        <Image source={{ uri: 'https://images.unsplash.com/photo-1579126038374-6064e9370f0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1662&q=80' }} style={styles.img} />
        <Text style={styles.title}>Yoga</Text>
        <Text style={styles.text}>
          Lorem Ipsum is simply dummy text has survived not only five centuries, but also the leap into electronic typesetting, remaining essential.
        </Text>
      </View>
      <View style={styles.slide}>
        <Image source={{ uri: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" }} style={styles.img} />
        <Text style={styles.title}>Fitness</Text>
        <Text style={styles.text}>
          Lorem Ipsum is simply dummy text has survived not only five centuries, but also the leap into electronic typesetting, remaining essential.
        </Text>
      </View>

      <View style={styles.slide}>
        <Image source={{ uri: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" }} style={styles.img} />
        <Text style={styles.title}>Aerobics</Text>
        <Text style={styles.text}>
          Lorem Ipsum is simply dummy text has survived not only five centuries, but also the leap into electronic typesetting, remaining essential.
        </Text>
      </View>
      <View style={styles.slide}>
        <Image source={{ uri: 'https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' }} style={styles.img} />
        <Text style={styles.title}>Welcome to Group Workout</Text>
        <Text style={styles.text}>
          Lorem Ipsum is simply dummy text has survived not only five centuries, but also the leap into electronic typesetting, remaining essential.
        </Text>
      </View>
    </Swiper>
  );
};

export default Onboarding;