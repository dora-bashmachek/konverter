import React, { useState } from "react";
import { TextInput, StyleSheet, Text, View } from "react-native";

function App() {
  let [num, setNum] = useState(0);

  return (
    <View style={styles.app}>
      <View>
        <Text style={{ textAlign: "center", fontSize: 30 }}>
          {" "}
          перевод в USD{" "}
        </Text>
        <TextInput
          style={{
            fontSize: 20,
            textAlign: "center",
            border: "6px",
            backgroundColor: "pink",
            width: 350,
            height: 100
          }}
          placeholder="внесите сумму в рублях"
          onChangeText={(num) => setNum(num / 0.017)}
        />
      </View>
      <View style={{}}>
        <Text
          style={{ paddingBottom: 100, fontSize: 30, textAlign: "center" }}
          placeholder="ВАША СУММА"
        >
          {" "}
          {num}${" "}
        </Text>
        <Text style={{ textAlign: "center", fontSize: 30 }}>
          {" "}
          перевод в тг{" "}
        </Text>
        <TextInput
          style={{
            fontSize: 20,
            textAlign: "center",
            border: "6px",
            backgroundColor: "pink",
            width: 350,
            height: 100
          }}
          placeholder="внесите сумму в рублях"
          onChangeText={(num) => setNum(num * 8, 33)}
        />
        <Text
          style={{ fontSize: 30, textAlign: "center" }}
          placeholder="ВАША СУММА"
        >
          {" "}
          {num}${" "}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  }
});

export default App;
