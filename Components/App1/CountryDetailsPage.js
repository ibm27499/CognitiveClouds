import React, {useEffect,useState} from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { StyleSheet, Text, View } from 'react-native';


export default function CountryDetailsPage(props) {

    const [value,setValue] = useState([]);  
    const [temperature,setTemperature] = useState("");
    const[icon,setIcon] = useState("");
    const [windSpeed,setWindSpeed] = useState("");

     
    useEffect(() =>{
        const country = props.route.params.c;
        const url = `https://restcountries.com/v3.1/name/${country}`;
        fetch(url).then((res)=>res.json()).then((result)=>setValue(result[0]));
        const capital = value.capital;
    },[]);

    const weatherApiHandler = async() =>{
        const key = "c34a74732a0ec8c09e00d502b84a1384";
        const url = `http://api.weatherstack.com/current?access_key=${key}&query=${value.capital}`
        let res = await fetch(url);
        let json =await res.json();
        setTemperature(json.current.temperature);
        setIcon(json.current.weather_icons);
        setWindSpeed(json.current.wind_speed);    
      
    }

    return (
        <View style={styles.container}>
            
            <Card sx = {{minWidth:"200px"}}>
                Capital:{value.capital}
                <br/>
                Population:{value.population}
                <br/>
               
                LatLng:{value.latlng}
                <br/>
                Flag:{value.flag}
                <br/>
                Image url:
                </Card>
                <Button variant="contained"style = {{marginTop:'20px'}} onClick={weatherApiHandler}><Text style={styles.text}>{value.capital}{" "}weather</Text></Button>
                <View>
                   <Text style={styles.generalText}>Tempearture:{temperature}</Text>
                   <br/>
                   <img style = {{borderRadius:"50%"}}src= {icon}/>
                   <br/>
                   <Text style={styles.generalText}>Wind Speed:{windSpeed}</Text>
                </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text :{
        color: '#fff'
    },
    generalText:{
        color: '#000'
    }
  });