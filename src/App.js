import './App.css';
import Counter from './components/Counter';
import FetchData from './components/FetchData';

const fetchData = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json());
};

function App() {
  return (
    <div className="App">
      <Counter />
      <FetchData fetchData={fetchData} />
    </div>
  );
}

export default App;
