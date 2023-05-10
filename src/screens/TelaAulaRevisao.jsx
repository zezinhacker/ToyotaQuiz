import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { db } from "../config/firebase";

export default function TelaAulaRevisao() {

    const [produtos, setProdutos] = useState([]);


  async function buscarProduto() {
    const produtosRef = collection(db, "produto");
    const produtosSnapshot = await getDocs(produtosRef);

    const produtosLista = produtosSnapshot.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });
    setProdutos(produtosLista[0]);
    console.log(produtosLista);
  }

  useEffect(() => {
    buscarProduto();
  }, []);

  async function inserirProduto() {
    const produto = {
      nome: "Bola",
      preco: 50,
    };
    const docRef = await addDoc(collection(db, "produto"), produto);
    console.log("Document written with ID: ", docRef.id);
  }

  return (
    <View>
      <Text>Teste</Text>
    </View>
  );
}
