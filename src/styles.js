import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF5E0',
        flex: 1,
    },
    title: {
        fontSize: 30,
        fontWeight : 'bold',
        margin: 12,
        color: '#363062'
    },
    innerContainer: {
        flexDirection: 'row',

    },
    input: {
        padding: 12,
        margin: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        fontSize: 19,
        fontWeight: 'bold',
        flex: 3
    },
    buton: {
        flex: 1,
        margin: 10,
        borderWidth: 1,
        backgroundColor: '#141E46',
        borderRadius: 5,
    },
    butonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '800',
        margin: 10,

    },
    bottomContainer: {
        borderTopWidth: 1,
        borderColor: '#ddd',
        flex: 1,
        margin: 10,

    },
   tasksList: {
    margin: 8,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,

   },
   task: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black'

   },
   delete: {
    fontSize: 18,
    color: 'red'
   },
   clearAllArea: {

   },
   clearAll:{
    backgroundColor: '#11235A',
    borderRadius: 5,
    textAlign: 'center',
    margin: 10,
    padding: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color:'#ffff',

   }

})