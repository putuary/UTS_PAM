import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Dimensions,
  ScrollView,
  Modal,
} from 'react-native';

const JenisKelamin = ['Laki-Laki', 'Perempuan'];
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const ModalKelamin = ({modal_transparan, setJenisKelamin, ubahVisible}) => {
  const PilihJenisKelamin = pilihan => {
    setJenisKelamin(pilihan);
    ubahVisible(false);
  };

  const daftarJenisKelamin = JenisKelamin.map((pilihan, index) => {
    return (
      <TouchableOpacity
        style={{
          alignItems: 'center',
        }}
        key={index}
        onPress={() => PilihJenisKelamin(pilihan)}>
        <Text style={{margin: 10, fontSize: 12, fontWeight: 'bold'}}>
          {pilihan}
        </Text>
      </TouchableOpacity>
    );
  });
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modal_transparan}
        onRequestClose={() => {
          ubahVisible(false);
        }}>
        <ScrollView>
          <View
            style={{
              marginTop: 0.6 * Height,
              backgroundColor: 'blue',
              width: 0.4 * Width,
              alignSelf: 'center',
              borderRadius: 10,
            }}>
            {daftarJenisKelamin}
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
};

export default ModalKelamin;
