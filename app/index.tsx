import { ImageBackground, Text, View, Image, StyleSheet } from "react-native";
import {Input} from '../components/input/input.jsx'
import {Botao} from '../components/botao/botao.jsx'

export default function Index() {
  return (
   <>
   {/* 1. logo + imagem de fundo*/}
   <ImageBackground source={require('../assets/images/mapa.png')}
   style={styles.imgmapa}>
    <Image source={require('../assets/images/logoFindcep.png')}></Image>
   </ImageBackground>
   {/* 2. Campo de Consulta*/}
   <View style={styles.container}>
     {/* 2.2 titulo*/}
     <Text style={styles.titulo}>Consulta seu Cep</Text>
   {/* 2.3 Input*/}
    <Input/>
   {/* 2.4 Botao*/}
   <Botao 
   tituloBotao='Consultar'/>
   </View>
   {/* 2.5 card de informacao*/}
   </>
  );
}

//Estilos dos meus componentes:
const styles = StyleSheet.create({
  imgmapa:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
     height: '100%'
  },
  logo:{
    width: 100,
    height: 120
  },

  container:{
    flex:1.5,
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 50,
    gap: 40
  },

  titulo:{
    fontSize: 25
  }



})
