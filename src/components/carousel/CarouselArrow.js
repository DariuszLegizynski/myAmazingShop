import "./CarouselArrow.css";

const CarouselArrow = ({ icon, style, onClick, className }) => {
	return (
		<div
			tabIndex="0"
			className={`${className} carousel`}
			style={{
				...style,
				display: "block",
				width: "2rem",
				height: "3rem",
			}}
			onClick={onClick}
			onKeyPress={onClick}
		>
			<svg className="carousel__icon icon">
				<use href={icon} />
			</svg>
		</div>
	);
};

export default CarouselArrow;
