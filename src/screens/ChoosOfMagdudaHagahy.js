import MapView, {Marker} from 'react-native-maps';


const ChooseOfMahdudaHagay = () => {

    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });

      const marker = [{
            latitude: 37.78825,
            longitude: -122.4324,
            title: "some thing new",
            subtitle: "some more"
      }];

       const onRegionChange = (region) => {

            setRegion({region});
       }

        return <View style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0}}>

            <MapView
                        style={{width: "100%", height: "100%"}}
                        initialRegion={region}
                        annotations={marker}
                        onRegionChange={onRegionChange}
  />

        </View>
    
}

    export default ChooseOfMahdudaHagay;