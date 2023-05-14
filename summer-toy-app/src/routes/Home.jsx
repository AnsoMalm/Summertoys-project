/*Bilder till sidan*/ 
import Summerheading from '../assets/img/summer-backgroundpicture.jpg'
import SummerGirl from '../assets/img/girl-with-a-inflateted-duck.avif'
import BucketBeach from '../assets/img/three-buckets-with-sand-spade-beach.avif'
import Beachplay from '../assets/img/plastic-children-toys-sandpit-outdoor.jpg'
/*Andra importer*/
import { Link } from 'react-router-dom'


const Home = () => {
	
	return (
		<main>
		<article className='article-container'>
				<img src={Summerheading} alt="letters of summer around stuff of summerpicture" className='summer-picture'
				/>
					<h1>Strandleksprodukter för härliga dagar </h1>
					<p className='info-container'>Vi har det mesta för strandutflykten. Vi erbjuder olika sommarleksaker med bästa kvalité på våra alla produkter. </p>
		
		</article>
		<section className="section-container">
			<div className="photos">
			<div className="photo-container-girl">
				<img src={SummerGirl} alt="Girl with swimsuit and inflateted duck" className='girl-swimsuit'
				/>
			</div>
			<div className='photo-container'>
				<img src={BucketBeach} alt="picture of the buckets and spade in the sand of a beach" className='buckets'
				/>
				<div className='text-container'>
					<p>Vill du se mer produkter?</p>
					<Link to="/products">
					<button className='product-button'>Klicka här!</button>
					</Link>
				</div>
				<img src={Beachplay} alt="children hands in the sand and toys" 
				className='beachplay'
				/>
			</div>
		</div>
		</section>
	</main>
	)
}

export default Home