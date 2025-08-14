import {Pressable, Text, StyleSheet} from "react-native"

export const Botao = ({tituloBotao, onPress}) => {
    return(
        <Pressable style={styles.botao} onPress={onPress}>
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