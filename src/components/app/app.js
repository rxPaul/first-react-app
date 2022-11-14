import './app.css'
import AppInfo from '../app-info/app-info';
import SearchPanel from '../serach-panel/search-panel';
function App() {
    return (
        <div className="app">
            <AppInfo/>
        
            <div className="search-panel">
                <SearchPanel/>
            </div>
        </div>
    )
}

export default App;