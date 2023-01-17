import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/HomePage/Home";
import { CreateAccount } from "./components/CreateAccountsPage/CreateAccount";
import { LogIn } from "./components/LogIn";
import { SearchResults } from "./components/SearchResultsPage/SearchResults";
import MyWatchList from "./components/MyWatchList";
import { UserProfile } from "./components/UserProfile";
import  AllMovies  from "./components/AllMovies";


const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/create-account',
    element: <CreateAccount />
    },
    {
        path: '/my-watch-list',
        element: <MyWatchList />
    },
  {
    path: '/log-in',
    element: <LogIn />
  },
  {
    path: '/search-results',
    element: <SearchResults />
  },
  {
    path: '/User-Profile',
    element: <UserProfile />
  },

  {
    path: '/All-Movies',
    element: <AllMovies />
  }

];

export default AppRoutes;
