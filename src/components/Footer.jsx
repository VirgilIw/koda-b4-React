import Button from "./Button";

const Footer = () => {
  return (
    <footer className="grid grid-cols-4 mt-10 pl-20 p-10 bg-[#F8F8F8] h-80">
      <div className="flex flex-col gap-5">
        <img src="/Frame 12.png" alt="coffe" className="w-40" />
        <p className="text-[#4F5665]">
          Coffee Shop is a store that sells some good meals, and especially
          coffee. We provide high quality beans
        </p>
        <div className="text-[#AFB5C0]">©2020CoffeeStore</div>
      </div>
      <div className="mx-auto">
        <div className="pb-5">
          <h1 className="text-xl text-[#0B132A] font-[500]">Product</h1>
        </div>
        <div className="grid gap-4 text-[#4F5665]">
          <div>Our Product</div>
          <div>Pricing</div>
          <div>Locations</div>
          <div>Countries</div>
          <div>Blog</div>
        </div>
      </div>
      <div>
        <div>
          <div className="pb-5">
            <h1 className="text-xl text-[#0B132A] font-[500]">Our product</h1>
          </div>
          <div className="grid text-[#4F5665] gap-4">
            <div>Partner</div>
            <div>FAQ</div>
            <div>About us</div>
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-xl text-[#0B132A] font-[500] w-full">
        <h1>Social Media</h1>
        <div className="container flex mt-6 ml-[-20px]">
          <Button className="mt-6">
            <img src="/Facebook-OREN.png" alt="facebook" />
          </Button>
          <Button className="mr-5">
            <div className="bg-black rounded-full"></div>
            <img
              src="/Twitter.png"
              alt="twitter"
              className="bg-black rounded-full w-8"
            />
          </Button>
          <Button>
            <div className="bg-black rounded-full">
              <img src="/instagram.png" alt="instagram" />
            </div>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
