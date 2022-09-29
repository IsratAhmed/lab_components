import './App.css';

function App() {
  return (
    <div>
      <h1 id="bakery">Welcome to the bakery!</h1>
      <h2 id="title">Welcome to the bakery!</h2>
      <nav id="nav">
        <ul>
          <a href="#">Home</a>
          <a href="#">Browse Recipes </a> 
          <a href= "#">Shop</a>
        </ul>
      </nav>
      <form>
        <input id= "input" type= "text" placeholder="search..."></input>
        <input id="submit" type="submit" value= "search"></input>             
      </form>
      <li id="array_1">
        <img id="pic1" src="https://i.pinimg.com/originals/12/a9/11/12a9112f9acdb79ffd123c8f34252247.jpg"  alt="LemonDrizzle"></img>
        <ul>cakeName: Lemon Drizzle</ul>
        <ul>ingredients: [eggs, butter, lemon  zest, sugar, self-raising flour]</ul>
        <ul>rating: 5</ul>
      </li>
      <li id="array_2">
        <img id="pic2" src="https://cdn.mos.cms.futurecdn.net/ZNDoeYFevq8rvxYhJJLAjR.jpg"  alt="TeaLoaf"></img>
        <ul>cakeName: Tea Loaf</ul>
        <ul>ingredients: [eggs, oil, dried fruit, sugar, self-raising flour, strong tea]</ul>
        <ul>rating: 3</ul>
      </li>
      <li id="array_3">
        <img id="pic3" src="https://preppykitchen.com/wp-content/uploads/2019/10/Brownie-Recipe-Square-1200px-preppy-kitchen.jpg"  alt="Brownie"></img>
        <ul>cakeName: Brownie</ul>
        <ul>ingredients: [chocolate, eggs, flour, butter, walnuts]</ul>
        <ul>rating: 4</ul>
      </li>
      <li id="array_4">
        <img id="pic4" src="https://charlotteslivelykitchen.com/wp-content/uploads/2019/11/carrot-cake-3.jpg"  alt="CarrotCake"></img>
        <ul>cakeName: Carrot Cake</ul>
        <ul>ingredients: [carrots, walnuts, oil, cream cheese, flour, sugar]</ul>
        <ul>rating: 5</ul>
      </li>
      <form>
        <h3> Submit A new Recipe:</h3>

        <label for= "name"> Recipe Name:</label>
        <input id= "user-input-RecipeName" type= "text" placeholder=" Recipe Name"></input>
        
        <br></br>

        <label for= "ingredients"> Ingredients:</label>
        <input id= "user-input-ingredients"  type= "text" placeholder="Ingredients"></input>

        <br></br>

        <label  id= "instructions-label"for= "instructions"> Instructions:</label>
        <input id= "user-input-instructions" type= "text" width= "100px" placeholder="Instructions"></input>
        
        <br></br>

        <input id="submitButton-form" type="submit" value= "Submit" ></input>
                   
      </form>

    </div>
  );
}

export default App;
