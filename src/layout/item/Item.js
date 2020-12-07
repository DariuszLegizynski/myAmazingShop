import { Link } from "react-router-dom";

export const Item = () => {
	return (
		<div>
			This is an Item Page
			<Link to={"/"}>BACK</Link>
		</div>
	);
};

export default Item;
