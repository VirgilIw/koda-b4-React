import Button from "./Button";
import TemplateImgs from "./TemplateImgs";

const Card = ({ harga1, harga2, komponen }) => {
  return (
    <div className="flex flex-col justify-center">
      <div className={komponen}>
        <div>
          <h1 className="text-2xl pt-2">Hazelnut Latte</h1>
          <p className="text-xs">
            You can explore the menu that we provide with fun and have their own
            taste and make your day better.
          </p>
        </div>
        <TemplateImgs src="/rating.png" className="pt-2 w-40" />
        <div className="py-2 flex items-center gap-2">
          <p className="text-[#D00000] line-through">IDR {harga1}</p>
          <p className=" text-[#ff8906] text-xl">IDR {harga2}</p>
        </div>
        <div className="flex gap-2">
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
