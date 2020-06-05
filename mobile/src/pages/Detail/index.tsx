import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  SafeAreaView,
} from 'react-native';
import { Feather as Icon, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

const Detail = () => {
  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name='arrow-left' size={20} color='#34cb79' />
        </TouchableOpacity>

        <Image
          style={styles.pointImage}
          source={{
            uri:
              'https://images.unsplash.com/photo-1556767576-5ec41e3239ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
          }}
        />

        <Text style={styles.pointName}>Mercadão do João</Text>
        <Text style={styles.pointItems}>Lâmpadas, Óleo de Cozinha</Text>

        <View style={styles.address}>
          <Text style={styles.addressTitle}>Enderço</Text>
          <Text style={styles.addressContent}>São José do Rio Preto, SP</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={() => {}}>
          <FontAwesome name='whatsapp' color='#fff' size={20} />
          <Text style={styles.buttonText}>Whatsapp</Text>
        </RectButton>
        <RectButton style={styles.button} onPress={() => {}}>
          <Icon name='mail' color='#fff' size={20} />
          <Text style={styles.buttonText}>E-mail</Text>
        </RectButton>
      </View>
    </SafeAreaView>
  );
};

export default Detail;
