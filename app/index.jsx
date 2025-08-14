import { ImageBackground, Text, View, Image, StyleSheet, ScrollView } from "react-native";
import {Input} from '../components/input/input.jsx'
import {Botao} from '../components/botao/botao.jsx'
import {Card } from '../components/card/card.jsx'
import { useState } from "react";
import axios from 'axios';

export default function Index() {

  const [cep, setCep ] = useState("");
  const[jsonCep, setJsonCep] = useState ({});

  const [aparecidinho, setAparecidinho ] = useState(false);

 async function consultarCep() { 
 try {
  if(cep !== "" && cep.length === 8){
     const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
     setJsonCep(resposta.data);
     setAparecidinho(true);

  } else {
    alert("O cep esta incorreto. Digite ")
    setAparecidinho(false)
  }

 } catch (error) {
  console.log(error);
 }
  
  }

  return (
   <>
   {/* 1. logo + imagem de fundo*/}
   <ImageBackground source={require('../assets/images/mapa.png')}
   style={styles.imgmapa}>
    <Image source={require('../assets/images/logoFindcep.png')}></Image>
   </ImageBackground>
   {/* 2. Campo de Consulta*/}
   <ScrollView style={styles.containerScroll}>
   <View style={styles.container}>
     {/* 2.2 titulo*/}
     <Text style={styles.titulo}>Consulta seu Cep</Text>
   {/* 2.3 Input*/}
    <Input
    valorCep={cep}
    onChangeValorCep={e=> {setCep (e); console.log (e);}}
    />
   {/* 2.4 Botao*/}
   <Botao 
   tituloBotao='Consultar' 
   onPress={consultarCep}/>
   {/* 2.5 card de informacao*/} 
    
  {jsonCep.cep && (
    <Card
    cep={jsonCep.cep}
    logradouro={jsonCep.logradouro}
    bairro={jsonCep.bairro}
    uf={jsonCep.uf}
    estado={jsonCep.estado}
    regiao={jsonCep.regiao}
    />
  )}

      </View>
  </ScrollView>
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
    width:"100%",
    minHeight: "100%",
    alignItems: "center",
    gap: 40
  },

  containerScroll:{
    flex:1.5,
    height: '100%',
    paddingTop: 50,
    paddingBottom: 80
  },

  titulo:{
    fontSize: 25,
    fontFamily: "Poppins-Bold",
    color: '#000000'
  },
})
