import './App.css';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import List from './components/Header/List/List';

function App() {
  return (
    <div className="App">
      <Button text='click'/>
      <Header  text='hello'/>
      <List text='первый'/>
    </div>
  );
}

export default App;
