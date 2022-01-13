import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainContainer from './components/MainContainer'
import {Provider} from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <MainContainer/>
    </Provider>
  );
}

export default App;
