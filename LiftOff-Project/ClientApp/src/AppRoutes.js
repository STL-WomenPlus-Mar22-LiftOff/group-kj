import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/HomePage/Home";
import { CreateAccount } from "./components/CreateAccountsPage/CreateAccount";
import MyWatchList from "./components/MyWatchList";
import { UserProfile } from "./components/UserProfile";
<<<<<<< HEAD
import { SearchTable } from "./components/SearchResultsPage/SearchTable";

=======
import { Users } from "./components/Users";
>>>>>>> e2b331c (Added back previously deleted files and data that are necessary for checking user login)

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
    path: '/user-profile',
    element: <UserProfile />
  },
  {
        path: '/search-table',
        element: <SearchTable />
  },
];

export default AppRoutes;
