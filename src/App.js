import './App.css';
import Header from './components/ui/Header.component';
import CharacterGrid from './characters/CharacterGrid.component';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Search from './components/ui/Search';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItem = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      setItems(result.data);
      setIsLoading(false);
    }

    fetchItem();
  }, [query]);


  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
