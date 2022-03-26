import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import ModalMenu from '../ModalMenu/index.js';

const BottomPage = ({navigation}) => {
  const [modalmenutransparan, setModalmenuTransparan] = React.useState(false);

  const ubahVisiblemenu = bool => {
    setModalmenuTransparan(bool);
  };
  return (
    <View
      style={{
        padding: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'blue',
      }}>
      <TouchableOpacity
        style={{alignItems: 'center'}}
        onPress={() => navigation.replace('Beranda')}>
        <Image source={require('../../icon/Home.png')} />
        <Text>Beranda</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{alignItems: 'center'}}
        onPress={() => navigation.replace('Pesanan')}>
        <Image source={require('../../icon/book.png')} />
        <Text>Pesanan Saya</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{alignItems: 'center'}}
        onPress={() => navigation.replace('Pembatalan')}>
        <Image source={require('../../icon/cancel.png')} />
        <Text>Pembatalan</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{alignItems: 'center'}}
        onPress={() => ubahVisiblemenu(true)}>
        <Image source={require('../../icon/Menu.png')} />
        <Text>Lainnya</Text>
        <ModalMenu
          navigation={navigation}
          modal_transparan={modalmenutransparan}
          ubahVisible={ubahVisiblemenu}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BottomPage;
