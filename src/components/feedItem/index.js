import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Platform, Pressable, Image, Dimensions, TouchableOpacity } from 'react-native';
import { TruncatedTextView } from 'react-native-truncated-text-view';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';

const { height: heightScreen } = Dimensions.get("screen");



export function FeedItem({ data }) {
  return (
    <Pressable style={styles.press}>

      <Image
        source={data.image}
        style={{ width: '100%', height: heightScreen }}
      />
      <BlurView
        intensity={-30}
        style={[styles.info, { bottom: 45, backgroundColor: 'rgba(0, 0, 0, 0.7)' }]} // Linha modificada
      >
        <Text style={styles.name}>
          {data.name}
        </Text>
        <Text style={styles.drink}>
          {data.drink}
        </Text>
        <TruncatedTextView
          text={data.description}
          style={styles.description}
          tailTextStyle={styles.description}
          containerStyle={styles.truncatedView}
          numberOfLines={1}
          enableShowLess={false}
        />
      </BlurView>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="heart" size={40} color="#FFF" /> {/* Modifiquei a cor para branca */}
          <Text style={styles.actionText}>19.5K</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="chatbubble-ellipses" size={40} color="#FFF" /> {/* Modifiquei a cor para branca */}
          <Text style={styles.actionText}>27</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="bookmark" size={40} color="#FFF" /> {/* Modifiquei a cor para branca */}
        </TouchableOpacity>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: {
    height: heightScreen,
  },
  info: {
    position: 'absolute',
    zIndex: 99,
    left: 8,
    padding: 8,
    paddingLeft: 15,
    marginLeft: -15,
    marginRight: -15,
    marginBottom: -2,
  },
  name: {
    color: "#01DFD7",
    fontWeight: "bold",
    marginBottom: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.5)', // Adicionado sombra
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    fontSize: 30
  },
  drink: {
    color: "#01DFD7",
    marginRight: 14,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)', // Adicionado sombra
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    fontSize: 20
  },
  truncatedView: {
    backgroundColor: 'transparent',
  },
  description: {
    color: "#01DFD7",
    marginRight: 14,
    textShadowColor: 'rgba(0, 0, 0, 0.5)', // Adicionado sombra
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    fontSize: 18
  },
  actions: {
    position: 'absolute',
    zIndex: 99,
    right: 25,
    bottom: Platform.OS === 'android' ? 40 : 90,
    gap: 8,
  },
  actionText: {
    textAlign: 'center',
    color: '#FFF', // Modifiquei a cor para branca
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)', // Adicionado sombra
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    right: 4,
    fontSize: 20,
  },
});
