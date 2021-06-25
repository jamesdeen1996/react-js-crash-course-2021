import Header from './components/Header'

const App = () => {
  return (
    <div className="container">
      <Header />
    </div>
  );
}

  //This is example of Using a Class not a Components
// class App extends React.Component{
//   render(){
//     return <h1>Hello from a class</h1>
//   }
// }


//CSS IN JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }



export default App;
