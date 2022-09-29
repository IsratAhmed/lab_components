const FormNewRecipe = () => {

    return (
        <form id="FormNewRecipe">   
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
    )
}

export default FormNewRecipe;