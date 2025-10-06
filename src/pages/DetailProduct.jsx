import { useState } from "react";
import FlashSale from "../components/FlashSale";
import TemplateImgs from "../components/TemplateImgs";
import Button from "../components/Button";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const DetailProduct = () => {
  const [counter, setCounter] = useState(1);
  const navigate = useNavigate();
  return (
    <div>
      <div className="grid grid-cols-2 container mx-auto pt-40">
        <div className="flex flex-col">
          <div>
            <TemplateImgs src="/card4.png" className="h-[554px] w-[96%]" />
          </div>
          <div className="flex gap-9 mt-5 w-[96%]">
            <TemplateImgs
              src="/tuang1.png"
              alt="tuang-kopi"
              className="w-1/3"
            />
            <TemplateImgs
              src="/tuang2.png"
              alt="tuang-kopi"
              className="w-1/3"
            />
            <TemplateImgs
              src="/tuang3.png"
              alt="tuang-kopi"
              className="w-1/3"
            />
          </div>
        </div>
        <div className="pr-20">
          <div>
            <FlashSale />
            <h1 className="text-[48px]">Hazelnut Latte</h1>
          </div>
          <div className="flex items-center gap-2">
            <p className="line-through text-[#D00000]">IDR 20.000</p>
            <p className="text-2xl text-[#FF8906]">IDR 10.000</p>
          </div>
          <div className="py-6">
            <TemplateImgs src="/rating.png" />
          </div>
          <div>
            <TemplateImgs src="/review.png" alt="review" />
          </div>
          <div className="mt-5">
            Cold brewing is a method of brewing that combines ground coffee and
            cool water and uses time instead of heat to extract the flavor. It
            is brewed in small batches and steeped for as long as 48 hours.
          </div>
          <div className="flex gap-2">
            <Button
              onClick={() => setCounter(counter - 1)}
              className="border border-[#ff8906] w-6 rounded"
            >
              -
            </Button>
            <div className="gap-2">{counter}</div>
            <Button
              onClick={() => setCounter(counter + 1)}
              className="bg-[#ff8906] w-6 rounded"
            >
              +
            </Button>
          </div>
          <div className="font-[500] py-5">
            <h1 className="text-xl">Choose Size</h1>
            <div className="flex justify-between pt-2">
              <Button className="border border-[#ff8906] px-10 py-2">
                Regular
              </Button>
              <Button className="border border-[#E8E8E8] px-10 py-2">
                Medium
              </Button>
              <Button className="border border-[#E8E8E8] px-10 py-2">
                Large
              </Button>
            </div>
          </div>
          <div className="font-[500] py-3">
            <h1 className="text-xl">Hot/Ice?</h1>
            <div className="flex justify-between pt-2 gap-6">
              <Button className="border border-[#ff8906] w-1/2 py-2">
                Regular
              </Button>
              <Button className="border border-[#E8E8E8] w-1/2 py-2">
                Large
              </Button>
            </div>
          </div>
          <div className="flex justify-between pt-10 gap-6">
            <Button
              className="bg-[#ff8906] w-1/2 py-2 rounded"
              onClick={() => navigate("/checkout-product")}
            >
              Buy
            </Button>
            <Button className="flex items-center justify-center border border-[#ff8906] w-1/2 gap-2 py-2 rounded text-[#ff8906]">
              <TemplateImgs src="/ShoppingCart2.png" alt="cart" /> add to cart
            </Button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="flex container mx-auto text-5xl pt-10 ">
          Recommendation <span className="text-[#8E6447] pl-2">For You</span>
        </h1>
      </div>
      <div className="container mx-auto flex gap-14 mt-10 w-[100%] mb-40">
        <Card
          src="/card3.png"
          className="w-[450px] h-108 flex justify-center "
          komponen="absolute bg-white w-80 flex flex-col top-360 left-38 p-4 "
          harga1={2000}
          harga2={1000}
        />
        <Card
          src="/card4.png"
          className="w-[450px] h-108 flex justify-center "
          komponen="absolute bg-white w-80 flex flex-col top-360 left-150 p-4 "
          harga2={1000}
          harga1={2000}
        />
        <Card
          src="/card4.png"
          className="w-[450px] h-108 flex justify-center "
          komponen="absolute bg-white w-80 flex flex-col top-360 left-261 p-4 "
          harga1={2000}
          harga2={1000}
        />
      </div>
      <div className="flex justify-center items-center gap-5 mt-49">
        <Button className="bg-[#ff8906] rounded-full w-6">1</Button>
        <Button className="bg-slate-600/10 text-slate-600/50 rounded-full w-6">
          2
        </Button>
        <Button className="bg-slate-600/10 text-slate-600/50 rounded-full w-6">
          3
        </Button>
        <Button className="bg-slate-600/10 text-slate-600/50 rounded-full w-6">
          4
        </Button>
        <Button className="bg-slate-600/10 text-slate-600/50 rounded-full w-6">
          <img src="/rightarrow.png" alt="right" />
        </Button>
      </div>
    </div>
  );
};

export default DetailProduct;
