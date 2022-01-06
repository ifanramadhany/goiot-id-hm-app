import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "react-native-vector-icons";
import { Badge } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapperAllContnet}>
        <View style={styles.helloUser}>
          <View style={styles.helloUserLeft}>
            <View style={styles.topLeft}>
              <Text style={{ color: "#4b5563", fontSize: 14 }}>
                DECEMBER 05, 2022
              </Text>
            </View>
            <View style={styles.bottomLeft}>
              <View style={styles.bottomLeftIn}>
                <Text style={{ fontSize: 19, marginRight: 8 }}>Hello,</Text>
                <Text style={{ fontSize: 19, fontWeight: "bold" }}>
                  Mikael Johnson
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.helloUserRight}>
            <View style={styles.notification}>
              <Ionicons
                style={styles.notifStyle}
                name="notifications"
                size={40}
                color="#4b5563"
              />
              <Badge
                value="7"
                status="error"
                badgeStyle={{ scaleX: 1.1, scaleY: 1.1 }}
                containerStyle={styles.badgeStyle}
              />
              {/* <View style={styles.badgeStyleManual}>
                <Text style={{color: '#fff', fontSize: 11}}>70+</Text>
              </View> */}
            </View>
          </View>
        </View>

        <View style={styles.iplInvoiceWrapper}>
          <View style={styles.iplInvoice}>
            <LinearGradient
              colors={["#10b981", "#a7f3d0"]}
              start={{ x: 0.0, y: 0.25 }}
              end={{ x: 0.5, y: 2.6 }}
              style={styles.iplInvoiceTop}
            >
              <View style={styles.iplInvoiceTopTop}>
                <Text style={{ marginLeft: 15, fontSize: 21, color: "#fff" }}>
                  IPL Invoice
                </Text>
                <Text
                  style={{
                    marginRight: 15,
                    fontSize: 31,
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  Rp 601.400
                </Text>
              </View>
              <View style={styles.iplInvoiceTopBottom}>
                <Text
                  style={{ marginLeft: 15, fontSize: 16, color: "#fff" }}
                >
                  Status
                </Text>
                <View style={styles.paid}>
                  <Text style={{color: '#059669', fontSize: 13, fontWeight: 'bold'}}>paid</Text>
                </View>
              </View>
            </LinearGradient>
            <View style={styles.iplInvoiceBottom}>
              <Text style={{ marginLeft: 15, fontSize: 18, color: "#059669" }}>
                Due Date
              </Text>
              <Text style={{ marginRight: 15, fontSize: 18, color: "#059669" }}>
                12/20/2022
              </Text>
            </View>
          </View>

          <View style={styles.iniRasaKita}>
          <Image
            style={styles.imgPopularInside}
            resizeMode="cover"
            source={require("../assets/burger-ads.jpg")}
          ></Image>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imgPopularInside: {
    height: '100%',
    width: '100%',
    // backgroundColor: 'white',
    borderRadius: 10,
  },
  iniRasaKita: {
    // backgroundColor: "#4ade80",
    height: 145,
    marginHorizontal: 15,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  paid: {
    backgroundColor: '#fff',
    height: 25,
    width: 70,
    marginRight: 15,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  iplInvoiceTopTop: {
    // backgroundColor: 'yellow',
    height: "63%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iplInvoiceTopBottom: {
    // backgroundColor: "pink",
    height: "37%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'flex-start',
  },
  iplInvoiceBottom: {
    height: "32%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "#bbf7d0",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iplInvoiceTop: {
    height: "68%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  iplInvoice: {
    backgroundColor: "#4ade80",
    height: 145,
    marginHorizontal: 15,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  iplInvoiceWrapper: {
    // backgroundColor: 'yellow',
    width: "100%",
    height: 330,
  },
  notifStyle: {
    marginTop: 5,
    marginRight: 5,
  },
  badgeStyle: {
    position: "absolute",
    top: 5,
    right: 4,
  },
  badgeStyleManual: {
    position: "absolute",
    top: -1,
    right: -1,
    backgroundColor: "red",
    borderRadius: 150,
    padding: 3,
    borderWidth: 1,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  notification: {
    // backgroundColor: "yellow",
    width: "60%",
    height: "60%",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  topLeft: {
    marginHorizontal: 25,
    marginBottom: 5,
  },
  bottomLeft: {
    marginHorizontal: 25,
  },
  bottomLeftIn: {
    flexDirection: "row",
  },
  helloUserRight: {
    width: "30%",
    // backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  helloUserLeft: {
    width: "70%",
    // backgroundColor: 'blue',
    alignItems: "flex-start",
    justifyContent: "center",
  },
  helloUser: {
    width: "100%",
    height: 110,
    backgroundColor: "#fff",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: "row",
  },
  wrapperAllContnet: {
    flex: 1,
    backgroundColor: "#cbd5e1",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
