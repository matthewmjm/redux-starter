import './App.css';
import { Component } from 'react'
import CharactersContainer from './components/CharactersContainer';
import { connect } from 'react-redux'

class App extends Component{

  // state = {
  //   characters: []
  // }
  
    componentDidMount(){
      fetch("https://rickandmortyapi.com/api/character/")
      .then(response => response.json())
      .then(({results}) => this.props.setCharacters(results))
    }
  
    render(){
      return (
        <div className="App">
          <CharactersContainer characters={this.props.characters} />
        </div>
      );
    }
  }
  
  const mapStateToProps = (state) => {
    return {
      characters: state.characters,
      user: state.user
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      setCharacters: (characters) => dispatch({type: 'SET_CHARACTERS', payload: characters})
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);

// currying

// const myFunction = (params1, param2) => (component) => connectedComponent

// function myFunction(params1, params2){
//   return function(component){
//     return connectedComponent
//   }
// }