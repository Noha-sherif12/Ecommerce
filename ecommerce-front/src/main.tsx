import { createRoot } from 'react-dom/client'
import AppRouter from '@routes/AppRouter';

//redux
import { Provider } from 'react-redux';
import {store, persistor} from '@store';
import { PersistGate } from 'redux-persist/integration/react';


//multi-language
import './i18n'



//axios
import './services/axios-global'




//slick slider 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


//toaster 
import { Toaster } from 'react-hot-toast'

//styles
import 'bootstrap/dist/css/bootstrap.min.css';
import "@styles/global.css"


createRoot(document.getElementById('root')!).render(

  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <AppRouter />
    <Toaster />
    </PersistGate>
  </Provider >
)
