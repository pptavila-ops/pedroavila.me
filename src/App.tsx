import InfoColumn from './components/InfoColumn';
import ProjectList from './components/ProjectList';

function App() {
  console.log('App component rendering');
  return (
    <div className="app-container">
      <InfoColumn />
      <main className="main-content">
        <ProjectList />
      </main>
    </div>
  );
}

export default App;
