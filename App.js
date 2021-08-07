import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class WeatherScreen extends Component {
  constructor() {
    super();
    this.state = {
      weather: '',
    };
  }

  getWeather = async () => {
    //change latitude and longitude
    var url = 'https://fcc-weather-api.glitch.me/api/current?lat=33&lon=96';


  //fetch using api
var response=await fetch (url)
var response_json = await response.json()
  this.setState({
    weather:response_json
  })


  };

  componentDidMount = () => {
  this.getWeather()
  };

  render() {
    if (this.state.weather === '') {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.subContainer}>

<Text style={styles.title}>Weather Forecast</Text>
            <Image
              style={styles.cloudImage}
              source={require('./clouds.png')}
            />
            <View style={styles.textContainer}>
            <Text style={{ fontSize: 20}}>
             Temperature : {this.state.weather.main.temp}&deg;C
            </Text>
           
<Text style={{fontSize : 20}}>
Humidity:{this.state.weather.main.humidity}</Text>

<Text style={{fontSize: 20}}>
Weather:{this.state.weather.weather[0].description}</Text>
          </View>
          </View>    
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
   flex:1
  },
  subContainer : { 
    flex: 1, 
    borderWidth: 1, 
    alignItems: 'center' 
    },
    title:{ 
      marginTop: 50, 
      fontSize: 30,
      fontWeight: 'bold' 
    },
    cloudImage :{ 
      width: 200, 
      height: 200, 
      marginTop: 30 
    },
    textContainer : { 
      flex: 1,
      flexDirection:'column', 
      marginTop:30
    }
});
