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
          Length
        </Text>
        <TextInput
          testID={"rectangleLengthInput"}
          onChangeText={this.onUpadateLength}
        />

        <Text testID={"rectangleWidthText"} style={styles.label}>
          Width
        </Text>
        <TextInput
          testID={"rectangleWidthInput"}
          onChangeText={this.onUpdateWidth}
        />

        <TouchableOpacity
          testID={"rectangleAreaButton"}
          style={styles.button}
          onPress={this.onUpdateArea}
        >
          <Text style={styles.textButton}>Calculate</Text>
        </TouchableOpacity>

        <Text testID={"rectangleAreaResult"}>{area}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15
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
    fontSize: 17
  }
});
