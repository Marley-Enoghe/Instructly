import './App.css';
import Header from './components/header';
import Route  from './routes/index'

function App() {
  return (
    <div className="App">
      <div className="">
        <Header  title="instructly"/>
        <div>
          <Route/>
        </div>
      </div>
    </div>
  );
}
export default App;
