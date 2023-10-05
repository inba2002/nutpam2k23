import React, { useRef } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { Link } from "react-router-dom";


import ml from "../Assets/missionlist.svg";
import astrobg from "../Assets/astrobg.png";

const EventScroll = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div className="bg-transparent flex flex-col">
      <img src={ml} alt="" className="w-1/4 mx-20" />
      <HorizontalScrollCarousel />
    </div>
  );
};
const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0.75%", "-84.5%"]);

  return (
    <section ref={targetRef} className="relative h-[110vh] py-8 bg-transparent">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-14">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative md:h-[50rem] md:w-[80rem] overflow-hidden bg-transparent"
    >
      <div
        style={{
          backgroundImage: `url(${astrobg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 scroll-smooth "
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center ">
        <div className="w-full h-[90vh] md:w-3/4 mx-auto bg-gradient-to-br from-white/20 to-white/0 p-8 backdrop-blur-lg rounded-[2rem]">
          <h1
            className="text-[32px] uppercase text-white md:px-12 md:py-5"
            style={{ fontFamily: "manplay" }}
          >
            {card.head}
          </h1>
          <p className="text-[18px] font-mono uppercase text-white md:px-12 md:py-5 md:leading-10 md:text-sm">
            {card.title}
          </p>
          <div className="w-full md:p-4 flex items-center justify-end">
            <Link to={card.head.replace(" ", "").toLowerCase()}>
              <button className="footer-bg text-white w-64 h-24 text-2xl font-mono hover:shadow-xl hover:bg-white/75">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// const Card = ({ card }) => {
//   return (
//     <div
//       key={card.id}
//       className="group relative h-[50vh] w-[80vw] overflow-hidden bg-transparent"
//     >
//       <div
//         style={{
//           backgroundImage: `url(${Eventbg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//         className="absolute inset-0 z-0 transition-transform"
//       ></div>
//       <div className="absolute inset-0 z-10 grid place-content-center">
//         <div className="w-3/4 mx-auto bg-gradient-to-br from-white/20 to-white/0 p-8 backdrop-blur-lg">
//           <h1
//             className="text-[32px] uppercase text-white px-12 py-5"
//             style={{ fontFamily: "manplay" }}
//           >
//             {card.head}
//           </h1>
//           <p className="text-[18px] font-mono uppercase text-white px-12 py-5 leading-10">
//             {card.title}
//           </p>
//           <div className="w-full p-4 flex items-center justify-end">
//             <Link to={card.head.replace(" ", "").toLowerCase()}>
//               <button className="footer-bg text-white w-64 h-24 text-2xl font-mono hover:shadow-xl hover:bg-white/75">
//                 Register Now
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default EventScroll;

const cards = [
  {
    head: "celestial PAUSE",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis arcu malesuada, sollicitudin ex eu, semper felis. Fusce urna enim, varius ut feugiat volutpat, euismod et neque. Donec faucibus ullamcorper neque. Phasellus porta fringilla lorem, a sollicitudin dolor pharetra at. Aliquam vitae arcu id dui dignissim aliquam. Vestibulum ullamcorper orci et dolor egestas elementum.",
    id: 1,
  },
  {
    head: "ASTRO CAPTURE ",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis arcu malesuada, sollicitudin ex eu, semper felis. Fusce urna enim, varius ut feugiat volutpat, euismod et neque. Donec faucibus ullamcorper neque. Phasellus porta fringilla lorem, a sollicitudin dolor pharetra at. Aliquam vitae arcu id dui dignissim aliquam. Vestibulum ullamcorper orci et dolor egestas elementum.",
    id: 2,
  },
  {
    head: "SPACE ODySSEY",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis arcu malesuada, sollicitudin ex eu, semper felis. Fusce urna enim, varius ut feugiat volutpat, euismod et neque. Donec faucibus ullamcorper neque. Phasellus porta fringilla lorem, a sollicitudin dolor pharetra at. Aliquam vitae arcu id dui dignissim aliquam. Vestibulum ullamcorper orci et dolor egestas elementum.",
    id: 3,
  },
  {
    head: "AISTRONOMY",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis arcu malesuada, sollicitudin ex eu, semper felis. Fusce urna enim, varius ut feugiat volutpat, euismod et neque. Donec faucibus ullamcorper neque. Phasellus porta fringilla lorem, a sollicitudin dolor pharetra at. Aliquam vitae arcu id dui dignissim aliquam. Vestibulum ullamcorper orci et dolor egestas elementum.",
    id: 4,
  },
  {
    head: "DIMENSIONAL CONQUEST",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis arcu malesuada, sollicitudin ex eu, semper felis. Fusce urna enim, varius ut feugiat volutpat, euismod et neque. Donec faucibus ullamcorper neque. Phasellus porta fringilla lorem, a sollicitudin dolor pharetra at. Aliquam vitae arcu id dui dignissim aliquam. Vestibulum ullamcorper orci et dolor egestas elementum.",
    id: 5,
  },
  {
    head: "Cosmo COde",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis arcu malesuada, sollicitudin ex eu, semper felis. Fusce urna enim, varius ut feugiat volutpat, euismod et neque. Donec faucibus ullamcorper neque. Phasellus porta fringilla lorem, a sollicitudin dolor pharetra at. Aliquam vitae arcu id dui dignissim aliquam. Vestibulum ullamcorper orci et dolor egestas elementum.",
    id: 6,
  },
  {
    head: "VIsion X",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis arcu malesuada, sollicitudin ex eu, semper felis. Fusce urna enim, varius ut feugiat volutpat, euismod et neque. Donec faucibus ullamcorper neque. Phasellus porta fringilla lorem, a sollicitudin dolor pharetra at. Aliquam vitae arcu id dui dignissim aliquam. Vestibulum ullamcorper orci et dolor egestas elementum.",
    id: 7,
  },
  {
    head: "Pixel Legacy",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis arcu malesuada, sollicitudin ex eu, semper felis. Fusce urna enim, varius ut feugiat volutpat, euismod et neque. Donec faucibus ullamcorper neque. Phasellus porta fringilla lorem, a sollicitudin dolor pharetra at. Aliquam vitae arcu id dui dignissim aliquam. Vestibulum ullamcorper orci et dolor egestas elementum.",
    id: 7,
  },
];
