import * as React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { hot } from "react-hot-loader/root";
import { HeaderMenu } from "./features/headerMenu/headerMenu";
import { CookList } from "./features/cookList/cookList";
import { CookInfo } from "./features/cookInfo/CookInfo";
import { CookDescription } from "./components/cookDescription/CookDescription";
import 'normalize.css';
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {ListIcon} from "./assets/icons/listIcon";
import {SearchIcon} from "./assets/icons/searchIcon";
import {RandomIcon} from "./assets/icons/randomIcon";
import {FavouriteIcon} from "./assets/icons/favouriteIcon";
import {AddIcon} from "./assets/icons/addIcon";
const store = configureStore();

const tabs = [
    {
        icon: <ListIcon
            height={'40'}
            width={'40'}
            className={'listButton button'}
        />,
        link: '/'
    },
    {
        icon: <SearchIcon height={'40'}
                          width={'40'}
                          className={'searchButton button'}
        />,
        link: '/search'
    },
    {
        icon:  <RandomIcon
            height={'40'}
            width={'40'}
            className={'randomButton button'}
        />,
        link: '/random'
    },
    {
        icon:   <FavouriteIcon
            height={'40'}
            width={'40'}
            className={'favouriteButton button'}
        />,
        link: '/fav'
    },
    {
        icon:   <AddIcon
            height={'40'}
            width={'40'}
            className={'addButton button'}
        />,
        link: '/add'
    }

];



const App = () => {

    return (
        <Provider store={store}>
              <Router>
                  <HeaderMenu tabs = {tabs} />
                      <Switch>
                          <Route
                              path='/item/:cookId'
                              component={ CookDescription }>
                          </Route>
                          <Route
                              exact path='/'
                              component={ CookList }
                          />
                          <Route
                              exact path='/add'
                              component={ CookInfo }/>
                          <Route />
                      </Switch>
              </Router>
        </Provider>
    );
  };

export default hot(App);
