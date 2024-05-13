// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { SnackbarProvider } from 'notistack';


// // // const root = ReactDOM.createRoot(document.getElementById('root'));
// // // root.render(
// // //   <React.StrictMode>
// // //     <App />
// // //   </React.StrictMode>
// // // );
// ReactDOM.render(
//   <SnackbarProvider maxSnack={3}>
//     <App />
//   </SnackbarProvider>,
//   document.getElementById('root')
// );
// reportWebVitals();

// this below code changed for snackbar
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { SnackbarProvider } from 'notistack';

// ReactDOM.render(
//   <SnackbarProvider maxSnack={3} anchorOrigin={{
//     vertical:'top',
//     horizontal:'center'
//   }}>
//     <App />
//   </SnackbarProvider>,
//   document.getElementById('root')
// );
// reportWebVitals();



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SnackbarProvider } from 'notistack';
import { UserProvider } from './Components/UserContext'; // Make sure to import the UserProvider

ReactDOM.render(
  <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
    <UserProvider> {/* Wrap your entire app with UserProvider */}
      <App />
    </UserProvider>
  </SnackbarProvider>,
  document.getElementById('root')
);
reportWebVitals();

