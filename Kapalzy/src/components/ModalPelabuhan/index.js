import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Dimensions,
  ScrollView,
  Modal,
} from 'react-native';

const Pelabuhan = ['Bakauheni', 'Merak', 'Gilimanuk', 'Ketapang', 'Padang Bai'];
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const ModalPelabuhan = ({modal_transparan, setPelabuhan, ubahVisible}) => {
  const PilihPelabuhan = pilihan => {
    setPelabuhan(pilihan);
    ubahVisible(false);
  };

  const daftarPelabuhan = Pelabuhan.map((pilihan, index) => {
    return (
      <TouchableOpacity
        style={{
          alignSelf: 'center',
          alignItems: 'center',
          width: 0.4 * Width,
        }}
        key={index}
        onPress={() => PilihPelabuhan(pilihan)}>
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
              marginTop: 0.2 * Height,
              backgroundColor: 'blue',
              width: 0.4 * Width,
              alignSelf: 'center',
              borderRadius: 10,
            }}>
            {daftarPelabuhan}
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
};

export default ModalPelabuhan;
