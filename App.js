import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lenght: 0,
      width: 0,
      area: 0
    };
  }

  onUpadateLength = length => {
    this.setState({ length });
  };

  onUpdateWidth = width => {
    this.setState({ width });
  };

  onUpdateArea = () => {
    const { length, width } = this.state;
    const area = length * width;
    this.setState({ area });
  };

  render() {
    const { area } = this.state;
    return (
      <View style={styles.container}>
        <Text testID={"rectangleLengthText"} style={styles.label}>
          Length :
        </Text>
        <TextInput
          style={styles.label}
          testID={"rectangleLengthInput"}
          onChangeText={this.onUpadateLength}
          placeholder="Enter a Number"
          placeholderTextColor="#808080"
          returnKeyType="done"
        />

        <Text testID={"rectangleWidthText"} style={styles.label}>
          Width :
        </Text>
        <TextInput
          testID={"rectangleWidthInput"}
          onChangeText={this.onUpdateWidth}
          style={styles.label}
          placeholder="Enter a Number"
          placeholderTextColor="#808080"
          returnKeyType="done"
        />

        <TouchableOpacity
          testID={"rectangleAreaButton"}
          style={styles.button}
          onPress={this.onUpdateArea}
        >
          <Text style={styles.textButton}>Calculate</Text>
        </TouchableOpacity>

        {area ? (
          <Text testID={"rectangleAreaResult"} style={styles.output}>
            {area}{" "}
          </Text>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginHorizontal: 15,
    marginTop: 100
  },
  button: {
    backgroundColor: "#414f6f",
    borderRadius: 10,
    marginTop: 20,
    padding: 15
  },
  textButton: {
    fontSize: 20,
    alignSelf: "center",
    color: "#ffffff"
  },
  label: {
    height: 40,
    backgroundColor: "rgba(225,225,225,0.2)",
    marginBottom: 10,
    padding: 10
  },
  output: {
    padding: 15,
    color: "#000000",
    backgroundColor: "#ADD8E6",
    borderRadius: 10,
    marginTop: 20,
    textAlign: "center"
  }
});
