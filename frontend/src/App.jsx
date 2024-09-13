import ParentRouter from "./components/parentrouter";
import {App} from "@capacitor/app"
import { FormProvider } from "./contextApi/selectelement_context";
import { useEffect } from "react";
import { IonApp } from '@ionic/react';

import { setupIonicReact } from '@ionic/react';

// ionic css styling
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

setupIonicReact();

const MyApp = () => {
  useEffect(() => {
    const handler = App.addListener("backButton", (event) => {
      if(window.location.pathname === "/") {
        App.exitApp();
      }else{
        window.history.back()
      }
    })

    return () => {
      handler.remove();
    }
  }, [])
  return (
    <>
      {/* for importing parentRouter component below */}
      <IonApp>

      <FormProvider>
        <ParentRouter />
      </FormProvider>
      </IonApp>

    </>
  );
};

export default MyApp;
