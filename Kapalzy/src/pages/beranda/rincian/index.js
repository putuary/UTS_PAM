import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {Harga} from '../../../utils/daftar';
import BottomPage from '../../../components/BottomPage';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const Rincian = ({navigation, route}) => {
  let awal = route.params.data.awal;
  let tujuan = route.params.data.tujuan;
  let layanan = route.params.data.layanan;
  let dewasa = route.params.data.dewasa;
  let anak = route.params.data.anak;
  let tiket_dewasa = 0;
  let tiket_anak = 0;
  const HargaTiket = (awal, tujuan, layanan, dewasa, anak) => {
    for (let i = 0; i < Harga.length; i++) {
      const Obj = Harga[i];
      if (Obj.awal == awal && Obj.tujuan == tujuan) {
        if (layanan == 'Eksekutif') {
          tiket_dewasa = dewasa * (Obj.tiket_dewasa + 10000);
          tiket_anak = anak * (Obj.tiket_anak + 8000);
        } else if (layanan == 'Ekspress') {
          tiket_dewasa = dewasa * (Obj.tiket_dewasa + 6000);
          tiket_anak = anak * (Obj.tiket_anak + 4000);
        } else {
          tiket_dewasa = dewasa * Obj.tiket_dewasa;
          tiket_anak = anak * Obj.tiket_anak;
        }
      }
    }
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text>Dewasa x {dewasa}</Text>
          <Text>Rp. {tiket_dewasa}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text>Anak x {anak}</Text>
          <Text>Rp. {tiket_anak}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.text}>Total</Text>
          <Text style={styles.text}>Rp. {tiket_dewasa + tiket_anak}</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View
        style={{
          width: 0.9 * Width,
          height: 0.8 * Height,
          alignSelf: 'center',
          marginTop: 0.05 * Height,
          borderRadius: 10,
          backgroundColor: 'green',
          borderRadius: 10,
          paddingHorizontal: '5%',
        }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            alignSelf: 'center',
            color: 'blue',
            marginTop: '5%',
            marginBottom: '5%',
          }}>
          Kapalzy
        </Text>
        <Text style={styles.text}>
          Kuota Tersedia : {parseInt(Math.random() * 1000 + 1)}
        </Text>
        <Text style={styles.text}>Rincian Tiket</Text>
        <View
          style={{
            marginVertical: '3%',
            backgroundColor: 'white',
            paddingHorizontal: '3%',
            paddingVertical: '3%',
            borderRadius: 10,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.jurusan}>{route.params.data.awal}</Text>
            <Image source={require('../../../icon/jurusan.png')} />
            <Text style={styles.jurusan}>{route.params.data.tujuan}</Text>
          </View>
          <Text style={styles.text}>Jadwal Masuk Pelabuhan</Text>
          <Text>{route.params.data.tanggal}</Text>
          <Text>{route.params.data.jam}</Text>
          <Text style={styles.text}>Layanan</Text>
          <Text>{route.params.data.layanan}</Text>
          <View>{HargaTiket(awal, tujuan, layanan, dewasa, anak)}</View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'blue',
              paddingVertical: 0.015 * Height,
              paddingHorizontal: 0.1 * Width,
              borderRadius: 5,
            }}
            onPress={() => navigation.goBack()}>
            <Text style={styles.font_tombol}>Kembali</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'blue',
              paddingVertical: 0.015 * Height,
              paddingHorizontal: 0.1 * Width,
              borderRadius: 5,
            }}
            onPress={() =>
              navigation.navigate('Informasi', {
                data: {
                  awal: awal,
                  tujuan: tujuan,
                  layanan: layanan,
                  tanggal: route.params.data.tanggal,
                  jam: route.params.data.jam,
                  dewasa: dewasa,
                  tiket_dewasa: tiket_dewasa,
                  anak: anak,
                  tiket_anak: tiket_anak,
                },
              })
            }>
            <Text style={styles.font_tombol}>Lanjutkan</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height: 0.108 * Height,
          justifyContent: 'flex-end',
        }}>
        <BottomPage navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  jurusan: {fontSize: 18, fontWeight: 'bold', marginTop: '3%'},
  text: {fontSize: 16, fontWeight: 'bold'},
  font_tombol: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Rincian;
