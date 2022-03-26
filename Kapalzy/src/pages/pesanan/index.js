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
import {Pemesanan, Batal} from '../../utils/daftar';
import BottomPage from '../../components/BottomPage';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const TampilPesanan = () => {
  if (Pemesanan.length == 0) {
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
          Maaf Anda Belum melakukan Pemesanan
        </Text>
      </View>
    );
  } else {
    return Pemesanan.map(item => {
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
            <Text style={styles.jurusan}>{item.awal}</Text>
            <Image source={require('../../icon/jurusan.png')} />
            <Text style={styles.jurusan}>{item.tujuan}</Text>
          </View>
          <Text style={styles.text}>Jadwal Masuk Pelabuhan</Text>
          <Text>{item.tanggal}</Text>
          <Text>{item.jam}</Text>
          <Text style={styles.text}>Layanan</Text>
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
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text}>Rp. {item.total}</Text>
          </View>
          <TouchableOpacity
            style={styles.tombol}
            onPress={item => {
              Batal.push({
                awal: item.awal,
                tujuan: item.tujuan,
                tanggal: item.tanggal,
                jam: item.jam,
                layanan: item.layanan,
                dewasa: item.dewasa,
                tiket_dewasa: item.tiket_dewasa,
                anak: item.anak,
                tiket_anak: item.tiket_anak,
                total: item.total,
              });

              Pemesanan.pop({
                awal: item.awal,
                tujuan: item.tujuan,
                tanggal: item.tanggal,
                jam: item.jam,
                layanan: item.layanan,
                dewasa: item.dewasa,
                tiket_dewasa: item.tiket_dewasa,
                anak: item.anak,
                tiket_anak: item.tiket_anak,
                total: item.total,
              });
            }}>
            <Text style={styles.tulisan}>Batalkan</Text>
          </TouchableOpacity>
        </View>
      );
    });
  }
};

const Pesanan = ({navigation, route}) => {
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
          Daftar Pemesanan
        </Text>
      </View>
      <ScrollView>
        <TampilPesanan />
      </ScrollView>
      <BottomPage navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tombol: {
    alignSelf: 'flex-end',
    paddingVertical: 0.01 * Height,
    marginVertical: 0.05 * Width,
    paddingHorizontal: 0.1 * Width,
    backgroundColor: '#F54F08',
    justifyContent: 'center',
    borderRadius: 5,
  },
  tulisan: {
    alignSelf: 'center',
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
  jurusan: {fontSize: 18, fontWeight: 'bold', marginTop: '3%'},
  text: {fontSize: 16, fontWeight: 'bold'},
});

export default Pesanan;
