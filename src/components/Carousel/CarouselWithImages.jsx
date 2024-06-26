import React from "react";
import { Carousel } from "react-bootstrap";
import { useWindowSize } from "../../hooks";
import { useMemo } from "react";

const images = [
  {
    url: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1701168526/Frame_1000004041_1_xjrdak.svg",
    caption: "Beautiful Landscape",
    description: "A stunning landscape with mountains and a lake.",
  },
  {
    url: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1701169580/Frame_1000004041_2_qadgca.svg",
    caption: "Beautiful Landscape",
    description: "A stunning landscape with mountains and a lake.",
  },
  {
    url: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1701170249/Frame_1000004041_3_uoqrix.svg",
    caption: "Beautiful Landscape",
    description: "A stunning landscape with mountains and a lake.",
  },
  {
    url: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1701171248/Frame_1000004041_5_jwdefe.svg",
    caption: "Beautiful Landscape",
    description: "A stunning landscape with mountains and a lake.",
  },
  {
    url: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1701171955/Frame_1000004041_6_vl1sjj.svg",
    caption: "Beautiful Landscape",
    description: "A stunning landscape with mountains and a lake.",
  },
  {
    url: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1701172348/Frame_1000004041_7_nnnlfg.svg",
    caption: "Beautiful Landscape",
    description: "A stunning landscape with mountains and a lake.",
  },
  {
    url: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1701172592/Frame_1000004041_8_kcktml.svg",
    caption: "Beautiful Landscape",
    description: "A stunning landscape with mountains and a lake.",
  },
  // Add more image objects as needed
];

const texts = [{ "title": 'We Drive the Process Forward', "desc": "We possess a deep understanding of building solutions, and we know precisely when the right time is to initiate one. Mindful of realistic timeframes, we actively drive the process to significantly enhance your chances of success." },

{ "title": "Our In-House Venture Building Team", "desc": "We're fully invested in your success, which is why we've assembled our own team of experienced experts to provide guidance during those critical initial stages of building your business. We enhance your skill set when you need it most and share your vision, drawing from the expertise of our other teams." }
  ,

{ "title": "A New Disruptive Business Model", "desc": "Let's co-create a groundbreaking business, either as one of our business units or as a spin-off company that you'll lead to success. We're dedicated to consumerizing the enterprise by delivering an easy-to-use, affordable, and automated product that consistently delivers value." },

{ "title": "Entrepreneurship and Intrapreneurship", "desc": "Whether you have conceptualized ideas or need to birth them from your vision and prototypes, we possess the versatility to construct the ideal team. We can either tap into our in-house HR resources or craft one from the ground up to fulfill your unique needs." },

{ "title": "We Are Your Co-Founders", "desc": "In the world of business, a visionary entrepreneur requires a tech-savvy co-founder, and vice versa. We step into the role of your co-founders, steering you through the journey with unwavering inspiration and empowerment. With us, you're never alone." },

{ "title": "Seed and Growth Capital", "desc": "While developing your business model, you won't need to juggle multiple investors. We significantly reduce the noise and overhead associated with seeking funding. We'll finance your efforts as you create value for customers and develop a business around it, all while adhering to our capital efficiency framework." },

{ "title": "From Idea to Execution", "desc": "Building a company is a formidable challenge. There are various aspects of the business that will demand your attention. We can manage most of that complexity for you while you maintain control, allowing you to concentrate on developing your product." },
]
const CarouselWithImages = () => {
  const { width: windowWidth } = useWindowSize();

  const isMobile = useMemo(() => windowWidth < 900, [windowWidth]);
  console.log("mobile", isMobile)
  return (

    (
      isMobile ? <Carousel style={{
        width: "100%",
        display: "flex", justifyContent: "center"
      }} data-bs-theme="dark" interval={2000}>
        {texts.map((item, index) => <Carousel.Item style={{
          textAlign: "center", marginTop: '20px',
          marginBottom: '30px',
        }} key={index}>

          <p style={{
            textAlign: "center", fontWeight: "bolder", fontSize: "1.5rem"
          }}>



            {item.title}

          </p>


          <p style={{
            padding: "0px 60px",
            textAlign: "center", fontSize: "1rem"
          }}>



            {item.desc}

          </p>
        </Carousel.Item>)}

      </Carousel> :

        <Carousel interval={2000}>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                width={500}
                height={500}
                src={image.url}
                alt={image.caption}
              />
            </Carousel.Item>
          ))}
        </Carousel>)
  );
};

export default CarouselWithImages;
