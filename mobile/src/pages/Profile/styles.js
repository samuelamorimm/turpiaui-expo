import { StyleSheet } from "react-native";

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e1e1',
    marginTop: 35,
  },
  profileArea: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginTop: 20,  
  },
  profileImg: {
    width: 150,
    height: 150,
    borderRadius: '50%',
    borderWidth: 2,
    borderColor: '#0F5F87',
  },
  nameProfile: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#3b3b3b'
  },
  optionsArea: {
    alignItems: 'center',
    marginTop: 50,
    gap: 30,
    
  },
  nameAndIcon: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center'
  },
  option: {
    // borderBottomWidth: 2,
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  optionText: {
    fontSize: 20,
    color: '#3b3b33b'
  },
  leaveArea: {
    width: '100%',
  },
  btnLeave: {
    width: 'fit-content',
    gap: 10,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginTop: 20,
    marginRight: 20,
  },
  textLeave: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3b3b3b'
  }
})

export default styles