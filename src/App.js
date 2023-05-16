import './App.css';
import {Header} from "./component/header/Header";
import {Content} from "./component/content/Content";
import {Bottom} from "./component/bottom/Bottom";

function App() {
    return (
        <div className={'container'}>
            <Header/>
            <Content/>
        </div>
    );
}

export default App;
