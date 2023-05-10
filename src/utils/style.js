import { Dimensions, StyleSheet } from "react-native";
const width = Dimensions.get("window").width;
export const styles = StyleSheet.create({
  widthFull: {
    width: width,
  },
  container: {
    flex: 1,
    backgroundColor: "#0D1B2A",
    alignItems: "center",
    justifyContent: "center",
  },
  containerFullWidth: {
    flex: 1,
    width: width,
  },
  box: {
    maxWidth: 300,
    width: "100%",
    borderRadius: 20,
    padding: 20,
    backgroundColor: "#1B263B",
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 12,
    },
  },
  imgRedonda: {
    width: 200,
    height: 200,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "999px",
    marginBottom: 40,
  },
  texto: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  tabTop: {
    width: "100%",
    height: 70,
    backgroundColor: "#415A77",
    color: "#fff",
    top: 0,
    position: "absolute",
  },
  logoText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "left",
    marginTop: 17,
    marginLeft: 100,
  },
  textWhite: {
    color: "#fff",
    marginLeft: 220,
  },
  textWhite2: {
    color: "#fff",
    marginLeft: 150,
    paddingBottom: 40,
  },
  menuzin: {
    backgroundColor: "#415A77",
  },
  logar: {
    backgroundColor: "#778DA9",
    marginTop: 40,
    color: "#fff",
  },
});
