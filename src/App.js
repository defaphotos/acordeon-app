import './App.css';
import Acordeon from './components/Acordeon/Acordeon';

import data from './data/data';

function App() {
  return (
    <div className="wrapper">
      <Acordeon freeCollapsed={false} listContent={data} />
    </div>
  );
}

export default App;
