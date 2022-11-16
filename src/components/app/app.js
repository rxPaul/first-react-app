import AppInfo from '../app-info/app-info';
import SearchPanel from '../serach-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

  const data = [
    {name: 'John', salary: 800, increase: false},
    {name: 'Jack', salary: 3000, increase: true},
    {name: 'Nick', salary: 2800, increase: false},
    {name: 'Paul', salary: 1200, increase: false}
  ];
  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList data={data}/>
        <EmployeesAddForm/>
    </div>
  );
}

export default App;