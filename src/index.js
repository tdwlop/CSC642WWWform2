import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router><App /></Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//Sources
//https://www.ordinarycoders.com/blog/article/react-bootstrap-forms
//https://react-bootstrap.github.io/components/forms/
//https://react-bootstrap.github.io/layout/grid/
//https://stackoverflow.com/questions/18814940/css-center-div-inside-container
//https://colorhunt.co/palette/f3f1f5f0d9ffbfa2db7f7c82
//https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom
//https://stackoverflow.com/questions/30202755/react-router-open-link-in-new-tab
//https://github.com/hCaptcha/react-hcaptcha
//https://codesandbox.io/s/react-hcaptchaform-example-invisible-f7ekt?file=/src/Form.jsx
//https://github.com/vastus/node-hcaptcha
//https://docs.hcaptcha.com/
//https://www.regextester.com/95629
//https://www.bing.com/api/maps/sdkrelease/mapcontrol/isdk/searchbyaddress#JS
//https://stackoverflow.com/questions/32728038/my-bootstrap-alert-box-does-not-close-when-dismiss-button-is-clicked
//https://stackoverflow.com/questions/618089/can-i-insert-elements-to-the-beginning-of-an-element-using-appendchild
//https://stackoverflow.com/questions/10804273/how-to-align-3-divs-next-to-each-other
//https://stackoverflow.com/questions/52642723/javascript-runtime-error-microsoft-is-undefined-bing-maps-version-7
//https://docs.microsoft.com/en-us/bingmaps/v8-web-control/map-control-concepts/search-module-examples/basic-geocode-example
//https://docs.microsoft.com/en-us/bingmaps/v8-web-control/map-control-api/locationrect-class
//https://docs.microsoft.com/en-us/bingmaps/v8-web-control/map-control-concepts/search-module-examples/basic-geocode-example
//https://github.com/Microsoft/BingMapsV8CodeSamples/blob/master/Samples/Map/Lazy%20Loading%20the%20Map.html
//https://www.npmjs.com/package/react-bingmaps-plus
//https://docs.microsoft.com/en-us/bingmaps/rest-services/locations/find-a-location-by-address
//https://stackoverflow.com/questions/10346722/how-to-split-a-string-by-white-space-or-comma
//https://www.npmjs.com/package/bingmaps-react
//the fetch example from CSC 317
//https://www.youtube.com/watch?v=5I37iVCDUTU
//https://docs.microsoft.com/en-us/bingmaps/rest-services/imagery/get-a-static-map
//https://stackoverflow.com/questions/16812039/how-to-check-valid-email-format-entered-in-edittext#:~:text=You%20can%20use%20regular%20expression%20%28Regex%29%20to%20check,message%20if%20not%20matches%20with%20email%20pattern%20%7D
//https://medium.com/swlh/using-react-router-on-github-pages-2702afdd5d0c
//https://github.com/facebook/create-react-app/issues/1765
//https://github.com/fisshy/react-scroll/issues/445
//https://javascript.info/async-await
reportWebVitals();
