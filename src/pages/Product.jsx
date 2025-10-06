import { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  return (
    <div>
      <img
        src="/kopiproduct.png"
        alt="kopi-product"
        className="w-full h-[305px]"
      />
      <div>
        <div className="flex justify-between container mx-auto pt-10">
          <h1 className="text-5xl">
            Today <span className="text-[#8E6447]">Promo</span>
          </h1>
          <Button className="flex gap-2">
            <img
              src="/leftarrow.png"
              alt="arrow"
              className="bg-[#E8E8E8] rounded-full"
            />
            <img src="/rightarrow.png" alt="arrow" />
          </Button>
        </div>
        <div className="pt-5 w-full">
          <div>
            <img src="/cardproduct.png" alt="card" className="w-full" />
          </div>
          <div className="container mx-auto">
            <Button className="py-5">
              <img src="Group 1300.png" alt="btn" />
            </Button>
            <h1 className="text-5xl">
              Our <span className="text-[#8E6447]">Product</span>
            </h1>
          </div>
        </div>
        <div className="container mt-5 mx-auto grid grid-cols-[25%_80%]">
          <div
            className="container mx-auto bg-black text-white  
           w-full rounded-2xl p-8 h-[52%]"
          >
            <div className="flex justify-between h-5">
              <Button>Filter</Button>
              <Button>Reset Filter</Button>
            </div>
            <form>
              <label className="flex flex-col py-5">
                Search
                <input
                  id="search"
                  type="text"
                  placeholder="Search Your Product"
                  className="bg-white outline-none rounded p-2 text-black text-md"
                />
              </label>
              <label htmlFor="category" className="flex flex-col gap-5 pb-2">
                Category
                <label>
                  <input
                    type="checkbox"
                    name="favorite-product"
                    id="favorite-product"
                  />
                  Favorite Product
                </label>
                <label>
                  <input type="checkbox" name="coffe" id="coffe" />
                  Coffe
                </label>
                <label>
                  <input type="checkbox" name="non-coffe" id="non-coffe" />
                  NonCoffe
                </label>
                <label>
                  <input type="checkbox" name="foods" id="foods" />
                  Foods
                </label>
                <label>
                  <input type="checkbox" name="add-on" id="add-on" />
                  Add-on
                </label>
              </label>
              <label htmlFor="category" className="flex flex-col gap-5">
                Sort By
                <label>
                  <input type="checkbox" name="buy1" id="buy1" />
                  Buy 1 get 1
                </label>
                <label>
                  <input type="checkbox" name="flash-sale" id="flash-sale" />
                  Flash sale
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="birthday-package"
                    id="birthday-package"
                  />
                  Birthday Package
                </label>
                <label>
                  <input type="checkbox" name="cheap" id="cheap" />
                  Cheap
                </label>
              </label>
              <label className="flex flex-col mt-4">
                Range Price
                <input
                  type="range"
                  className="accent-orange-400"
                  min="0"
                  max="100000"
                  value={price}
                  step="1000"
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
              </label>
              <Button className="bg-[#ff8906] text-black p-2 mt-5 rounded w-full">
                Apply Filter
              </Button>
            </form>
          </div>
          <div className="mt-1">
            <div className="flex justify-center w-full gap-4 h-72">
              <Button onClick={() => navigate("/detail-product")}>
                <Card
                  src="card3.png"
                  alt="card3"
                  className="w-[350px]"
                  harga1={20000}
                  harga2={10000}
                  komponen="absolute bg-white w-70 flex flex-col top-230 left-155 p-4 "
                />
              </Button>
              <Button onClick={() => navigate("/detail-product")}>
                <Card
                  src="card4.png"
                  alt="card4"
                  className="w-[350px]"
                  harga1={20000}
                  harga2={10000}
                  komponen="absolute bg-white w-70 flex flex-col top-230 left-250 p-4 "
                />
              </Button>
            </div>
            <div className="flex justify-center mt-50 w-full gap-4 h-72">
              <Button onClick={() => navigate("/detail-product")}>
                <Card
                  src="card3.png"
                  alt="card3"
                  className="w-[350px]"
                  harga1={20000}
                  harga2={10000}
                  komponen="absolute bg-white w-70 flex flex-col top-350 left-155 p-4 "
                />
              </Button>
              <Button onClick={() => navigate("/detail-product")}>
                <Card
                  src="card4.png"
                  alt="card4"
                  className="w-[350px]"
                  harga1={20000}
                  harga2={10000}
                  komponen="absolute bg-white w-70 flex flex-col top-350 left-250 p-4 "
                />
              </Button>
            </div>
            <div className="flex justify-center mt-45 w-full gap-4 h-72">
              <Button onClick={() => navigate("/detail-product")}>
                <Card
                  src="card3.png"
                  alt="card3"
                  className="w-[350px] mt-5"
                  harga1={20000}
                  harga2={10000}
                  komponen="absolute bg-white w-70 flex flex-col top-480 left-158 p-4 "
                />
              </Button>
              <Button onClick={() => navigate("/detail-product")}>
                <Card
                  src="card4.png"
                  alt="card4"
                  className="w-[350px] mt-5"
                  harga1={20000}
                  harga2={10000}
                  komponen="absolute bg-white w-70 flex flex-col top-480 left-248 p-4 "
                />
              </Button>
            </div>
            <div className="flex justify-center items-center gap-5 mt-70">
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
        </div>
      </div>
    </div>
  );
};

export default Product;
