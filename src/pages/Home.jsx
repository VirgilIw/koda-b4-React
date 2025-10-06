import Button from "../components/Button";
import Card from "../components/Card";
import Hazelnut from "../components/Hazelnut";
import Navbar from "../components/Navbar";

const Home = () => {
  const datas = [
    "High quality beans",
    "Healthy meals, you can request the ingredients",
    "Chat with our staff to get better experience for ordering",
    "Free member card with a minimum purchase of IDR 200.000.",
  ];

  return (
    <div>
      <Navbar />
      <main>
        <div className="grid grid-cols-2">
          <div className="h-screen bg-gradient-to-t from-[#0B0909] to-[#777C82]">
            <div className="flex flex-col justify-center min-h-screen px-20 w-full">
              <div className="font-medium">
                <h1 className="flex flex-col text-[250%] text-white container ">
                  Start Your Day With
                  <span> Coffee and Good</span>
                  <span>Meals</span>
                </h1>
                <p className=" text-white font-light">
                  We provide high quality beans, good taste, and healthy meals
                  made by love just for you. Start your day with us for a bigger
                  smile!
                </p>
              </div>
              <div className="mt-5">
                <Button className="bg-[#FF8906] px-6 py-4 rounded-lg cursor-pointer">
                  Get Started
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-10 text-2xl justify-between mt-4">
                <div className="border-r border-r-amber-50">
                  <p className="text-4xl text-[#ff8906]">90+</p>
                  <p className="text-lg text-white">Staff</p>
                </div>
                <div className="border-r border-r-amber-50">
                  <p className="text-4xl text-[#ff8906]">30+</p>
                  <p className="text-lg text-white">Stores</p>
                </div>
                <div>
                  <p className="text-4xl text-[#ff8906]">800+</p>
                  <p className="text-md text-white">Customer</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/homekopi.png"
              alt="home"
              className="h-screen w-full object-center"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 w-full h-[90vh]">
          <div className="flex flex-col py-10 mx-20 text-5xl ">
            <div className="mx-6">
              <p className="px-4">
                We Provide <span className="text-[#8e6647]">Good</span>
              </p>
              <div className="text-[#8E6447] h-12 border-l-6 border-l-[#ff8960] px-4">
                Coffee <span className="text-black mr-1">and</span>Healthy
              </div>
              <span className="text-[#8E6447] mx-6">Meals</span>
            </div>
            <div className="text-sm mt-8 text-[#4F5665]">
              You can explore the menu that we provide with fun and have their
              own taste and make your day better.
            </div>
            {datas.map((data) => {
              return (
                <div key={data.id} className="flex gap-2 text-sm py-2 pt-6">
                  <img src="/Vector.png" alt="vector" /> {data}
                </div>
              );
            })}
          </div>
          <div className="h-[100vh]">
            <img src="/barista.png" alt="barista" className=" w-full" />
          </div>
        </div>
        <div className="flex flex-col items-center h-[80vh] bg-white w-full text-5xl">
          <div className="font-semibold">
            Here is People’s <span className="text-[#8E6447]">Favorite</span>
          </div>
          <div className="border-b-5 border-b-[#ff8906] w-20 mt-4"></div>
          <div className="text-sm mt-4 text-[#4F5665]">
            Let’s choose and have a bit taste of poeple’s favorite. It might be
            yours too!
          </div>
          <div className="container mx-auto flex justify-center gap-6 mt-8 p-8">
            <div>
              <img src="card1.png" alt="card1" />
            </div>
            <div>
              <img src="card2.png" alt="card2" />
            </div>
            <div>
              <img src="card3.png" alt="card3" />
            </div>
            <div>
              <img src="card4.png" alt="card4" />
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-[#E8E8E84D] w-full min-h-screen">
          <div>
            <h1 className="flex justify-center text-5xl py-10 ">
              <span className="text-[#8E6447] px-1">Visit Our Store</span> in
              the Spot on the Map Below
            </h1>
            <div className="w-full flex justify-center ">
              <div className="border-b-4 border-b-[#ff8906] w-14"></div>
            </div>
            <p className="flex flex-col items-center mt-5 text-sm text-[#4F5665]">
              You can explore the menu that we provide with fun and have their
              own
              <div>taste and make your day better.</div>
            </p>
          </div>
          <div className="py-10 h-[100%]">
            <img src="/Huge Global.png" alt="globe" className="mx-auto" />
          </div>
        </div>
        <div className="flex flex-col min-h-screen items-center min-w-full">
          <div className="flex gap-10 w-full h-screen justify-center items-center bg-gradient-to-t from-[#0B0909] to-[#777C82]">
            <div>
              <img src="/ceo.png" alt="ceo" />
            </div>
            <div className="text-white p-4">
              <p className="">TESTIMONIAL</p>
              <h1 className="border-l-4 border-l-[#ff6906] pl-5 mt-4 text-5xl">
                Viezh Robert
              </h1>
              <p className="py-8 text-[#ff8906]">Manager Coffe Shop</p>
              <p>
                “Wow... I am very happy to spend my whole day here. the Wi-fi is
              </p>
              <p>good, and the coffee and meals tho. I like it here!! Very</p>
              <p>recommended!</p>
              <img src="/bintang.png" alt="rating" className="py-5" />
              <Button className="flex gap-2">
                <img src="/leftarrow.png" alt="arrow" />
                <img src="/rightarrow.png" alt="arrow" />
              </Button>
              <Button className="py-5">
                <img src="Group 1300.png" alt="btn" />
              </Button>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-6 right-6 z-50">
        <Button className="flex justify-center items-center w-15 h-15 rounded-full bg-[#ff8906] cursor-pointer">
          <img src="/ChatCircleDots.png" alt="circledots" />
        </Button>
      </div>
    </div>
  );
};

export default Home;
