import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greeting from './components/Greeting';
import { FirstComponent as FC, SecondComponent as SC } from './components/MyComponent';
import MC from './components/MyComponent';
import HelloWorld from './components/HelloWorld';
import Student from './components/Student';
import Employee from './components/Employee';
import User from './components/User';
import Login from './components/Welcome';
import EventHandling from './components/EventHandling';
import ConditionRendering from './components/ConditionRendering';

function App() {

  // const student = {
  //   firstName: "Sanjay",
  //   lastName: "Jadhav",
  //   email: "sanjay@gmail.com"
  // }


  const skills = ['HTML', 'CSS', 'JavaScript'];

  return (
    <div className="App">
        {/* <Welcome name ="Ramesh"/>
        <Welcome name = "Umesh" /> */}
        {/* <Greeting name = "Ramesh"/>
        <Greeting name = "Umesh"/>
        <FC/>
        <SC />
        <MC /> */}
        {/* <HelloWorld /> */}
        {/* <Student 
            data = {skills}
        /> */}

        {/* <Student 
           firstName = "Umesh"
           lastName = "Fadatare"
           email = "umesh@gmail.com"
        /> */}

        {/* <Employee /> */}

        {/* <User /> */}
        {/* <EventHandling /> */}
        <ConditionRendering />

    </div>
  );
}

export default App;
