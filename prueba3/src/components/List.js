import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { List as paperList } from 'react-native-paper';
import axios from 'axios';
//import {Authcontext} from '../context/Authcontext';
 

const baseURL = "http://10.12.13.104:8000/api/";
const endpoint = "http://10.12.13.104:8000/api/";


export default function List() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([]);
  const [expanded, setExpanded] = React.useState(true);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios
      .get(`${endpoint}users`)
      .then(res => {
        setUsers(res.data);
        setIsPickerEnabled(true);
      })
      .catch(error => {
        console.log(error);
        setIsPickerEnabled(false);
      });
  };

  const store = async newUser => {
    const response_ = await axios
      .post(endpoint + 'appointment', {
        name: newUser.id,
        name: newUser.name,
        name: newUser.email,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        Alert.alert('Error', 'Server error.', [
          {text: 'Recordar después', style: 'cancel'},
          {text: 'Cancelar'},
          {text: 'Ok'},
        ]);
      });
  };
  


  const handlePress = () => setExpanded(!expanded);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  //const

  return (
    <SafeAreaView>
      <View>
        <Text>List of Products</Text>
        <Text> ${user.id} </Text>
        <paperList.Section title="Accordions">
          <paperList.Accordion
            title="Uncontrolled Accordion"
            left={props => <paperList.Icon {...props} icon="folder" />}>
            <paperList.Item 
              title=" ${user.name} " 
              description=" ${user.email} "
              left={props => <paperList.Icon {...props} icon="folder" />}
            />
            <paperList.Item title="Second item" />
          </paperList.Accordion    >
        </paperList.Section>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})