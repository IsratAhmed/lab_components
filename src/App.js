import './App.css';
import Title from './Title';
import Navigation from './Navigation';
import DisplayRecipes from './DisplayRecipes';
import FormNewRecipe from './FormNewRecipe';

function App() {
  return (
    <div>
      <Title />
      <Navigation />
      <DisplayRecipes />
      <FormNewRecipe />
    </div>
  );
}

export default App;
