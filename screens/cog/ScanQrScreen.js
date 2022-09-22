import { View, Text, TouchableOpacity, ScrollView, Button } from 'react-native'
import React, {useEffect, useState} from 'react';
import { Ionicons } from '@expo/vector-icons';
import { BarCodeScanner } from 'expo-barcode-scanner';



const ScanQrScreen = () => {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    console.log(scanned);

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };
    
        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };
    
    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    
    return (
        <View className="flex-1 text-white mx-8 mt-8">
            <View className="w-full flex-row justify-between">
                <Text style={{fontFamily:'Montserrat_500Medium'}} className="text-xl">Scan QR</Text>
            </View>
            <View className="w-80 h-80 overflow-hidden bg-red-500 rounded-3xl justify-center items-center mt-8">
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    // className="w-96 h-96 overf"
                    style={{width:500,height:500}}
                    barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                    // style={StyleSheet.absoluteFillObject}
                />
            </View>
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </View>
    )
}

export default ScanQrScreen