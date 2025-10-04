import Button from "./Button";

const Card = ({ src, alt }) => {
  return (
    <div className="flex flex-col justify-center bg-black w-60 relative">
      <img src={src} alt={alt} className="w-2xs h-60" />
      <div className="absolute top-50 right-2.5 text-black mx-auto p-2 bg-white w-55">
        <div>
          <h1 className="text-2xl py-2">Hazelnut Latte</h1>
          <p className="text-xs">
            You can explore the menu that we provide with fun and have their own
            taste and make your day better.
          </p>
        </div>
        <div className="text-[#ff8906] p-2 text-lg">IDR 20.000</div>
        <div className="grid grid-cols-[70%_30%] gap-2">
          <Button className="bg-[#ff8906] w-full rounded-md cursor-pointer text-xl">
            Buy
          </Button>
          <Button className="cursor-pointer">
            <img src="/Frame 37.png" alt="Cart" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
