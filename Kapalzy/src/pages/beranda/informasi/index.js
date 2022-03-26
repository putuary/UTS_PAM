import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import ModalKelamin from '../../../components/ModalKelamin';
import {Pemesanan} from '../../../utils/daftar';
import BottomPage from '../../../components/BottomPage';
import ModalTransfer from '../../../components/ModalTransfer';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const Informasi = ({navigation, route}) => {
  const [nama_lengkap, setNamaLengkap] = useState(null);

  const [JenisKelamin, setJenisKelamin] = useState('Masukkan Jenis Kelamin');

  const [modaltransparan, setModalTransparan] = useState(false);

  const ubahVisible = bool => {
    setModalTransparan(bool);
  };

  const [umur, setUmur] = useState(null);

  const [modaltransfertransparan, setModaltransferTransparan] = useState(false);

  const ubahVisibleTransfer = bool => {
    setModaltransferTransparan(bool);
  };

  return (
    <SafeAreaView>
      <View
        style={{
          width: 0.9 * Width,
          height: 0.8 * Height,
          alignSelf: 'center',
          backgroundColor: 'white',
          marginTop: 0.05 * Height,
          borderRadius: 10,
          alignSelf: 'center',
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
        <ScrollView>
          <Text style={styles.text}>Informasi Pemesanan</Text>
          <View
            style={{
              marginVertical: '3%',
              backgroundColor: 'white',
              paddingHorizontal: '3%',
              paddingVertical: '3%',
              borderRadius: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.jurusan}>{route.params.data.awal}</Text>
              <Image source={require('../../../icon/jurusan.png')} />
              <Text style={styles.jurusan}>{route.params.data.tujuan}</Text>
            </View>
            <Text style={styles.text}>Jadwal Masuk Pelabuhan</Text>
            <Text>{route.params.data.tanggal}</Text>
            <Text>{route.params.data.jam}</Text>
            <Text style={styles.text}>Layanan</Text>
            <Text>{route.params.data.layanan}</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>Dewasa x {route.params.data.dewasa}</Text>
              <Text>Rp. {route.params.data.tiket_dewasa}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>Anak x {route.params.data.anak}</Text>
              <Text>Rp. {route.params.data.tiket_anak}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.text}>Total</Text>
              <Text style={styles.text}>
                Rp{' '}
                {route.params.data.tiket_dewasa + route.params.data.tiket_anak}
              </Text>
            </View>
          </View>
          <Text style={styles.text}>Data Pemesan</Text>
          <View>
            <Text style={styles.judul}>Nama Lengkap</Text>
            <View style={styles.box1}>
              <TextInput
                style={styles.teks}
                onChangeText={setNamaLengkap}
                value={nama_lengkap}
                placeholder="Masukkan Nama Lengkap"
              />
            </View>
          </View>
          <View>
            <Text style={styles.judul}>Jenis Kelamin</Text>
            <TouchableOpacity
              style={styles.box}
              onPress={() => ubahVisible(true)}>
              <Text style={styles.teks}>{JenisKelamin}</Text>
              <ModalKelamin
                modal_transparan={modaltransparan}
                setJenisKelamin={setJenisKelamin}
                ubahVisible={ubahVisible}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.judul}>Umur</Text>
            <View style={styles.box1}>
              <TextInput
                style={styles.teks}
                onChangeText={setUmur}
                value={umur}
                placeholder="Masukkan Umur"
                keyboardType="numeric"
              />
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.tombol}
          onPress={() => {
            Pemesanan.push({
              awal: route.params.data.awal,
              tujuan: route.params.data.tujuan,
              tanggal: route.params.data.tanggal,
              jam: route.params.data.jam,
              layanan: route.params.data.layanan,
              dewasa: route.params.data.dewasa,
              tiket_dewasa: route.params.data.tiket_dewasa,
              anak: route.params.data.anak,
              tiket_anak: route.params.data.tiket_anak,
              total:
                route.params.data.tiket_dewasa + route.params.data.tiket_anak,
            });

            ubahVisibleTransfer(true);
          }}>
          <Text style={styles.font_tombol}>Submit</Text>
          <ModalTransfer
            navigation={navigation}
            modal_transparan={modaltransfertransparan}
            ubahVisible={ubahVisibleTransfer}
          />
        </TouchableOpacity>
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
    color: 'white',
    fontWeight: 'bold',
  },
  tombol: {
    alignItems: 'center',
    paddingVertical: 0.02 * Height,
    marginVertical: 0.05 * Width,
    marginHorizontal: 0.05 * Width,
    backgroundColor: '#F54F08',
    justifyContent: 'center',
    borderRadius: 5,
  },
  judul: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 0.008 * Height,
  },
  box: {
    paddingVertical: 0.012 * Height,
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
  },
  box1: {
    height: 0.055 * Height,
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
  },
  teks: {
    fontSize: 12,
    marginHorizontal: 0.05 * Width,
    fontWeight: 'bold',
    marginVertical: 0.006 * Height,
  },
});

export default Informasi;
