import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {User} from '../../utils/daftar';
import BottomPage from '../../components/BottomPage';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const DetailProfil = ({navigation}) => {
  let gambar = User.gambar[0];
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
          Profil Pengguna
        </Text>
      </View>
      <View
        style={{
          width: 0.9 * Width,
          height: 0.7 * Height,
          alignSelf: 'center',
          alignItems: 'center',
          paddingVertical: 0.05 * Height,
          backgroundColor: 'green',
          marginTop: 0.02 * Height,
          borderRadius: 10,
        }}>
        <View>
          <Image
            style={{width: 100, height: 100, borderRadius: 1000}}
            source={User.gambar}
          />
        </View>
        <View style={styles.form}>
          <Text style={styles.judul}>Username</Text>
          <View>
            <Text>{User.usename}</Text>
          </View>
        </View>
        <View style={styles.form}>
          <Text style={styles.judul}>Nama Lengkap</Text>
          <View>
            <Text>{User.nama}</Text>
          </View>
        </View>
        <View style={styles.form}>
          <Text style={styles.judul}>Jenis Kelamin</Text>
          <View>
            <Text>{User.jenis_kelamin}</Text>
          </View>
        </View>
        <View style={styles.form}>
          <Text style={styles.judul}>Umur</Text>
          <View>
            <Text>{User.umur}</Text>
          </View>
        </View>
        <View style={styles.form}>
          <Text style={styles.judul}>Nomor Handphone</Text>
          <View>
            <Text>{User.no_hp}</Text>
          </View>
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
const styles = StyleSheet.create({
  form: {marginVertical: 0.008 * Height, alignItems: 'center'},
  judul: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
});
export default DetailProfil;
