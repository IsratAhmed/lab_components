const Navigation = () => {
    return (
        <div>
            <nav id="nav">
                <ul>
                    <a href="#">Home</a>
                    <a href="#">Recipes</a>
                    <a href="#">Shop</a>
                    <input id="input" type="text" placeholder="search..."></input>
                    <input id="submit" type="submit" value="search"></input>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;