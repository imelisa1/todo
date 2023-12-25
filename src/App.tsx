import React, {useState} from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { ToastProvider } from 'react-native-toast-notifications'
import styles from './styles';

function App(){

  const click = () => {
    if(text.length != 0){
      setTasks([...tasks, text]); /* ... ile tasks in daha çnceki verilerini temizliyoruz ve yeni (text) eklemek istediğimiz veriyi ekliyoruz*/ 
      setText(""); /* kaydettikten sonra TextInput u temizliyoruz */
    }
    else{
      Alert.alert('Warning', 'Boş task ekleyemezsiniz!',);  /* boş task eklemeyi engeller. */
        {text: 'OK'};
    }
      
    };  {/* onPress fonsiyonu oluşturuyoruz. */}

  const Task_delete = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask);
  }; /* click gibi silme tuşu fonksiyonu oluşturuyoruz.*/

  const deleteALL = (tasks) => {
    setTasks([]); /* bütün listeyi temizler */
  }

  const [text, setText] = useState(''); {/* text stati oluşturduk */}
  const [tasks, setTasks] = useState([]); {/* Array stati oluşturduk */}

  return( 

    <View style={styles.container}>
      <Text style={styles.title}> YAPILACAKLAR </Text>
      <View style={styles.innerContainer} >
        <TextInput
            style={styles.input}
            placeholder="Yapılacak..."
            value={text} /* textInput a text i bağlıyoruz.*/
            onChangeText={(value) => { {/* value göstermelik bir değişken.  girilen değer value ile setText aracılığıyla text e aktarılır.
          onChangeText={setText} şeklinde de yazılabilir */}
              setText(value);
            }}
        />
        {/* butona fazla style uygulanmadığı için bunu kullanıyoruz. */}
        <TouchableOpacity style={styles.buton} onPress={click}>
          <Text style= { styles.butonText}> EKLE</Text>
        </TouchableOpacity>
      </View>

      <View style= {styles.bottomContainer}>

        <FlatList
          data= {tasks}
          renderItem={({item, index})=>
           <View style={styles.tasksList}>
            <Text style={styles.task}> {item} </Text>
            <TouchableOpacity onPress={() => Task_delete(index)}>
              <Text style={styles.delete}> X </Text>
            </TouchableOpacity>
           </View>}
          
          keyExtractor={item => item + Date.now + Math.random}
        />

      </View>

      <View style={styles.clearAllArea}>
        <TouchableOpacity onPress={() => deleteALL(tasks)}>
          <Text style={styles.clearAll}> Clear All </Text>
        </TouchableOpacity>
      </View>
      
    </View>

  );
}

export default App;