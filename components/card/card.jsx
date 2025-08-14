import { View, StyleSheet, Text } from "react-native"

export const Card = ({cep,logradouro, bairro, uf, estado, regiao  }) => {
    return (
        <View style={style.card}>
            <View>
                <Text style={style.tituloValor}>Cep:</Text>
                <Text style={style.valor}>{cep}</Text>
            </View>

            <View>
                <Text style={style.tituloValor}>Logradouro:</Text>
                <Text style={style.valor}>{logradouro}</Text>
            </View>

            <View>
                <Text style={style.tituloValor}>Bairro:</Text>
                <Text style={style.valor}>{bairro}</Text>
            </View>

            <View>
                <Text style={style.tituloValor}>UF:</Text>
                <Text style={style.Valor}>{uf}</Text>
            </View>

            <View>
                <Text style={style.tituloValor}>Estado:</Text>
                <Text style={style.valor}>{estado}</Text>
            </View>

            <View>
                <Text style={style.tituloValor}>Região:</Text>
                <Text style={style.valor}>{regiao}</Text>
            </View>
        </View>
    )
}

const style = Styles = StyleSheet.create({
    card: {
        width: '70%',
        minHeight: '30%',
        padding: 20,
        marginBottom: 120,
        //Atente-se: Somente o elevation nao funciona em web nem ios
        //shadowColor: '#b2b2b2ff',
        //shadowOffset: { width: 0, height: 2 },
        //shadowOpacity: 0.5,
        //shadowRadius: 2,
        //elevation: 2,
        boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 2.6px',
        borderRadius: 7,
        gap:20
    },
    tituloValor:{
        fontWeight: 600



    }
})