import React,{useState} from 'react'
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from '../layouts/Title'
import { testimonialOne,testimonialTwo,testimonialThree, quote } from "../../assets";



function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
      const [dotActive, setDocActive] = useState(0);
     const settings = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 4,
       rows: 2,
       centerMode: true,
       centerPadding: "60px",
       slidesToScroll: 1,
       nextArrow:<SampleNextArrow />,
       prevArrow:<SamplePrevArrow />,
       beforeChange: (prev, next) => {
         setDocActive(next);
       },
       appendDots: (dots) => (
         <div
           style={{
             borderRadius: "10px",
             padding: "10px",
           }}
         >
           <ul
             style={{
               display: "flex",
               gap: "15px",
               justifyContent: "center",
               marginTop: "20px",
             }}
           >
             {" "}
             {dots}{" "}
           </ul>
         </div>
       ),
       customPaging: (i) => (
         <div
           style={
             i === dotActive
               ? {
                   width: "12px",
                   height: "12px",
                   color: "blue",
                   background: "#ff014f",
                   borderRadius: "50%",
                   cursor: "pointer",
                 }
               : {
                   width: "12px",
                   height: "12px",
                   color: "blue",
                   background: "gray",
                   borderRadius: "50%",
                   cursor: "pointer",
                 }
           }
         ></div>
       ),
     };
  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black"
    >

      <div className="justify-center items-center text-center">
        <Title title="WHAT CLIENTS SAY" des="Testimonial" />
      </div>
      <Slider {...settings}>
      
            <div className="flex-auto w-64 p-8">
              <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
              Navin Dholakia ( nana Ji )
              </h3>
                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                We both proud of you and you did great job for both kids and give them right direction of life and we pray to God’s for your success and also both kids and God’s bless to everyone and Love you.</p>            
            </div>
            <div className="flex-auto w-64 p-8">
              <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                Selvi💕
              </h3>
                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                Hi Shweta, Sanjana sang beautifully yesterday with a steady voice and calm demeanor. The 2 and half hours was mesmerising. You and Jagadeesh must be very proud of her. Yesterday you were busy and couldn't pass my message. Thank you for inviting us.                </p>
            </div>
            <div className="flex-auto w-64 p-8">
              <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
              Smita Mausi
              </h3>
                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                You are such a wonderful nurturing beautiful person and the strength and commitment behind Sanjana’s amazing experience. Everyone thoroughly enjoyed today! So happy to be part of it! Thank you for the lovely gifts in the goody bag!</p>           
            </div>
            <div className="flex-auto w-64 p-8">
              <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                Selvi💕
              </h3>
                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                Just finished watching the entire youtube recording of the performance. I have tears of joy …… Jaggi and you should be so proud ❤️❤️❤️ love and many blessings.</p>
            </div>
            <div className="flex-auto w-64 p-8">
              <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
              Navin Dholakia ( nana Ji )
              </h3>
                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                We both proud of you and you did great job for both kids and give them right direction of life and we pray to God’s for your success and also both kids and God’s bless to everyone and Love you.</p>            
            </div>
            <div className="flex-auto w-64 p-8">
              <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                Selvi💕
              </h3>
                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                Hi Shweta, Sanjana sang beautifully yesterday with a steady voice and calm demeanor. The 2 and half hours was mesmerising. You and Jagadeesh must be very proud of her. Yesterday you were busy and couldn't pass my message. Thank you for inviting us.                </p>
            </div>
            <div className="flex-auto w-64 p-8">
              <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
              Smita Mausi
              </h3>
                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                You are such a wonderful nurturing beautiful person and the strength and commitment behind Sanjana’s amazing experience. Everyone thoroughly enjoyed today! So happy to be part of it! Thank you for the lovely gifts in the goody bag!</p>           
            </div>
            <div className="flex-auto w-64 p-8">
              <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                Selvi💕
              </h3>
                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                Just finished watching the entire youtube recording of the performance. I have tears of joy …… Jaggi and you should be so proud ❤️❤️❤️ love and many blessings.</p>
            </div>
            <div className="flex-auto w-64 p-8">
              <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
              Navin Dholakia ( nana Ji )
              </h3>
                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                We both proud of you and you did great job for both kids and give them right direction of life and we pray to God’s for your success and also both kids and God’s bless to everyone and Love you.</p>            
            </div>
            <div className="flex-auto w-64 p-8">
              <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                Selvi💕
              </h3>
                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                Hi Shweta, Sanjana sang beautifully yesterday with a steady voice and calm demeanor. The 2 and half hours was mesmerising. You and Jagadeesh must be very proud of her. Yesterday you were busy and couldn't pass my message. Thank you for inviting us.                </p>
            </div>
            <div className="flex-auto w-64 p-8">
              <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
              Smita Mausi
              </h3>
                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                You are such a wonderful nurturing beautiful person and the strength and commitment behind Sanjana’s amazing experience. Everyone thoroughly enjoyed today! So happy to be part of it! Thank you for the lovely gifts in the goody bag!</p>           
            </div>
            <div className="flex-auto w-64 p-8">
              <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                Selvi💕
              </h3>
                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                Just finished watching the entire youtube recording of the performance. I have tears of joy …… Jaggi and you should be so proud ❤️❤️❤️ love and many blessings.</p>
            </div>
            <div className="flex-auto w-64 p-8">
              <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
              Navin Dholakia ( nana Ji )
              </h3>
                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                We both proud of you and you did great job for both kids and give them right direction of life and we pray to God’s for your success and also both kids and God’s bless to everyone and Love you.</p>            
            </div>
            <div className="flex-auto w-64 p-8">
              <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                Selvi💕
              </h3>
                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                Hi Shweta, Sanjana sang beautifully yesterday with a steady voice and calm demeanor. The 2 and half hours was mesmerising. You and Jagadeesh must be very proud of her. Yesterday you were busy and couldn't pass my message. Thank you for inviting us.                </p>
            </div>
            <div className="flex-auto w-64 p-8">
              <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
              Smita Mausi
              </h3>
                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                You are such a wonderful nurturing beautiful person and the strength and commitment behind Sanjana’s amazing experience. Everyone thoroughly enjoyed today! So happy to be part of it! Thank you for the lovely gifts in the goody bag!</p>           
            </div>
            <div className="flex-auto w-64 p-8">
              <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                Selvi💕
              </h3>
                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                Just finished watching the entire youtube recording of the performance. I have tears of joy …… Jaggi and you should be so proud ❤️❤️❤️ love and many blessings.</p>
            </div>
        </Slider>

    </section>
  );
}

export default Testimonial