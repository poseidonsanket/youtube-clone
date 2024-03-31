import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Correct import
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchPage from "./components/SearchPage";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Head />
          <Routes>
            <Route path="/" element={<Body />}>
              <Route index element={<MainContainer />} />
              <Route path="watch" element={<WatchPage />} />
              <Route path="search" element={<SearchPage />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
