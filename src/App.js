import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter,Route } from 'react-router-dom';
import Header from './common/header/index';
import { Globalstyle } from './style';
import { Globalstyle1 } from './statics/iconfont/iconfont';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Write from './pages/write';
import store from './store/index';

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
          <Globalstyle/><Globalstyle1/>
          <BrowserRouter>
            <div>
              <Header/>
              <Route path='/' exact component={Home}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
              <Route path='/write' exact component={Write}></Route>

            </div>
          </BrowserRouter>
      </Provider>

    );
  }
}

export default App;
