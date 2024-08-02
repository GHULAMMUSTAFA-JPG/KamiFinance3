import React from "react";
import Slider from "react-slick";
import logo from "/public/images/icon/trustpilot.png";
import rating from "/public/images/icon/tr_ratting.png";
import Image from "next/image";
const testimonial = [
  {
    id: "01",
    Des: "Kami Finance transformed our business consultancy needs with exceptional expertise. Their strategic insights and professional guidance made navigating complex business challenges effortless and effective.",
    Title: "Sarah K.",
  },
  {
    id: "02",
    Des: "Kami Finance made my visa application process incredibly smooth. Their knowledgeable and friendly support turned a complicated procedure into a straightforward experience. Their commitment is excellent.",
    Title: "John D.",
  },
  {
    id: "03",
    Des: "The immigration services provided by Kami Finance were top-notch. They managed every aspect with great care, making our relocation process stress-free and efficient. We are very grateful for their help.",
    Title: "Maria S.",
  },
  {
    id: "04",
    Des: "Kami Finance’s business services have been outstanding. Their tailored solutions significantly boosted our operational efficiency and contributed to our growth. Their support has been invaluable.",
    Title: "Michael T.",
  },
];

const Testimonial = () => {
  const settings = {
    dots: false,
    arrows: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slider = React.useRef(null);

  return (
    <section
      className="testimonial bg_img pt-130 pb-130"
      style={{ backgroundImage: `url(${"/images/bg/tm_bg.png"})` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="sec-title margin-none-md mb-30-xs mb-125">
              <h2 className="mb-70 wow skewIn">
                Clients Success <br />
                Stories with Us <br />
                <span>Now it's Your Turn</span>
              </h2>
              <p>
                Embark on a Global Exploration: <br /> Experience Joy in 190+
                Countries <br /> and Across the World
              </p>
            </div>
            <div className="xb-testimonial__nav ul_li">
              <div
                className="tm-nav-item tm-button-prev"
                onClick={() => slider?.current?.slickPrev()}
              ></div>
              <div
                className="tm-nav-item tm-button-next"
                onClick={() => slider?.current?.slickNext()}
              ></div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="xb-swiper-sliders">
              <div className="xb-carousel-inner">
                <div className="xb-testimonial-slider xb-swiper-container">
                  <Slider ref={slider} {...settings}>
                    {testimonial.map((testimonial, tsm) => (
                      <div className="xb-testimonial" key={tsm}>
                        <div className="xb-item--inner text-center">
                          <div className="xb-item--img">
                            <Image src={logo} alt="" />
                          </div>
                          <div className="xb-item--content">
                            "{testimonial.Des}"
                          </div>
                          <div className="xb-item--bottom">
                            <div className="xb-item--ratting">
                              <Image src={rating} alt="" />
                            </div>
                            <h3 className="xb-item--title">
                              {testimonial.Title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
