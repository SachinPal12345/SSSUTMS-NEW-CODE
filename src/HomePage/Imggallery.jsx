import React from "react";
import PosI1 from "../images/Event5.png";
import PosI2 from "../images/Event14.png";
import PosI3 from "../images/Event3.png";
import PosI4 from "../images/Event8.png";
import PosI5 from "../images/Event8.png";
import PosI6 from "../images/Hai.png";
import PosI7 from "../images/Event11.png";
import PosI8 from "../images/Event3.png";
import PosI9 from "../images/Event2.png";
import PosI10 from "../images/Event7.png";
import PosI11 from "../images/Event14.png";
import PosI12 from "../images/lAB.png";
import PosI13 from "../images/library.png";
import PosI14 from "../images/123.png";
import PosI15 from "../images/DSC_0031.png";

function Imggallery() {
  return (
    <>
      <style>{`
        img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }

        .hexagon-gallery {
          margin: auto;
          margin-top: 50px;
          max-width: 1000px;
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          grid-auto-rows: 200px;
          grid-gap: 14px;
          padding-bottom: 50px;
        }

        .hex {
          display: flex;
          position: relative;
          width: 240px;
          height: 265px;
          background-color: #424242;
          -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }

        .hex:first-child {
          grid-row-start: 1;
          grid-column: 2 / span 2;
        }

        .hex:nth-child(2) {
          grid-row-start: 1;
          grid-column: 4 / span 2;
        }

        .hex:nth-child(3) {
          grid-row-start: 1;
          grid-column: 6 / span 2;
        }

        .hex:nth-child(4) {
          grid-row-start: 2;
          grid-column: 1 / span 2;
        }

        .hex:nth-child(5) {
          grid-row-start: 2;
          grid-column: 3 / span 2;
        }

        .hex:nth-child(6) {
          grid-row-start: 2;
          grid-column: 5 / span 2;
        }

        .hex:nth-child(7) {
          grid-row-start: 2;
          grid-column: 7 / span 2;
        }

        .hex:nth-child(8) {
          grid-row-start: 3;
          grid-column: 2 / span 2;
        }

        .hex:nth-child(9) {
          grid-row-start: 3;
          grid-column: 4 / span 2;
        }

        .hex:nth-child(10) {
          grid-row-start: 3;
          grid-column: 6 / span 2;
        }

        @media (max-width: 1200px) {
          .hexagon-gallery {
            grid-template-columns: repeat(6, 1fr);
          }

          .hex {
            width: 200px;
            height: 220px;
          }
        }

        @media (max-width: 992px) {
          .hexagon-gallery {
            grid-template-columns: repeat(4, 1fr);
          }

          .hex {
            width: 160px;
            height: 176px;
          }
        }

        @media (max-width: 768px) {
          .hexagon-gallery {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 150px;
          }

          .hex {
            width: 120px;
            height: 132px;
          }

          .hex:first-child, .hex:nth-child(2), .hex:nth-child(3) {
            grid-column: span 2;
          }
        }

        @media (max-width: 576px) {
          .hexagon-gallery {
            grid-template-columns: 1fr;
            grid-auto-rows: 120px;
          }

          .hex {
            width: 100%;
            height: 120px;
          }

          .hex:first-child, .hex:nth-child(2), .hex:nth-child(3) {
            grid-column: span 1;
          }
        }
      `}</style>

      <div className="one">
        <h1>Gallery</h1>
      </div>

      <section>
        <div className="hexagon-gallery">
          <div className="hex">
            <img src={PosI1} alt="some" />
          </div>

          <div className="hex">
            <img src={PosI9} alt="some" />
          </div>
          <div className="hex">
            <img src={PosI10} alt="some" />
          </div>
          <div className="hex">
            <img src={PosI12} alt="some" />
          </div>
          <div className="hex">
            <img src={PosI13} alt="some" />
          </div>
          <div className="hex">
            <img src={PosI14} alt="some" />
          </div>
          <div className="hex">
            <img src={PosI15} alt="some" />
          </div>
          <div className="hex">
            <img src={PosI2} alt="some" />
          </div>
          <div className="hex">
            <img src={PosI4} alt="some" />
          </div>
          <div className="hex">
            <img src={PosI8} alt="some" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Imggallery;