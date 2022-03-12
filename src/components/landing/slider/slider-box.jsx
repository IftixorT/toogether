import classes from './slider.module.css'

function SliderBox({data}) {
 return (
 	<div className={classes.slideBox}>
									<img className={data.class} src={data.img} alt="food" />
									<h3 className={classes.cardTitle}>{data.title}</h3>
									<p className={classes.cardText}>{data.text}</p>
									<h1 className={classes.cardPrice}>{data.price}</h1>
								</div>
 )
}

export default SliderBox
