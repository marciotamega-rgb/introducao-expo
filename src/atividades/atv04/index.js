import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function RevAtv04() {

    const [Nome, setNome] = useState('');
    const [Sobrenome, setSobrenome] = useState('');
    const [Nomecompleto, setNomecompleto] = useState('');

    function handleExibeMensagem() {
        setNomecompleto(`${Nome} ${Sobrenome}`);
        setNome('');
        setSobrenome('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade04</Text>

            <Text style={styles.txt}>{Nomecompleto}</Text>

            <TextInput
                value={Nome}
                onChangeText={setNome}
                placeholder='Nome'
                maxLength={10}
                style={styles.input}
            />

            <TextInput
                value={Sobrenome}
                onChangeText={setSobrenome}
                placeholder='Sobrenome'
                style={styles.input}
            />

            <TouchableOpacity
                style={styles.botao}
                onPress={() => handleExibeMensagem()}
            >
                <Text style={styles.txtBotao}>Exibir nome completo</Text>
            </TouchableOpacity>

        </View>
    );
}


