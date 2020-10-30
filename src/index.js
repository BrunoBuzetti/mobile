import React, { useEffect, useState} from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import api from './services/api';
 
export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      console.log(response.data);
      setProjects(response.data);
    });
  }, []);  

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `New ${Date.now()}`,
      owner: 'Bruno'
    });
    const project = response.data;
    setProjects([...projects, project]);
  }

  return (
    <>
      <StatusBar  
        barStyle="light-content"
        backgroundColor="#7106C1"/>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Hello Stack</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.container}>
        <FlatList 
          data={projects}
          keyExtractor={project => project.id}
          renderItem={( {item} ) => (
            <Text style={styles.project}>{item.title}</Text>
          )}
        />
        <TouchableOpacity 
          activeOpacity={0.6} 
          style={styles.button} 
          onPress={handleAddProject}
        >
          <Text style={styles.buttonText}>Adicionar projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
      
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159C1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold',
  },
  project: {
    color: '#009FFF',
    fontSize: 22,
  },
  button: {
    alignSelf: 'stretch',
    backgroundColor: '#00FFFF',
    margin: 30,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});