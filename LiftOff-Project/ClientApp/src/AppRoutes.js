import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/HomePage/Home";
import { CreateAccount } from "./components/CreateAccountsPage/CreateAccount";
import { LogIn } from "./components/LogIn";
import { SearchResults } from "./components/SearchResultsPage/SearchResults";

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
    path: '/log-in',
    element: <LogIn />
  },
  {
    path: '/search-results',
    element: <SearchResults />
  }
];

export default AppRoutes;
