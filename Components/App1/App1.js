import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextField  from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function App1(props) {

    const [country, setCountry] = useState("");//country state
    const [disable,setDisable] = useState(true);//button state

    const textFieldHandler = (e) =>{//country text and button handler
        setCountry(e.target.value);
        if(e.target.value===""){
            setDisable(true);
        }else{
            setDisable(false);
        }
    }

    const submiButtonClickHandler = (e) => {// on submit handler
        e.preventDefault();
        props.navigation.navigate('CountryDetailsPage',{c:country});
    }

    return (
        <View style={styles.container}>
            <form>
                <TextField  style={{width:'300px'}} label="Country Name" variant="outlined" value = {country} onChange={textFieldHandler}/>
                <br/>
                {disable ? <Button variant="contained"style = {{marginTop:'10px'}} disabled>Submit</Button>
                :
                <Button type= "submit" variant="contained"style = {{marginTop:'10px'}} onClick={submiButtonClickHandler}>Submit</Button>
                }
            </form>
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
  });
