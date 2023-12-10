import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, FlatList, Modal  } from 'react-native';
import { Camera } from 'expo-camera';
import {Entypo} from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons'

export default function Home() {

  const data = [
    { key: 'Tất cả' },
    { key: 'Bạn bè' },
    { key: 'Khu vực' },
  ];

  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [options, setOptions] = useState('Tất cả');
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={{justifyContent:'center', alignItems: 'center'}} onPress={() => handleItemPress(item)}>
      <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
        <Text style={styles.listItem}>{item.key}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleItemPress = (item) => {
    hideModal();
    setOptions(item.key);
  };

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
        <View>
          <Modal
            visible={isModalVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={()=>{hideModal}}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                {isModalVisible && (
                  <FlatList
                    style={{height: 100}}
                    data={data}
                    renderItem={renderItem}
                  />
                )}
              </View>
            </View>
          </Modal>
          </View>
        {!image ?
            <View style={styles.actionTop}>
                <TouchableOpacity onPress={()=> {}}>
                  <Entypo name='chat' size={28} color='#f1f1f1'/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionsTop} onPress={showModal}>
                  <Text style={styles.buttonText}>{options}</Text>
                  <Entypo name='chevron-down' size={22} color='#f1f1f1' style={{}}/>
                </TouchableOpacity>
        
               <TouchableOpacity onPress={()=> {}}>
                  <Entypo name='home' size={28} color='#f1f1f1'/>
                </TouchableOpacity>
            </View>
          : <View></View>}

        {!image ? 
        <View style={{flex: 1, borderRadius: 40, overflow: 'hidden',}}>
          <Camera
            style={{flex: 1, justifyContent: 'center',}}
            type={type}
            ref={cameraRef}
            flashMode={flash}
          >
          </Camera>
          </View>
        : <View style={{flex: 1, }}>
            <View style={styles.actionTop}>
              <Text style={styles.textImage}>Chia sẻ...</Text>
              <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'flex-end',}} onPress={()=> {}}>
                <Entypo name='download' size={28} color='#f1f1f1'/>
              </TouchableOpacity>
            </View>
            <Image
              source={{uri: image}} style={styles.image}
            />
            <View style={styles.actionBottomImage}>
              <View style={styles.actionBottom}>
                <TouchableOpacity onPress={()=> {setImage(null)}}>
                  <Entypo name='back' size={28} color='#f1f1f1'/>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.iconPicAction, {borderColor: '#ffb800'}]} onPress={takePicture}>
                  <Entypo name='direction' size={28} color='#f1f1f1'/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> {console.log('anh la:  ', image );}}>
                  <Entypo name='check' size={28} color='#f1f1f1'/>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.optionsBottom} onPress={showModal}>
                  <Text style={styles.buttonText}>{options}</Text>
                  <Entypo name='chevron-down' size={22} color='#f1f1f1' style={{}}/>
                </TouchableOpacity>
              </View>
            </View>
          </View>}

          {!image ?
            <View style={{height: '25%',}}>
              <View style={styles.actionBottom}>
                  <TouchableOpacity onPress={()=> {setFlash(flash === Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.on : Camera.Constants.FlashMode.off), console.log('flash')}}>
                    <Entypo name='flash' size={28} color={flash === Camera.Constants.FlashMode.off ? '#888888' : '#f1f1f1'}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.iconPicAction} onPress={takePicture}>
                      <FontAwesomeIcon icon={faCircle} size={50} color='#f1f1f1'/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=> {setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back); console.log('translate')}}>
                    <Entypo name='retweet' size={28} color='#f1f1f1'/>
                  </TouchableOpacity>
              </View>
              <View style={{alignItems: 'center', paddingBottom: '5%',}}>
                <Text style={{color: '#f1f1f1', fontSize: 20, fontWeight: 700,}}>Feeds</Text>
                <TouchableOpacity onPress={()=> {}}>
                  <Entypo name='chevron-down' size={28} color='#f1f1f1'/>
                </TouchableOpacity>
              </View>
            </View>
          : <View></View>}
          
      
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
    borderRadius: 30,
  },
  actionTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20, 
    height: '10%',
    marginTop: '5%',
  },
  actionBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20, 
    height: '60%',
  },
  iconPicAction: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#f1f1f1', 
    borderWidth: 5, 
    borderRadius: '50%', 
    height: 65, 
    aspectRatio: 1,
    alignSelf: 'center', 
  }, 
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f1f1f1',
    alignItems: 'center',
  },
  listItem: {
    fontSize: 18,
    marginBottom: 5,
    color: '#f1f1f1',
  },
  optionsTop: {
    flexDirection: 'row', 
    backgroundColor: '#413e3f', 
    height: '100%', 
    paddingHorizontal: 20,
    alignItems: 'center', 
    borderRadius: 30,
  },
  optionsBottom: {
    flexDirection: 'row', 
    backgroundColor: '#413e3f',
    paddingHorizontal: 20,
    height: '45%',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center', 
    borderRadius: 30,
    width: '35%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Một màu đen có độ trong suốt để tạo hiệu ứng overlay
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    height: '30%',
    aspectRatio: 1,
    backgroundColor: '#111014',
  },
  actionBottomImage: {
    height: '25%',
  },
  textImage: {
    color: '#f1f1f1',
    fontSize: 20,
    fontWeight: 'bold',
  }
})
