import Body from "./component/Body";
import appStore from "./store/appStore";
import {Provider} from "react-redux";

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
