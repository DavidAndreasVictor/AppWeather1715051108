import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class Cuaca extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: '-',
        description: '-',
        temp: 0
      }
    };
  }
  getWeather = () => {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=+'
      + this.state.city +
      '&appid=56a0a85888965383408a687e2ea9170a&units=metric';
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          forecast: {
            main: responseJson.weather[0].main,
            description: responseJson.weather[0].description,
            temp: responseJson.main.temp
          }
        });
      });
  }
  render() {
    return (
      <View style={styles.containerMain}>

        <View style={{ height: 24 }}>

        </View>

        <View style={styles.header}>
          <Text style={styles.vText1} >
            Go Cuaca Pro</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.inputKota}>
            <TextInput
              style={styles.isian}
              placeholder="Masukkan Nama Kota"
              onChangeText={(city) => this.setState({ city })}
            />
            <Button

              onPress={() => this.getWeather()}
              title="Cari"
              accessibilityLabel="Cari"
            />
          </View>


          <View style={styles.hasil}>
            <Text style={{ padding: 10, fontSize: 20 }} >
              {this.state.city} {'\n'}
              Suhu{'\t'}{'\t'}: {this.state.forecast.temp} {'\n'}
              Cuaca{'\t'}{'\t'}: {this.state.forecast.main} {'\n'}
              Deskripsi{'\t'}: {this.state.forecast.description}
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.vText2} >
            Copyright David 2019</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column'
  },
  header: {
    flex: 1,
    backgroundColor: '#0D47A1',

    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,

  },

  content: {
    backgroundColor: 'white',
    flex: 8,
  },

  footer: {
    flex: 1,
    backgroundColor: '#0D47A1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vText1: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  vText2: {
    fontSize: 18,
    color: '#fff',

  },
  inputKota: {
    backgroundColor: 'white',
    flex: 1.5,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,

    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 4,

  },
  hasil: {
    backgroundColor: 'white',
    flex: 4,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,

    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 4,

  },
  isian: {
    backgroundColor: '#fff',
    width: 200,
    padding: 10,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,

    borderWidth: 1.5,
    borderColor: '#b2b2b2',
    borderRadius: 4,

  },

  bayangan: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,

    borderWidth: 1,
    borderColor: '#e5e5e5',

  }
});
