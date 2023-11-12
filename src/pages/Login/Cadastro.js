import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, CheckBox, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Cadastro = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [maiorDeIdade, setMaiorDeIdade] = useState(false);

  const handleCriarContaPress = () => {
    if (username && email && senha && maiorDeIdade) {
      const dadosConta = { username, email, senha, maiorDeIdade };
      alert('Conta criada com sucesso!');
      navigation.navigate('Login', { dadosConta });
    } else {
      alert('Por favor, preencha todos os campos e confirme que é maior de 18 anos para criar uma conta.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Cadastro Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={maiorDeIdade}
          onValueChange={() => setMaiorDeIdade(!maiorDeIdade)}
        />
        <Text style={styles.label}>Sou maior de 18 anos</Text>
      </View>
      <TouchableOpacity onPress={handleCriarContaPress}>
        <Image
          source={require('./Login/criarContaLogin.png')} 
          style={styles.imagemBotao}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    marginLeft: 8,
  },
  imagemBotao: {
    width: 100, // Ajuste conforme necessário
    height: 50, // Ajuste conforme necessário
  },
});

export default Cadastro;
