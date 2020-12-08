import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, Alert} from 'react-native'

export default class Home extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      punto1: 0,
      punto2: 0,
      punto3: 0,
      punto4: 0,
      punto5: 0,
      punto6: 0,
      punto7: 0,
      punto8: 0,
      punto9: 0,
      punto10: 0,
      suma: 0
    };
  }

  updateSuma() {
    this.setState({ suma: this.state.punto1 + this.state.punto2 * 2 + this.state.punto3 * 3 +
                      this.state.punto4 * 4 + this.state.punto5 * 5 + this.state.punto6 * 6 +
                      this.state.punto7 * 7 + this.state.punto8 * 8 + this.state.punto9 * 9 + this.state.punto10 * 10
    })
    Alert.alert('updated')
  }
  updatePoint1 = (point1) => {
    this.setState({ punto1: parseInt(point1) })
    this.updateSuma()
  }
  updatePoint2 = (point2) => {
    this.setState({ punto2: parseInt(point2) })
    this.updateSuma()
  }
  updatePoint3 = (point3) => {
    this.setState({ punto3: parseInt(point3) })
    this.updateSuma()
  }
  updatePoint4 = (point4) => {
    this.setState({ punto4: parseInt(point4) })
    this.updateSuma()
  }
  updatePoint5 = (point5) => {
    this.setState({ punto5: parseInt(point5) })
    this.updateSuma()
  }
  updatePoint6 = (point6) => {
    this.setState({ punto6: parseInt(point6) })
    this.updateSuma()
  }
  updatePoint7 = (point7) => {
    this.setState({ punto7: parseInt(point7) })
    this.updateSuma()
  }
  updatePoint8 = (point8) => {
    this.setState({ punto8: parseInt(point8) })
    this.updateSuma()
  }
  updatePoint9 = (point9) => {
    this.setState({ punto9: parseInt(point9) })
    this.updateSuma()
  }
  updatePoint10 = (point10) => {
    this.setState({ punto10: parseInt(point10) })
    this.updateSuma()
  }

  render() {
    return (
    <View style={styles.container}>
        <View style={styles.item1}>
            <Text style ={styles.text}>10 x </Text>
            <Text style ={styles.text}>  9 x</Text>
            <Text style ={styles.text}>  8 x</Text>
            <Text style ={styles.text}>  7 x</Text>
            <Text style ={styles.text}>  6 x</Text>
        </View>
        <View style={styles.item2}>
            <TextInput
                style= {styles.textinput}
                keyboardType = 'number-pad'
                onChangeText={numero => this.updatePoint10(parseInt(numero))}
                //defaultValue={this.state.punto10.toString()}
                value = {this.state.punto10.toString()}
            >
              
            </TextInput>
            <TextInput
                style= {styles.textinput}
                keyboardType = 'number-pad'
                defaultValue={this.state.punto9.toString()}
            />
            <TextInput
                style= {styles.textinput}
                keyboardType = 'number-pad'
                defaultValue={this.state.punto8.toString()}
                 
            />
            <TextInput
                style= {styles.textinput}
                keyboardType = 'number-pad'
                defaultValue={this.state.punto7.toString()}
            />
            <TextInput
                style= {styles.textinput}
                keyboardType = 'number-pad'
                defaultValue={this.state.punto6.toString()}
            />
        </View>
        <View style={styles.item1}>
            <Text style ={styles.text}>  5 x</Text>
            <Text style ={styles.text}>  4 x</Text>
            <Text style ={styles.text}>  3 x</Text>
            <Text style ={styles.text}>  2 x</Text>
            <Text style ={styles.text}>  1 x</Text>
        </View>
        <View style={styles.item2}>
        <TextInput
                style= {styles.textinput}
                keyboardType = 'number-pad'
                defaultValue={this.state.punto5.toString()}
            />
            <TextInput
                style= {styles.textinput}
                keyboardType = 'number-pad'
                defaultValue={this.state.punto4.toString()}
            />
            <TextInput
                style= {styles.textinput}
                keyboardType = 'number-pad'
                defaultValue={this.state.punto3.toString()}
            />
            <TextInput
                style= {styles.textinput}
                keyboardType = 'number-pad'
                defaultValue={this.state.punto2.toString()}
            />
            <TextInput
                style= {styles.textinput}
                keyboardType = 'number-pad'
                defaultValue={this.state.punto1.toString()}
            />
        </View>
        <Text style = {styles.text} >
          Total: {this.state.suma.toString()}
            {/* Total = {parseInt(sumas[1]) + parseInt(sumas[2]) * 2 + parseInt(sumas[3]) * 3 + parseInt(sumas[4]) * 4 + 
                parseInt(sumas[5]) * 5 + parseInt(sumas[6]) * 6 + parseInt(sumas[7]) * 7 + 
                parseInt(sumas[8]) * 8 + parseInt(sumas[9]) * 9 + parseInt(sumas[10]) * 10} */}
        </Text>
    </View>
    )
  }
}

// Home.navigationOptions = {
//   title: 'HIT - Practice Mode',
//   headerStyle: {
//     backgroundColor: '#071B40',
//     height:80
//   },
//   headerTintColor: '#fff',
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#0d3580'
  },
  item1: {
    marginTop: '10%',
    paddingLeft: '10%',
    width: '25%'
  },
  item2: {
    marginTop: '10%',
    // paddingLeft: '10%',
    width: '25%'
  },
  text: {
    color: '#fff',
    fontSize: 26,
    marginTop: 20
  },
  textinput:{
    width:50, 
    height: 40, 
    borderColor: '#1c6aff', 
    borderWidth: 1,
    color: '#fff',
    fontSize: 26,
    textAlign: 'center',
    marginTop: 16
  },
  buttonContainer: {
    backgroundColor: '#222',
    borderRadius: 5,
    padding: 10,
    margin: 20
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  }
})

//export default Home