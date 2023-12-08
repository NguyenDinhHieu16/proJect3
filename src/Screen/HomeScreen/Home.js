import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import {Entypo} from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    try {
      if (cameraRef.current) {
        const photo = await cameraRef.current.takePictureAsync();
        console.log(photo);
        setImage(photo.uri);
      }
    } catch (e) {
      console.log(e);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
        {!image ? 
          <Camera
            style={{ flex: 1 }}
            type={Camera.Constants.Type.back}
            ref={cameraRef}
          >
            <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'flex-end' }}>
              <TouchableOpacity style={styles.iconPicAction} onPress={takePicture}>
                  <FontAwesomeIcon icon={faCircle} size={50} color='#f1f1f1'/>
              </TouchableOpacity>
            </View>
          </Camera>
        : <View style={{flex: 1,}}>
            <Image
              source={{uri: image}} style={styles.image}
            />
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, paddingVertical: 15,}}>
              <TouchableOpacity style={{backgroundColor: 'red'}} onPress={()=> {setImage(null)}}>
                <Entypo name='back' size={28} color='#f1f1f1'/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> {setImage(null)}}>
                <Entypo name='arrow-with-circle-down' size={28} color='#f1f1f1'/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> {console.log('anh la:  ', image );}}>
                <Entypo name='check' size={28} color='#f1f1f1'/>
              </TouchableOpacity>
              
            </View>
          </View>}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111014'
  },
  image: {
    flex: 1,
  },
  iconPicAction: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red', 
    borderColor: '#f1f1f1', 
    borderWidth: 5, 
    borderRadius: '50%', 
    height: 65, 
    aspectRatio: 1,
    alignSelf: 'center', 
    marginBottom: 20,
  }
})
