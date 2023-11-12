import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');

  const handleLoginPress = () => {
    const dadosConta = route.params?.dadosConta;

    if (dadosConta && username === dadosConta.username && senha === dadosConta.senha) {
      navigation.navigate('Main', { screen: 'Home' });
    } else {
      alert('Credenciais inválidas. Por favor, tente novamente ou crie uma conta.');
    }
  };

  const handleNavigateToCadastro = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />
      <Button title="Entrar" onPress={handleLoginPress} />
      <Button title="Ir para Cadastro" onPress={handleNavigateToCadastro} />
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
});

export default Login;
