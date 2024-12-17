import './App.css';

const App = () => {
  const items = ['Hello', 'World'];

  return (
    <div>
      {items.map(item => <p>{item}</p> )}
    </div>
  );
}

export default App;
