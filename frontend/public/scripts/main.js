//nomodule
// import './utils/supportJavaScript.js';
// import './learn/vanilla.script'

// console.log("React 개발 시작하기! 😊");

/*--------------------------------------------- */

// const App = () => console.log('callReact');

// function createElement(type, props, ...children) {
//   return { type, props: { ...props, children } }
// }

/*--------------------------------------------- */

// class App extends React.Component {

//     constructor(props) {
//       super(props);
//       // component state
//       this.state = {
//         headline: 'React Application'
//       };

//       // component methods binding `this`
//       this.handleChangeHeadline = this.handleChangeHeadline.bind(this);
//     }

//     // this.handleChangeHeadline
//     handleChangeHeadline() {
//       this.setState({
//         headline: 'NEW HEADLINE!! 🎯',
//       });
//     }

//     render() {
//       return (
//         <div data-component="App">
//           <h1>{ this.state.headline }</h1>
//           {/* React의 JSX(React 엘리먼트)에 연결한 이벤트 리스너(함수)는 언제 실행되는가? */}
//           <button type="button" onClick={this.handleChangeHeadline}>헤드라인 변경</button>
//         </div>
//       );
//     }

// }

//   /* -------------------------------------------------------------------------- */

// const reactDomRoot = ReactDOM.createRoot(document.getElementById('root'));

// reactDomRoot.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );

/*--------------------------------------------- */

import App from "./components/App.js";
var reactDomRoot = ReactDOM.createRoot(document.getElementById("root"));
reactDomRoot.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(App, null)));