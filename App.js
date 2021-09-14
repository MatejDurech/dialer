import React, { Component } from "react";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, View, Linking, Pressable } from "react-native";

export default class mainapp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textState: "",
      iconeName: "phone",
    };
  }
  dialCall = () => {
    let phoneNumber = `tel:${this.state.textState}`;
      if (this.state.textState.length != 0){
        Linking.openURL(phoneNumber);
      }else{
        alert("no number");
      }
  };

  render() {
    let { textState } = this.state;
    return (
      <View style={styles.Main}>
        <View style={styles.MainContainer2}>
          <AntDesign
            name="phone"
            onPress={this.dialCall}
            style={styles.phone}
            size={50}
            color="black"
          />
          <Text style={styles.textbetween}> {textState} </Text>
          {this.state.textState.length !== 0 ? (
            <AntDesign
              name="arrowleft"
              onPress={() => {
                this.setState({
                  textState: textState.slice(0, textState.length - 1),
                });
              }}
              onLongPress={() => {
                this.setState({ textState: "" });
              }}
              style={styles.backSpace}
              size={50}
              color="black"
            />
          ) : (
            <View style={styles.backSpace} />
          )}
        </View>
        <View style={styles.MainContainer}>
          <View style={styles.button}>
            <Pressable
              onPress={() => {
                this.setState({ textState: textState + "1" });
              }}
            >
              <Text style={styles.TextStyle}>1</Text>
              <Text style={styles.Text}> </Text>
            </Pressable>
          </View>

          <View style={styles.button}>
            <Pressable
              onPress={() => {
                this.setState({ textState: textState + "2" });
              }}
            >
              <Text style={styles.TextStyle}>2</Text>
              <Text style={styles.Text}>ABC</Text>
            </Pressable>
          </View>
          <View style={styles.button}>
            <Pressable
              onPress={() => {
                this.setState({ textState: textState + "3" });
              }}
            >
              <Text style={styles.TextStyle}>3</Text>
              <Text style={styles.Text}>CDE</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.MainContainer}>
          <View style={styles.button}>
            <Pressable
              onPress={() => {
                this.setState({ textState: textState + "4" });
              }}
            >
              <Text style={styles.TextStyle}>4</Text>
              <Text style={styles.Text}>GHI</Text>
            </Pressable>
          </View>

          <View style={styles.button}>
            <Pressable
              onPress={() => {
                this.setState({ textState: textState + "5" });
              }}
            >
              <Text style={styles.TextStyle}>5</Text>
              <Text style={styles.Text}>JKL</Text>
            </Pressable>
          </View>

          <View style={styles.button}>
            <Pressable
              onPress={() => {
                this.setState({ textState: textState + "6" });
              }}
            >
              <Text style={styles.TextStyle}>6</Text>
              <Text style={styles.Text}>MNO</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.MainContainer}>
          <View style={styles.button}>
            <Pressable
              onPress={() => {
                this.setState({ textState: textState + "7" });
              }}
            >
              <Text style={styles.TextStyle}>7</Text>
              <Text style={styles.Text}>PQRS</Text>
            </Pressable>
          </View>

          <View style={styles.button}>
            <Pressable
              onPress={() => {
                this.setState({ textState: textState + "8" });
              }}
            >
              <Text style={styles.TextStyle}>8</Text>
              <Text style={styles.Text}>TUV</Text>
            </Pressable>
          </View>

          <View style={styles.button}>
            <Pressable
              onPress={() => {
                this.setState({ textState: textState + "9" });
              }}
            >
              <Text style={styles.TextStyle}>9</Text>
              <Text style={styles.Text}>WXYZ</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.MainContainer}>
          <View style={styles.button}>
            <Pressable
              onPress={() => {
                this.setState({ textState: textState + "*" });
              }}
            >
              <Text style={styles.TextStyle}>*</Text>
              <Text style={styles.Text}> </Text>
            </Pressable>
          </View>
          {this.state.textState.length > 0 ? (
            <View style={styles.button}>
              <Pressable
                onPress={() => {
                  this.setState({ textState: textState + "0" });
                }}
                onLongPress={() => {
                  this.setState({ textState: textState + "0" });
                }}
              >
                <Text style={styles.TextStyle}>0</Text>
                <Text style={styles.Text}>+</Text>
              </Pressable>
            </View>
          ) : (
            <View style={styles.button}>
              <Pressable
                onPress={() => {
                  this.setState({ textState: textState + "0" });
                }}
                onLongPress={() => {
                  this.setState({ textState: textState + "+" });
                }}
              >
                <Text style={styles.TextStyle}>0</Text>
                <Text style={styles.Text}>+</Text>
              </Pressable>
            </View>
          )}

          <View style={styles.button}>
            <Pressable
              onPress={() => {
                this.setState({ textState: textState + "#" });
              }}
            >
              <Text style={styles.TextStyle}>#</Text>
              <Text style={styles.Text}> </Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#676565",
  },
  backSpace: {
    flex: 1,
    alignContent: "flex-end",
    backgroundColor: "#676565",
  },
  phone: {
    flex: 1,
    marginLeft: "5%",
    backgroundColor: "#676565",
  },
  textbetween: {
    flex: 3,
    fontSize: 45,
    backgroundColor: "#676565",
  },

  MainContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  MainContainer2: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flex: 1,
    margin: "3%",
    padding: "3%",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 100,
    backgroundColor: "#D2D2D2",
  },

  TextStyle: {
    color: "#000000",
    fontSize: 50,
    textAlign: "center",
  },

  Text: {
    textAlign: "center",
    fontSize: 15,
  },
});
