import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import ButtomMod from './ButtonModule/ButtonMod.jsx'

function App() {
  return(
    <>
    <Student name="Patrick" age={30} isStudent={true}/>
    <Student name="Spongebob" age={42} isStudent={false}/>
    <Student name="Johnny" age={50} isStudent={false}/>
    <Student name="Sandy" age={25} isStudent={true}/>
    <Student/>
    </>
  );
}

export default App
