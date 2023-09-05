import React from "react";
import ShoppingList from "./shoppinglist.jsx";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	//const (listItem, setListItem) = useState('');

	return (
		<>
		 <div>
			<p>This is the Shopping List</p>
			< ShoppingList />
		</div> 
		</>
	);
};

export default Home;
