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
		<article>
			<h1>Leksaker till stranden</h1>
				<p>Vi har det mesta inom strandutflykten.</p>
				<img src={Summerheading} alt="letters of summer around stuff of summerpicture" className='summer-picture'
				/>
				<p>Strandleksaker för lata dagar i solen.</p>
				<p>Vi har olika leksaker att erbjuda för strandbesöket både för stora och små.</p>
		</article>
		<section>
			<div className="photo-container-girl">
				<img src={SummerGirl} alt="Girl with swimsuit and inflateted duck" className='girl-swimsuit'
				/>
			</div>
			<div className='photo-container'>
				<img src={BucketBeach} alt="picture of the buckets and spade in the sand of a beach" className='buckets'
				/>
				<div className='text-container'>
					<p>Vill du se mer produkter?</p>
					<Link to="/våra-produkter">
					<button className='product-button'>Klicka här!</button>
					</Link>
				</div>
				<img src={Beachplay} alt="children hands in the sand and toys" 
				className='beachplay'
				/>
			</div>
		</section>
	</main>
	)
}

export default Home