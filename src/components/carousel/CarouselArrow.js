import "./CarouselArrow.css";

const CarouselArrow = ({ icon, style, onClick, className }) => {
	const myClassName = " carousel";
	return (
		<div
			tabIndex="0"
			className={className + myClassName}
			style={{
				...style,
				display: "block",
				width: "2rem",
				height: "3rem",
			}}
			onClick={onClick}
		>
			<svg className="carousel__icon icon">
				<use href={icon} />
			</svg>
		</div>
	);
};

export default CarouselArrow;
