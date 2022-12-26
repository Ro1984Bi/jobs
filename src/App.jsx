import "./App.css";
import JobsList from "./components/JobsList";
import logo from "./img/taskapp.png";

function App() {
  return (
    <div className="jobs-app">
      <div className="logo-container">
        <img src={logo} className="logo" />
      </div>
      <div className="jobs-list">
      
        <h1>My Jobs</h1>
      
        <div>
        <JobsList />
        </div>
      </div>
    </div>
  );
}

export default App;
