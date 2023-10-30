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
       slidesToShow: 2,
       rows: 2,
       centerMode: true,
       centerPadding: "60px",
       slidesToScroll: 1,
       nextArrow:<SampleNextArrow />,
       prevArrow:<SamplePrevArrow />,
       responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
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
        <Title /*title="WHAT CLIENTS SAY" */des="Testimonial" />
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
              Vatsala Chaks
              </h3>
                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                Thanks Shweta for having us over for Sanjana’s Arangetram. We are so happy to see her so dedicated and focused at such young age. We wish her the best. Good to see Siddharth developing to be a Mrudangist. Happy to have met your parents too.</p></div>
            <div className="flex-auto w-64 p-8">
              <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
              Padma auntie and Kumar uncle
              </h3>
                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                Dear Sanjana, I was mesmerized listening to
your concert… your hard-work and dedication shows in your performance. Keep it up and enjoy every minute of it.
Hugs, blessings and love always.</p>            
            </div>
            <div className="flex-auto w-64 p-8">
              <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
              Shubha Chakravarthy Aunty
              </h3>
                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                What a fantastic voice and performance. Congratulations on this amazing achievement and God bless you in all her future adventures I forgot all my problems for a couple of hours- it was blissful !!</p>
            </div>
            <div className="flex-auto w-64 p-8">
              <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
              Sandhya Aunty
              </h3>
                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                Dear Shweta and Jagadish, Congratulations to you both! Absolutely amazing performance by Sanjana - testament to dedication, determination and discipline as stated by her Guru. It is also a beautiful reflection of the commitment and efforts by you both. She did you proud! To watch  Siddharth perform with her Akka was so endearing. For me, definitely emotional to see this baby accomplish this musical feat. All the planning played out well this evening. Sorry we couldn’t stay longer as Roshni is getting back tomorrow by the morning train. In our rush to get out to head there we forgot to bring Sanjana gift. We will stop by. May the joy of this evening bring you many smiles on the years  to come.</p>           
            </div>
            <div className="flex-auto w-64 p-8">
              <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
              Revathi Mohan Aunty
              </h3>
                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                Sanjana’s singing was so soulful yesterday, it was a great evening for me and Mohan. Our heart felt Congratulations!! Keep it up!! 
Our best wishes are always there for her. 
And your son is amazing, very focused. God bless both the kids! 
Your passion and love  for the art form showing out through your children.
</p>
            </div>
            <div className="flex-auto w-64 p-8">
              <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
              Smita Mausi
              </h3>
                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                Dear Sanjana- I am so proud of you! Amazing achievement through years of perseverance and dedication. I was blown away by your performance today, so melodious and joyful, touching our hearts 💕 May you be blessed with everything in life that makes you thrive and be happy 😘 </p>            </div>
            <div className="flex-auto w-64 p-8">
              <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
              Vikram Sundararaman uncle
              </h3>
                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                Really great Shwetha.  As she began the mangalam I am sure you felt a lot of pride and relief and then a lot of pride.  What an amazing performance.  From varnam to mangalam.   I can’t give praise where it is not deserved. But this arangetram deserves a lot of praise.   Blessings to sanjana (and siddarth) and I hope arangetram is not the culmination but the beginning of more learning and performing to come.   Wow wow wow. 
Even the mangalam made me very emotional.
</p>            </div>
            <div className="flex-auto w-64 p-8">
              <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
              Cookoo Maa
              </h3>
                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                Congratulations to you both on the superb arangetram 👏 we watched a good portion of it, amazing work by Dambu </p>            </div>
            <div className="flex-auto w-64 p-8">
              <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
              Gayatri Shenoy aunty
              </h3>
                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                And congrats to Sanjana for a beautiful performance. Can’t take that away from her!!</p>            </div>
            <div className="flex-auto w-64 p-8">
              <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
              Navin Dholakia ( nana Ji )
              </h3>
                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                We both proud of you and you did great job for both kids and give them right direction of life and we pray to God’s for your success and also both kids and God’s bless to everyone and Love you.</p>            
            </div>
            <div className="flex-auto w-64 p-8">
              <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
              Veena Marwaha Aunty
              </h3>
                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                Congratulations for Sanjana’s Vocal Arangetram.I hope everything went well as you planned.Thanks for hosting at HTGC.</p>            </div>
            <div className="flex-auto w-64 p-8">
              <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
              Shalini Sahrawat Aunty
              </h3>
                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                Sanjana’s performance was spectacular and I am so proud of her. Congratulations to her and to her proud parents and brother too. It was a treat to watch both the kids together. Stage decorations were beautiful,food delicious and hospitality impeccable. Great job overall. Thanks to you and Jagadish for taking care of everything and everyone so well. 💕 </p>            </div>
            <div className="flex-auto w-64 p-8">
              <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
              Priya Narayanan Aunty ( Narayanan Thirumalai)
              </h3>
                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                Dear swetha.  Thanks for inviting us for Sanjana’s arangetram. It was awesome. She sang beautifully. She was sooo calm and composed. Incredible maturity for her age. May Our Thaayar andPerumal bless both her and Sidharth abundantly. 
</p>            </div>
            <div className="flex-auto w-64 p-8">
              <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
              Lavanya Seshadri ( Diya Srinivasan ‘s mom )              </h3>
                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                Hi Shwetha, just wanted to congratulate you and  Sanjana on her successful arangetram! She was outstanding, she made it look so effortless and sang with so much emotion. It was indeed a treat ! 
              </p>
            </div>
            <div className="flex-auto w-64 p-8">
              <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
              TP Raman uncle
              </h3>
                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                Just finished listening to the concert- it was wonderful. Sanjana looked very confident and under control. God bless her. Am sure it was a proud moment for you, Jagadish and of course your parents 
                </p>
            </div>
            <div className="flex-auto w-64 p-8">
              <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
              Hema Sundaram Aunty              </h3>
                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                Hi Sanjana, I watched your arangetram online. It was amazing! What an accomplishment! You did a wonderful job. We are all so proud of you at the Sundaram household and wish you the best for your musical journey in life. Congratulations!! 
Shweta, Congratulations to the proud parents too! Siddharth did a great job also.
              </p>
            </div>
            <div className="flex-auto w-64 p-8">
              <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
              Padma Aunty
              </h3>
                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                Just finished watching the entire youtube recording of the performance. I have tears of joy …… Jaggi and you should be so proud ❤️❤️❤️ love and many blessings 
              </p>
            </div>


        </Slider>

    </section>
  );
}

export default Testimonial