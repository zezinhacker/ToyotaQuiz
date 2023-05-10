import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { styles } from "../utils/styles";

const Resp = "";

export default function RMGameScreen() {
  const [personagem, setPersonagem] = useState(null);
  const [personagens, setPersonagens] = useState([]);
  const [totalPersonagens, setTotalPersonagens] = useState(1);
  const [resp, setResp] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((json) => {
        setTotalPersonagens(json.info.count);
      });
  }, []);

  useEffect(() => {
    buscarPersonagem();
  }, [totalPersonagens]);

  function buscarPersonagem() {
    fetch("https://rickandmortyapi.com/api/character/" + returnRandomNumber())
      .then((response) => response.json())
      .then((json) => {
        setPersonagem(json);
      });
  }

  async function handlePersonagemVivoOuMorto(resposta) {
    const isAlive = personagem.status === "Alive";
    if (resposta === isAlive) {
      setResp("Acertou !");
    } else {
      setResp("Errou !");
    }
    buscarPersonagem();
  }

  const returnRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * totalPersonagens) + 1;

    // canoot return 0
    if (randomNumber === 0) {
      return 1;
    }
    return randomNumber;
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabTop}>
        <Text style={styles.logoText}>Toyota Quiz</Text>
      </View>
      <View
        style={{
          textAlign: "center",
          padding: 15,
          borderRadius: 10,
          color: "white",
          backgroundColor: "#1B263B",
          width: 600,  
        }}
      >
        {personagem && (
          <View>
            <Text style={styles.textWhite}>Rick - Morty Game</Text>
            <Text style={styles.textWhite2}>Você sabe se o personagem está vivo?</Text>
            <Image
              source={{ uri: personagem.image }}
              style={{ width: 200, height: 200, borderRadius: 100, textAlign: "center", justifyContent: "center", marginLeft: 180 }}
            />
            <Text
              style={{
                fontSize: 32,
                textAlign: "center",
                marginVertical: 20,
                color: "white",
                width: 570,
                height: 80,
              }}
            >
              O/a personagem {personagem.name} está vivo/a?
            </Text>
            <View style={{ flexDirection: "row", gap: 20 }}>
              <Button
                mode="contained"
                onPress={() => handlePersonagemVivoOuMorto(true)}
                style={{ backgroundColor: "#778DA9", height: 40, marginLeft: 190 }}
              >
                SIM
              </Button>
              <Button
                mode="contained"
                onPress={() => handlePersonagemVivoOuMorto(false)}
                style={{ backgroundColor: "#778DA9", height: 40 }}
              >
                NÃO
              </Button>
              <Text style={{ fontSize: 30, color: "#fff" }}>{resp}</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem("@storage_Key", value);
  } catch (e) {
    // saving error
  }
};

const storeData1 = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("@storage_Key", jsonValue);
  } catch (e) {
    // saving error
  }
};

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("@storage_Key");
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    // error reading value
  }
};

const getData2 = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@storage_Key");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};