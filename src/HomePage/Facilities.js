

import React, { useState, useEffect } from 'react';

const Facilities = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      text: "I have tried a lot of food delivery services but Plate is something out of this world! Their food is really healthy and it tastes great, which is why I recommend this company to all my friends!",
      author: "Peter Lee",
      img: "https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-01-179x179.png"
    },
    {
      text: "The service provided by Plate is amazing! Their food is always fresh and delicious. I am very satisfied and will continue to order from them.",
      author: "Jane Doe",
      img: "https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-02-306x306.png"
    },
    {
      text: "Plate has changed the way I think about food delivery. Their healthy and tasty meals are perfect for my busy lifestyle. Highly recommend!",
      author: "John Smith",
      img: "https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-03-179x179.png"
    }
  ];

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const facilitiesSection = document.getElementById('facilities');
      if (facilitiesSection) {
        const top = facilitiesSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          setIsVisible(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <style>{`
        .facilities {
          width: 80%;
          margin: auto;
          padding-top: -100px;
          opacity: 0;
          transform: translateX(10%);
          transition: opacity 1s ease, transform 1s ease;
        }

        .facilities.visible {
          opacity: 1;
          transform: translateX(0%);
        }

        .facilities h1 {
          text-align: center;
        }

        .facilities-col {
          flex-basis: 100%;
          margin-bottom: 30px;
          text-align: center;
        }

        .facilities-col img {
          width: 100%;
          border-radius: 10px;
          display: block;
          margin: 0 auto;
        }

        .facilities-col h3 {
          margin-top: 16px;
          margin-bottom: 15px;
          text-align: center;
        }

        .testimonial {
          width: 80%;
          margin: auto;
          padding-top: 40px;
          text-align: center;
        }

        .testimonial-col {
          flex-basis: 100%;
          margin-bottom: 5%;
          background-color: #fff3f3;
          padding: 25px;
          cursor: pointer;
        }

        .testimonial-col img {
          height: 40px;
          border-radius: 50%;
        }

        .testimonial-col h3 {
          margin-top: 15px;
        }

        .cta {
          margin: 100px auto;
          width: 80%;
          background-image: url("https://i.postimg.cc/C5sDfzJ1/banner2.jpg");
          background-position: center;
          background-size: cover;
          border-radius: 10px;
          text-align: center;
          padding: 100px 0;
        }

        .cta:hover {
          background-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.1),
              rgba(0, 0, 0, 0.1)
            ),
            url("https://i.postimg.cc/C5sDfzJ1/banner2.jpg");
        }

        .cta h1 {
          color: #fff;
          margin-bottom: 40px;
          padding: 0;
        }

        @media (min-width: 768px) {
          .row {
            display: flex;
            justify-content: space-between;
          }

          .facilities-col {
            flex-basis: 30%;
          }

          .testimonial-col {
            flex-basis: 48%;
          }
        }

        @media (max-width: 767px) {
          .facilities-col h3 {
            text-align: center;
          }
        }
      `}</style>

      <section id="facilities" className={`facilities ${isVisible ? 'visible' : ''}`}>
       
        <div className="row">
          <div className="facilities-col">
            <img style={{height:"80%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfmRwCsDVE3WcswKKeB2mcjmU7ihw15HXI2sDHT18daQ&s" alt="Library" />
            <h3>Library</h3>
          </div>
          <div className="facilities-col" >
            <img style={{height:"80%"}} src="https://cdn.pixabay.com/photo/2017/06/14/12/26/campus-2402041_960_720.jpg" alt="Playground" />
            <h3>Playground</h3>
          </div>
          <div className="facilities-col">
            <img style={{height:"80%"}} src="https://i.postimg.cc/FHmYLXwX/cafeteria.png" alt="Cafeteria" />
            <h3>Canteen</h3>
          </div>
        </div>
      </section>

    
      <style>
  {
    `
    /* === HEADING STYLE #1 === */
.one h1 {
  text-align: center;
  text-transform: uppercase;
  padding-bottom: 5px;
}
.one h1:before {
  width: 28px;
  height: 5px;
  display: block;
  content: "";
  position: absolute;
  bottom: 3px;
  left: 50%;
  margin-left: -14px;
  background-color: #b80000;
}
.one h1:after {
  width: 100px;
  height: 1px;
  display: block;
  content: "";
  position: relative;
  margin-top: 25px;
  left: 50%;
  margin-left: -50px;
  background-color: #b80000;
}


h1 {
  position: relative;
  padding: 0;
  margin: 0;
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 40px;
  color: #080808;
  -webkit-transition: all 0.4s ease 0s;
  -o-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}

h1 span {
  display: block;
  font-size: 0.5em;
  line-height: 1.3;
}
h1 em {
  font-style: normal;
  font-weight: 600;
}

`
  }
</style> 
<div className="one">
  <h1>What Our Student Says</h1>
       </div>
      
      

{/* <style>
  {
    `
//     *{
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
// }
// body{
//     font-size: 16px;
//     font-weight: 300;
//     line-height: 23px;
//     font-family: 'Poppins', sans-serif;
// }
ul{
    list-style-type:none;
}
a,a:hover{
    text-decoration: none;
}
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700');
body{
    font-family: 'Montserrat', sans-serif;
    .testimonial{
        padding: 100px 0;
        .row{
            .tabs{
                all: unset;
                margin-right: 50px;
                display: flex;
                flex-direction: column;
                li{
                    all:unset;
                    display: block;
                    position: relative;
                    &.active{
                        &::before{
                            position: absolute;
                            content: "";
                            width: 50px;
                            height: 50px;
                            background-color: #71b85f;
                            border-radius: 50%;
                        }
                    }
                    &.active{
                        &::after{
                            position: absolute;
                            content: "";
                            width: 30px;
                            height: 30px;
                            background-color: #71b85f;
                            border-radius: 50%;
                        }
                    }
                    &:nth-child(1){
                       align-self: flex-end;
                       &::before{
                            left: 64%;
                            bottom: -50px;
                       }
                       &::after{
                            left: 97%;
                            bottom: -81px;                           
                       }
                       figure{
                            img{
                                margin-left:auto;
                            }
                       }
                    }
                    &:nth-child(2){
                        align-self: flex-start;
                        &::before{
                            right: -65px;
                            top: 50%;                    
                        }
                        &::after{
                            bottom: 101px;
                            border-radius: 50%;
                            right: -120px;
                        }
                        figure{
                            img{
                                margin-right:auto;
                                max-width: 300px;
                                width: 100%;
                                margin-top: -50px;
                            }
                        }
                    }
                    &:nth-child(3){
                        align-self: flex-end;
                        &::before{
                            right: -10px;
                            top: -66%;                  
                        }
                        &::after{
                            top: -130px;
                            border-radius: 50%;
                            right: -46px;
                        }
                        figure{
                            img{
                                margin-left:auto;
                                margin-top: -50px;
                            }
                        }
                        &:focus{
                            border: 10px solid red;
                        }
                    }
                    figure{
                        position: relative;
                        img{
                            display: block;
                        }
                        &::after{
                            content: "";
                            position: absolute;
                            top:0;
                            z-index: -1;
                            width: 100%;
                            height: 100%;
                            border: 4px solid #dff9d9;
                            border-radius: 50%;
                            -webkit-transform: scale(1);
                            -ms-transform: scale(1);
                            transform: scale(1);
                            -webkit-transition: 0.3s;
                            -o-transition: 0.3s;
                            transition: 0.3s;
                        }
                        &:hover{
                            &::after{
                                -webkit-transform: scale(1.1);
                                -ms-transform: scale(1.1);
                                transform: scale(1.1);
                            }
                        }
                    }
                }
                &.carousel-indicators{
                    li.active{
                        figure{
                            &::after{
                                -webkit-transform: scale(1.1);
                                -ms-transform: scale(1.1);
                                transform: scale(1.1);
                            }
                        }
                    }
                }
            }
            .carousel{
                > h3{
                    font-size: 20px;
                    line-height: 1.45;
                    color: rgba(0,0,0,.5);
                    font-weight: 600;
                    margin-bottom: 0;
                }
                h1{
                    font-size: 40px;
                    line-height: 1.225;
                    margin-top: 23px;
                    font-weight: 700;
                    margin-bottom: 0;
                }
                .carousel-indicators{
                    all: unset;
                    padding-top: 43px;
                    display: flex;
                    list-style: none;
                    li{
                        background: #000;
                        background-clip: padding-box;
                        height: 2px;
                    }
                }
                .carousel-inner{
                   .carousel-item{
                        .quote-wrapper{
                            margin-top: 42px;
                            p{
                                font-size: 18px;
                                line-height: 1.72222;
                                font-weight: 500;
                                color: rgba(0,0,0,.7);
                            }
                            h3{
                                color: #000;
                                font-weight: 700;
                                margin-top: 37px;
                                font-size: 20px;
                                line-height: 1.45;
                                text-transform: uppercase;
                            }
                        }
                   }
                }
            }
        }
    }
}
@media only screen and (max-width: 1200px) {
    body{
        .testimonial{
            .row{
                .tabs{
                    margin-right: 25px;
                }
            }
        }
    }
}
@media only screen and (max-width: 567px) {
    
}`
  }
</style> */}
<section className="testimonial">
      {/* <div className="container">
        <div className="row">
          <div className="col-lg-6 d-none d-lg-block">
            <ol className="carousel-indicators tabs">
              {testimonials.map((testimonial, index) => (
                <li
                  key={index}
                  className={index === activeIndex ? 'active' : ''}
                  onClick={() => handleIndicatorClick(index)}
                >
                  <figure>
                    <img
                      src={testimonial.img}
                      className="img-fluid"
                      alt=""
                    />
                  </figure>
                </li>
              ))}
            </ol>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <div id="carouselExampleIndicators" className="carousel slide">
              <h3>WHAT OUR CLIENTS SAY</h3>
              <h1>TESTIMONIALS</h1>
              <div className="carousel-inner">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
                  >
                    <div className="quote-wrapper">
                      <p>{testimonial.text}</p>
                      <h3>{testimonial.author}</h3>
                    </div>
                  </div>
                ))}
              </div>
              <ol className="carousel-indicators indicators">
                {testimonials.map((_, index) => (
                  <li
                    key={index}
                    className={index === activeIndex ? 'active' : ''}
                    onClick={() => handleIndicatorClick(index)}
                  />
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div> */}
        <div className="row">
          <div className="testimonial-col">
         <div>
              <p>
              I think everything is organised in a way that motivates and supports students to become the best version of themselves. The course content is engaging, the teaching standards are outstanding and every module has allowed me to develop useful skills.
              </p>
              <h3>Akash Sharma</h3>
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-o" />
            </div>
          </div>
          <div className="testimonial-col">
            
            <div>
              <p>
              I would say that I’m using my course to find the career that would best suit my skills. As I already enjoy my course my hope is that it will lead me to a career that can allow me to apply everything that I have learnt from my course and hopefully enjoy it just as much.
              </p>
              <h3>Sumit kumar Singh</h3>
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-half-o" />
            </div>
          </div>
        </div>

    </section>
    
    </>
  );
};

export default Facilities;




// import React from 'react';


// const Facilities = () => {
//   return (
//     <>
//     <style>
//       {
//         `




// .contain {
//   width: 100%;
//   max-width: 1200px;
//   margin-inline: auto;
//   margin-block-start: 5rem;
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 1rem;
// }

// .grid-item {
//   padding: 1em;
// }

// .scroll-container {
//   height: 400px;
//   overflow: auto;
// }

// /* slider component */
// .color-slider-container {
//   border: 4px solid #ffffff;
//   box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.125);
//   border-radius: 15px;
//   padding: 1rem;
//   margin-block: 1rem;
//   display: flex;
//   flex-direction: column;
// }

// .color-slider--lightness {
//   background: linear-gradient(to right,
//             hsl(var(--hue-wildcard), 0%, 0%),
//             hsl(var(--hue-wildcard), 0%, 100%));
// }

// .color-slider::-webkit-slider-thumb {
//   -webkit-appearance: none;
//   appearance: none;
//   width: 25px;
//   height: 25px;
//   border-radius: 50%;
//   border: 2px solid #ffffff;
//   cursor: pointer;
//   position: relative;
//   background: hsl(0, 0%, 50%);
// }

// .color-slider::-moz-range-thumb {
//   width: 25px;
//   height: 25px;
//   border-radius: 50%;
//   border: 2px solid #ffffff;
//   cursor: pointer;
//   background: hsl(0, 0%, 50%);
// }

// .color-slider--hue::-webkit-slider-thumb {
//   background: hsl(var(--hue-wildcard), 100%, 50%);
// }

// .color-slider--hue::-moz-range-thumb {
//   background: hsl(var(--hue-wildcard), 100%, 50%);
// }

// .color-slider--saturation::-webkit-slider-thumb {
//   background: hsl(var(--hue-wildcard), var(--saturation-wildcard), 50%);
// }

// .color-slider--saturation::-moz-range-thumb {
//   background: hsl(var(--hue-wildcard), var(--saturation-wildcard), 50%);
// }

// .color-slider--lightness::-webkit-slider-thumb {
//   background: hsl(var(--hue-wildcard), 0%, var(--lightness-wildcard));
// }

// .color-slider--lightness::-moz-range-thumb {
//   background: hsl(var(--hue-wildcard), 0%, var(--lightness-wildcard));
// }

// /* Swatch */
// .swatch {
//   position: relative;
//   display: block;
//   height: 100%;
//   width: 100%;
//   border-radius: 15px;
//   background: hsl(var(--hue-wildcard), var(--saturation-wildcard), var(--lightness-wildcard));
// }
// `
//       }
//     </style>
//     <div className="shadow p-3 bg-body rounded" style={{ width: '100%', backgroundColor: '#e8e5d1' }}>
//       <div className="contain">
//         <div className="grid-item">
//           <div className="color-slider-container">
//             <div className="color-slider-title">
//               <span>Event</span>
//             </div>
//             <div id="current-hue-value">
//               <span>Event</span>
//             </div>
//           </div>
//           <div className="color-slider-container">
//             <div className="color-slider-title">
//               <span>Event</span>
//             </div>
//             <div className="color-slider-value">
//               <div id="current-saturation-value">
//                 <span>value</span>
//               </div>
//             </div>
//           </div>
//           <div className="color-slider-container">
//             <div className="color-slider-title">
//               <span>Event</span>
//             </div>
//             <div className="color-slider-value">
//               <div id="current-lightness-value">
//                 <span>value</span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="grid-item scroll-container">
//           <div>
//             <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' height='300px' width='300' alt="tree" />
//           </div>
//           <div style={{ marginTop: '40px' }}>
//             <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' height='300px' width='300' alt="tree" />
//           </div>
//           <div style={{ marginTop: '40px' }}>
//             <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' height='300px' width='300' alt="tree" />
//           </div>
//           <div style={{ marginTop: '40px' }}>
//             <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' height='300px' width='300' alt="tree" />
//           </div>
//           <div className="swatch"></div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Facilities;








