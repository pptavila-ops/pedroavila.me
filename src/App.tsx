
import './index.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="col-divider" />
      <Content />
    </div>
  );
}

export default App;
