import "./Shipment.css";

const Shipment = () => {
	return (
		<section className="shipment">
			<div className="shipment__part">
				<h3 className="shipment__part__h3 h3">
					Shipping
				</h3>
				<span className="shipment__part__span span">
					We are currently shipping each parcel
					directly from Avalon to your wardrobe in
					Narnia. Regular shipping would take around 2
					weeks, however due to the unexpected
					situation with COVID-19, delivery time can
					delay without notice.
				</span>
			</div>
			<div className="shipment__part">
				<h3 className="shipment__part__h3 h3">
					Returns
				</h3>
				<span className="shipment__part__span span">
					You have the possibility to return or
					exchange your order within 14 days after
					delivery. The printed invoice which has been
					sent via email must be included. Your return
					parcel can be sent to our Paris office at
					your expense. Learn more in the Questions &
					Informations section in the footer
				</span>
			</div>
			<div className="shipment__part">
				<h3 className="shipment__part__h3 h3">
					Payment
				</h3>
				<span className="shipment__part__span span">
					At myAmazingShop, we use a securised shopify
					payment process. Therefore, you can pay with
					Visa, Mastercard, American Express, Apple
					Pay, Google Pay and Stripe
				</span>
			</div>
		</section>
	);
};

export default Shipment;
