import {Pressable, Text, StyleSheet} from "react-native"

export const Botao = ({tituloBotao}) => {
    return(
        <Pressable style={styles.botao}>
            <Text  style={styles.textobotao}>
                {tituloBotao}
            </Text>
            </Pressable>
    )
}

const styles = StyleSheet.create ({

    botao:{
        backgroundColor: '#00AAEE',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRigthRadius: 10,
        paddingVertical: 10,
        width: '70%',
        alignItems: 'center'
    },

    textobotao:{
        color: '#FFFFFF',
        fontSize: 16

    }
})