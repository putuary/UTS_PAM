import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import ModalPelabuhan from '../../components/ModalPelabuhan/index.js';
import ModalLayanan from '../../components/ModalLayanan/index.js';
import BottomPage from '../../components/BottomPage/index.js';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const Beranda = ({navigation}) => {
  const [pelabuhan_awal, setPelabuhanAwal] = React.useState(
    'Pilih Pelabuhan Awal',
  );
  const [modalawaltransparan, setModalAwalTransparan] = React.useState(false);

  const ubahVisibleAwal = bool => {
    setModalAwalTransparan(bool);
  };
  const [pelabuhan_tujuan, setPelabuhanTujuan] = React.useState(
    'Pilih Pelabuhan Tujuan',
  );
  const [modaltujuantransparan, setModalTujuanTransparan] =
    React.useState(false);

  const ubahVisibleTujuan = bool => {
    setModalTujuanTransparan(bool);
  };

  const [layanan, setKelasLayanan] = React.useState('Pilih Layanan');

  const [modallayanantransparan, setModalLayananTransparan] =
    React.useState(false);

  const ubahVisibleLayanan = bool => {
    setModalLayananTransparan(bool);
  };

  const [tanggal_masuk, setTanggalMasuk] = React.useState(null);

  const [jam_masuk, setJamMasuk] = React.useState(null);
  const [jumlah_dewasa, setJumlahDewasa] = React.useState(null);
  const [jumlah_anak, setJumlahAnak] = React.useState(null);

  const [modalmenutransparan, setModalmenuTransparan] = React.useState(false);

  const ubahVisiblemenu = bool => {
    setModalmenuTransparan(bool);
  };

  return (
    <SafeAreaView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.utama}>
        <Text style={styles.utama.judul}>Kapalzy</Text>
        <View style={styles.utama.form}>
          <Text style={styles.utama.form.judul}>Pelabuhan Awal</Text>
          <TouchableOpacity
            style={styles.utama.form.box}
            onPress={() => ubahVisibleAwal(true)}>
            <Image
              style={styles.utama.form.box.ikon}
              source={require('../../icon/ship.png')}
            />
            <Text style={styles.utama.form.box.teks}>{pelabuhan_awal}</Text>
            <ModalPelabuhan
              modal_transparan={modalawaltransparan}
              setPelabuhan={setPelabuhanAwal}
              ubahVisible={ubahVisibleAwal}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.utama.form}>
          <Text style={styles.utama.form.judul}>Pelabuhan Tujuan</Text>
          <TouchableOpacity
            style={styles.utama.form.box}
            onPress={() => ubahVisibleTujuan(true)}>
            <Image
              style={styles.utama.form.box.ikon}
              source={require('../../icon/ship.png')}
            />
            <Text style={styles.utama.form.box.teks}>{pelabuhan_tujuan}</Text>
            <ModalPelabuhan
              modal_transparan={modaltujuantransparan}
              setPelabuhan={setPelabuhanTujuan}
              ubahVisible={ubahVisibleTujuan}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.utama.form}>
          <Text style={styles.utama.form.judul}>Kelas Layanan</Text>
          <TouchableOpacity
            style={styles.utama.form.box}
            onPress={() => ubahVisibleLayanan(true)}>
            <Image
              style={styles.utama.form.box.ikon}
              source={require('../../icon/services.png')}
            />
            <Text style={styles.utama.form.box.teks}>{layanan}</Text>
            <ModalLayanan
              modal_transparan={modallayanantransparan}
              setLayanan={setKelasLayanan}
              ubahVisible={ubahVisibleLayanan}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.utama.form}>
          <Text style={styles.utama.form.judul}>Tanggal Masuk Pelabuhan</Text>
          <View style={styles.utama.form.box2}>
            <Image
              style={styles.utama.form.box2.ikon2}
              source={require('../../icon/date.png')}
            />
            <TextInput
              style={styles.utama.form.box.teks}
              onChangeText={setTanggalMasuk}
              value={tanggal_masuk}
              placeholder="Pilih Tanggal Masuk"
            />
          </View>
        </View>
        <View style={styles.utama.form}>
          <Text style={styles.utama.form.judul}>Jam Masuk Pelabuhan</Text>
          <View style={styles.utama.form.box2}>
            <Image
              style={styles.utama.form.box2.ikon2}
              source={require('../../icon/clock.png')}
            />
            <TextInput
              style={styles.utama.form.box.teks}
              onChangeText={setJamMasuk}
              value={jam_masuk}
              placeholder="Pilih Jam Masuk"
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <View style={styles.utama.form}>
            <Text style={styles.utama.form.judul}>Dewasa</Text>
            <View style={styles.utama.form.box3}>
              <TextInput
                onChangeText={setJumlahDewasa}
                value={jumlah_dewasa}
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={styles.utama.form}>
            <Text style={styles.utama.form.judul}>Anak-anak</Text>
            <View style={styles.utama.form.box3}>
              <TextInput
                style={styles.utama.form.box.teks}
                onChangeText={setJumlahAnak}
                value={jumlah_anak}
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.utama.tombol}
          onPress={() =>
            navigation.navigate('Rincian', {
              data: {
                awal: pelabuhan_awal,
                tujuan: pelabuhan_tujuan,
                layanan: layanan,
                tanggal: tanggal_masuk,
                jam: jam_masuk,
                dewasa: jumlah_dewasa,
                anak: jumlah_anak,
              },
            })
          }>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{marginRight: 0.2 * Width, marginLeft: 0.1 * Width}}
              source={require('../../icon/search.png')}
            />
            <Text style={styles.utama.tombol.tulisan}>Cari</Text>
          </View>
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
  utama: {
    width: 0.9 * Width,
    height: 0.8 * Height,
    alignSelf: 'center',
    backgroundColor: 'green',
    marginTop: 0.05 * Height,
    borderRadius: 10,

    judul: {
      fontSize: 24,
      fontWeight: 'bold',
      alignSelf: 'center',
      color: 'blue',
      marginVertical: 0.02 * Height,
    },
    form: {
      marginTop: 0.001 * Height,
      marginHorizontal: 0.07 * Width,

      judul: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
        marginVertical: 0.008 * Height,
      },

      box: {
        paddingVertical: 0.013 * Height,
        width: 0.78 * Width,
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 5,

        ikon: {marginVertical: 0.001 * Height, marginHorizontal: 0.03 * Width},
        teks: {
          fontSize: 12,
          fontWeight: 'bold',
          marginVertical: 0.006 * Height,
        },
      },
      box2: {
        height: 0.06 * Height,
        width: 0.78 * Width,
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        ikon2: {
          marginVertical: 0.013 * Height,
          marginHorizontal: 0.025 * Width,
        },
      },
      box3: {
        alignItems: 'center',
        borderWidth: 1,
        width: 0.15 * Width,
        height: 0.055 * Height,
        backgroundColor: 'white',
      },
    },
    tombol: {
      paddingVertical: 0.02 * Height,
      marginVertical: 0.05 * Width,
      marginHorizontal: 0.05 * Width,
      backgroundColor: '#F54F08',
      justifyContent: 'center',
      borderRadius: 5,

      tulisan: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
      },
    },
  },
});

export default Beranda;
