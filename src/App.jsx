import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => console.log(json));
  }, []);

  return <h1>Cloud Monkey</h1>;
}

export default App;
