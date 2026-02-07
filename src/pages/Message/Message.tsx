import { Link } from "react-router-dom";
import { flower } from "../../assets/images";
const Message = () => {
  return (
    <div className="relative w-full min-h-screen flex items-start justify-center bg-[#FEFEFE] opacity-90 overflow-y-auto">
      {/* Floating hearts */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(45)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-400 opacity-60 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${20 + Math.random() * 25}px`,
              animationDuration: `${4 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Sparkles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-yellow-300 animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${5 + Math.random() * 10}px`,
              animationDuration: `${1 + Math.random() * 2}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Main Card */}
      {/* <div className="relative z-10 text-center p-8 flex flex-col items-center justify-between rounded-2xl shadow-xl backdrop-blur-sm">
        <h1 className="text-3xl md:text-4xl font-sans  text-gray-700 mb-2">
          Happy Birthday baby 🎂❤️
        </h1>

        <p className="md:text-2xl  my-5 font-cursive text-gray-700">
          Another year older,budi huna lagyau hai aba,Happy Birthday my love 🥹,Im beyond grateful that i get to spend my time with you.Things arent always perfect but what matters most is that we always choose each other in the end.I Feel so lucky to have you.I love how you make me laugh and teme aye paxi i have never felt alone.I wish i get to celebrate every birthday together , this one we cant but we need to celebrate every other one together.You are my comfort,my safe place and my partner in everythingg laaaaaaaaaa.Im so proud of how far we've come and i know there is still so much we have to explore and look forward to together.Kuch vi ho jaye mai sir tumko cahungaaaa.I love uuuuuuuuuuuuuuu❤️❤️. I miss u lastai yar.Kahila hola hami vetna yar.
          Again,Happy Birthday My baby,my love,mero budi ,pasandida aurat,soulmate, partner,best friend and my everything ❤️❤️
        </p>

        <div className="flex gap-5 justify-center">
          <Link to={"/yes"}>
            <button className="px-6 py-2 border text-sm border-gray-600 rounded-full hover:bg-gray-200 transition">
              return
            </button>
          </Link>
        </div>
      </div> */}

      <div className="w-full  bg-gradient-to-b from-[#f7ecd3] to-[#e6d4b4] flex items-center justify-center p-6 relative  lg:mt-20">
        <div className="bg-white lg:w-[800px] rounded-xl p-8 relative border-[2px] border-gray-300 border-dashed shadow-md animate-shake-once">
          {/* POSTCARD TITLE */}
          <h2 className="text-center text-2xl tracking-[4px] font-bold text-[#C17474] mb-6">
            Meri Maya{" "}
          </h2>

          <div className="grid  md:grid-cols-2 gap-6 ">
            {/* LEFT SIDE CONTENT */}
            <div className="space-y-4 text-gray-950 text-lg leading-relaxed font-cursive">
              <p>Happy Valentine Baby❤️, </p>
              Its our 2nd Valentine together and i just want to say how much i
              love you and how grateful i am to have you in my life.I cherish
              every moment we spend together and look forward to many more
              adventures with you. Thank you for being the amazing person that
              you are and for loving me the way you do. Kasto xito 2 barsa
              pugeko baby yar, Its been a little hard and rough time lately,i
              just wish time skip gardim ani yo LDR sakkaidim, i just cant with
              this, lastai garo vaxa yar ,kahila sangai huna pauna ho maatra
              hunxa, but i want you to know that i am here for you and i will
              always support you puntu.Maila kahila katai tmlai hurt gare ya
              tmro expectation meet garna sakina vane malai maaf garnu la, I
              never wanted to hurt you in any way. Ani whenever you feel down or
              stressed , just let me know i will do my best to may u feel better
              . Dont shut down on me and deal with everything alone, even when u
              dont want to talk just lemme know, i will give u all the space u
              need. At the end all i want and wish for is your happiness
              yar.Sadhai khushi hunu la,I just wanna see you happy and enjoy
              life to the fullest. I love you so much and i am so lucky to have
              you in my life. Happy Valentine’s Day, my love! ❤️
            </div>

            <div className="flex items-center justify-center">
              <img
                src={flower}
                className="w-64 object-cover rounded-2xl shadow-md"
              />
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="border-l border-gray-300 flex  flex-col justify-between pl-6">
              {/* Stamps */}

              <div>
                <p className="text-gray-500 mb-2 text-sm">With warm wishes,</p>

                {/* Signature */}
                <p className="font-cursive text-2xl text-gray-700">
                  <span className="border-b border-gray-300 pb-1 inline-block w-full">
                    Sanju Gurung
                  </span>
                </p>
              </div>
              {/* With warm wishes */}
            </div>
            <div className="flex gap-5 justify-center">
              <Link to={"/"}>
                <button className="px-6 py-2 border border-gray-600 rounded-full hover:bg-gray-200 transition">
                  Start Again{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
