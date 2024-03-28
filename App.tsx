import { StatusBar } from 'expo-status-bar';
import {styles} from "./src/styles/app"
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { ImagePickerAsset } from 'expo-image-picker';
import { imageSelector } from './src/services/imagesSelector';
import { placeholderImage } from './src/utils/placeholderImage';
import { Button } from './src/components/Button';
import { Home } from './src/screens/Home';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {


  return (
    <SafeAreaProvider>

      <StatusBar style="light"  backgroundColor='transparent' translucent/>
      <Home/>
    </SafeAreaProvider>
  );
}


