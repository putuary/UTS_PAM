import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {Batal} from '../../utils/daftar';
import BottomPage from '../../components/BottomPage';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const TampilBatal = () => {
  if (Batal.length == 0) {
    return (
      <View>
        <Text
          style={{
            alignSelf: 'center',
            fontStyle: 'italic',
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: 0.4 * Height,
          }}>
          Tidak ada Pembatalan yang dilakukan
        </Text>
      </View>
    );
  } else {
    return Batal.map(item => {
      return (
        <View
          style={{
            width: 0.8 * Width,
            height: 0.36 * Height,
            backgroundColor: 'aqua',
            alignSelf: 'center',
            marginTop: '5%',
            borderRadius: 5,
            padding: '5%',
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{marginTop: '5%', fontSize: 14, fontWeight: 'bold'}}>
              {item.awal}
            </Text>
            <Image source={require('../../icon/jurusan.png')} />
            <Text style={{marginTop: '5%', fontSize: 14, fontWeight: 'bold'}}>
              {item.tujuan}
            </Text>
          </View>
          <Text>Jadwal Masuk Pelabuhan</Text>
          <Text>{item.tanggal}</Text>
          <Text>{item.jam}</Text>
          <Text>Layanan</Text>
          <Text>{item.layanan}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>Dewasa x {item.dewasa}</Text>
            <Text>Rp. {item.tiket_dewasa}</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>Anak-anak x {item.anak}</Text>
            <Text>Rp. {item.tiket_anak}</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>Total</Text>
            <Text>Rp. {item.total}</Text>
          </View>
        </View>
      );
    });
  }
};

const Pembatalan = ({navigation, route}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          width: Width,
          height: 0.08 * Height,
          backgroundColor: 'green',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'blue'}}>
          Daftar Pembatalan
        </Text>
      </View>
      <ScrollView>
        <TampilBatal />
      </ScrollView>
      <BottomPage navigation={navigation} />
    </SafeAreaView>
  );
};

export default Pembatalan;
