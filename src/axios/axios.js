import axios from "axios";

const instance = axios.create({
	baseURL:
		"https://us-central1-myamazingshop-ae51c.cloudfunctions.net/api",
});

export default instance;

// for debug use the following link: "http://localhost:5001/myamazingshop-ae51c/us-central1/api"
