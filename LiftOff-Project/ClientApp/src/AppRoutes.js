//import { Counter } from "./components/Counter";
//import { FetchData } from "./components/FetchData";
//import { Users } from "./components/Users";
import { Home } from "./components/HomePage/Home";
import { CreateAccount } from "./components/CreateAccountsPage/CreateAccount";
import { WatchList } from "./components/WatchListPage/WatchList";
import { UserProfile } from "./components/UserProfilePage/UserProfile";
import { SearchTable } from "./components/SearchResultsPage/SearchTable";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  /*{
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/user',
    element: <Users />
  },*/
  {
    path: '/create-account',
    element: <CreateAccount />
  },
  {
    path: '/watch-list',
    element: <WatchList />
  },
  {
    path: '/search-table',
    element: <SearchTable />
  },
  {
    path: '/user-profile',
    element: <UserProfile />
  },

];

export default AppRoutes;
