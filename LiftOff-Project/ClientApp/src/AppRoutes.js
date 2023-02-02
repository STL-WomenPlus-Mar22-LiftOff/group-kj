import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/HomePage/Home";
import { CreateAccount } from "./components/CreateAccountsPage/CreateAccount";
import { SearchResults } from "./components/SearchResultsPage/SearchResults";
import MyWatchList from "./components/MyWatchList";
import { UserProfile } from "./components/UserProfile";
import { Users } from "./components/Users";
import WatchList from "./components/WatchList"

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
    path: '/user',
    element: <Users />
  },
  {
    path: '/my-watch-list',
    element: <MyWatchList />
    },
    {
        path: '/watch-list',
        element: <WatchList />
    },
  {
    path: '/search-results',
    element: <SearchResults />
  },
  {
    path: '/user-profile',
    element: <UserProfile />
  },

];

export default AppRoutes;
