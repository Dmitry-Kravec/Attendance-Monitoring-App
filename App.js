import React from "react";

import { Provider } from "react-redux";
import store from "./src/redux/store";

import appServiceContext from "./src/components/app-service-context";
// import AppService from "./services/appService";
import ApiServiceAxios from "./src/services/apiServiceAxiosAPI";
import MainComponent from "./src/components/main-component";

// const appService = new AppService();
const appService = new ApiServiceAxios();

const App = () => {
  const { Provider: AppServiceProvider } = appServiceContext;
  return (
    <Provider store={store}>
      <AppServiceProvider value={appService}>
        <MainComponent />
      </AppServiceProvider>
    </Provider>
  );
};

export default App;
