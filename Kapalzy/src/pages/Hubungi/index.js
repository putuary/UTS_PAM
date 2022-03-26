import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import BottomPage from '../../components/BottomPage';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const Hubungi = ({navigation}) => {
  return (
    <SafeAreaView>
      <View
        style={{
          width: Width,
          height: 0.08 * Height,
          backgroundColor: 'green',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'blue'}}>
          Hubungi Kami
        </Text>
      </View>
      <View
        style={{
          width: 0.9 * Width,
          height: 0.7 * Height,
          alignSelf: 'center',
          paddingLeft: 0.3 * Width,
          paddingVertical: 0.05 * Height,
          backgroundColor: 'green',
          marginTop: 0.02 * Height,
          borderRadius: 10,
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Contact Us :</Text>
        <View style={{flexDirection: 'row', marginVertical: 0.01 * Height}}>
          <Image source={require('../../icon/instagram.png')} />
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('http://instagram.com/putuary26');
            }}>
            <Text>putuary26</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image source={require('../../icon/github.png')} />
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://github.com/putuary');
            }}>
            <Text>putuary</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height: 0.157 * Height,
          justifyContent: 'flex-end',
        }}>
        <BottomPage navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default Hubungi;
