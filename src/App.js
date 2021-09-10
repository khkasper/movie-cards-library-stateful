import React from 'react';
import movies from './data';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ movies } />
    </div>
  );
}

export default App;

// Agradecimento ao Lucas Caribé da Turma 13 - Tribo B. Sa ajuda foi fundamental no processo de separar funções em novos componentes.
