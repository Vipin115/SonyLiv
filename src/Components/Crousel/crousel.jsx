import Carousel from 'react-bootstrap/Carousel'
// import CarouselCaption from './CarouselCaption';
// import CarouselItem from './CarouselItem';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./crousel.css";
import { Link } from 'react-router-dom';

export const Crousel = ()=>{

   
      
        
         return   <div id = "carousel">
         <Carousel>
            <Carousel.Item>
              <img 
                className="d-block w-100"
                src="https://m.media-amazon.com/images/M/MV5BNDRjY2E1NTgtOTM4MS00ZjYwLWIwNjgtZGE2MmQ5YmQwYzc0XkEyXkFqcGdeQXVyNDI3NjU1NzQ@._V1_.jpg"
                 alt="First slide"
                 height={"600px"}
                 width={"100%"}
              />
              <Carousel.Caption>
                {/* <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Link to = "/video"><img
                className="d-block w-100"
                src={`https://i.ytimg.com/vi/hfhIsxi7p9o/maxresdefault.jpg`}
                 alt="Second slide"
                 height={"600px"}
                 width={"100%"}
                 
              /></Link>
          
              <Carousel.Caption>
                {/* <h3>Second slide label</h3> */}
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={`https://www.glamsham.com/wp-content/uploads/2022/03/Undekhi-Season-2-_-pic-courtesy-instagram.jpg.webp`}
                 alt="Third slide"
                 height={"600px"}
                 width={"100%"}
              />
          
              <Carousel.Caption>
                {/* <h3>Third slide label</h3> */}
                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.koimoi.com/wp-content/new-galleries/2021/05/maharani-review-huma-qureshi-becomes-a-spectacular-queen-but-the-writing-does-not-let-her-shine-as-she-should-have002-1.jpg"
                 alt="First slide"
                 height={"600px"}
                 width={"100%"}
              />
              <Carousel.Caption>
                {/* <h3>First slide label</h3> */}
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={`https://i1.wp.com/asianretrospects.com/wp-content/uploads/2017/05/Baahubali-2-The-Conclusion-Poster.jpg?fit=1280%2C720&ssl=1`}
                 alt="First slide"
                 height={"600px"}
                 width={"100%"}
              />
              <Carousel.Caption>
                {/* <h3>First slide label</h3> */}
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            
          </Carousel>
          <br />
          </div>
          
}