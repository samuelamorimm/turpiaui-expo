import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
      backgroundColor: '#e1e1e1',
      width: '100%',
      paddingBottom: 50,
      flex: 1
  },
  scrollContent: {
      alignItems: 'center',
      minHeight: '100%',
      marginTop: 30,
  },
  containerImg: {
      width: '100%',
      height: 300,
      position: 'relative',
  },
  detailImg: {
      height: '100%',
      width: '100%',
  },
  btnsImg: {
      width: 40,
      height: 40,
      backgroundColor: '#fff',
      margin: 20,
      borderRadius: 40,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 2,
  },
  btnFav: {
      right: 0,
  },
  titleArea: {
      backgroundColor: '#fff',
      width: '90%',
      alignSelf: 'center',
      padding: 15,
      borderRadius: 15,
      zIndex: 3,
      marginTop: -50,
      gap: 10,
      elevation: 2,
  },
  title: {
      fontSize: 30,
      color: '#3b3b3b',
      fontWeight: 'bold',
  },
  txtLocationArea: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
  },
  txtLocation: {
      fontSize: 20,
      fontWeight: '600',
      color: '#0F5F87',
  },
  areaDesc: {
      width: '100%',
      marginTop: 90,
  },
  titleDesc: {
      fontSize: 20,
      marginLeft: 20,
      marginBottom: 10,
  },
  desc: {
      fontSize: 12,
      marginHorizontal: 35,
      textAlign: 'left',
      fontWeight: '400',
  },
  map: {
      width: '100%',
      height: 180,
      borderRadius: 20,
      
  },
  viewMap: {
      borderWidth: 4,
      borderColor: '#0F5F87',
      borderRadius: 6,
      alignSelf: 'center',
      width: '90%',
  },
  hr: {
      width: '90%',
      height: 2,
      backgroundColor: '#b3b3b3',
      alignSelf: 'center',
      marginVertical: 20,
  }
});

