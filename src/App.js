import './App.css';
import {Header} from "./component/header/Header";
import {Content} from "./component/content/Content";
import {HeaderProvider} from "./context/HeaderContext";

function App() {
    return (
        <HeaderProvider>
            <div className={'container'}>
                <Header/>
                <Content/>
            </div>
        </HeaderProvider>
    );
}

export default App;
