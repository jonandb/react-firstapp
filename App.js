import * as React from 'react';
import { TextInput,StyleSheet, Text, View , Button, FlatList,ScrollView} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/Goalinput';


export default function App() {
  // const [enteredGoal,setEnteredGoal]= React.useState('');
  const[courseGoals,setCourseGoals]= React.useState([]);



  //moet hier blijven omdat we dit in goalinput en goalitem gebruiken!!!
  //goalTitle is nieuw, komt van goalInput
  const addGoalHandler=goalTitle=>{
    //key nodig in flatlist
    //id is standaard key  
    //anders zie flatlist
    setCourseGoals(currentGoals=>[...currentGoals, {id:Math.random().toString(),value:goalTitle}]);
    console.log(courseGoals)
   } ;
 return (
    <View style={styles.overallScreen}>
      {/* enkel nice als je weet hoelang de lijst is--> flatlist beter
      <ScrollView>
        {courseGoals.map((goal)=><View  key={goal} style={styles.listitems}><Text>{goal}</Text></View>)}
      </ScrollView> */}
      {/* onaddgoal = get data from component naam zelf te kiezen*/}
     <GoalInput onAddGoal={addGoalHandler}/>
    
      <FlatList
      keyExtractor={(item,index)=>item.id}
      data={courseGoals} renderItem={itemData=>
      // replaced by component
      // <View   style={styles.listitems}><Text>{itemData.item.value}</Text>
      // </View>
      <GoalItem title={itemData.item.value}/>
      }
      />
    </View>
  );
}

const styles = StyleSheet.create({
overallScreen:{
  padding:50
}
});