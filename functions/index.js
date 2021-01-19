const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
	"sk_test_51IAiWLJPul52MnZXX2Xs9VKzzrfJadfdJqFi714kL4dfdNqBrEyWXwe1KGltxSWUkCSjDUlqL2Bs109CR1u6LPdk00wavy4jIZ"
);

//API

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) =>
	response.status(200).send("Hello World")
);

app.post("/payment/create", async (request, response) => {
	const totalAmount = request.query.totalAmount;

	console.log("Payment request received", totalAmount);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: totalAmount,
		currency: "eur",
	});

	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

// Listen command
exports.api = functions.https.onRequest(app);
