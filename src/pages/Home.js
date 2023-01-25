import Carousel from 'react-bootstrap/Carousel';
import ProductsPage from './ProductsPage';

function Home() {
  return (
  <>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block imag"
         src="images/cart.jpg"
          alt="Redmi Phone"
        />
        <Carousel.Caption>
          <h3>order from us</h3>
          <p>Your Every day delievery for free</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block imag"
         src="images/ipad.png"
          alt="Fragrance"
        />

        <Carousel.Caption>
          <h3>sales</h3>
          <p>extra 10% off on product at checkout</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block imag"
        src="images/discount.avif"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>order from us</h3>
          <p>
          Your Every day delievery for free
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block imag"
        src="images/versace.avif"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>sales</h3>
          <p>
          extra 10% off on product at checkout
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   <div>
    <ProductsPage />
   </div>
</>
      

  )
}

export default Home;