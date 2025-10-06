import Button from "../components/Button";
import TemplateImgs from "../components/TemplateImgs";
import FlashSale from "../components/FlashSale";
import TemplateInputs from "../components/TemplateInputs";
import { useForm } from "react-hook-form";

const CheckoutProduct = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="pt-40 container mx-auto">
      <div>
        <h1 className="text-5xl">Payment Details</h1>
      </div>
      <div className="grid grid-cols-[60%_40%] py-10">
        <div className="flex justify-between items-center">
          <p>Your Order</p>
          <Button className="bg-[#ff8906] py-1 px-2 rounded">+ Add Menu</Button>
        </div>
        <div className="mx-10 gap-4 flex items-center">Total</div>
      </div>
      <div className="grid grid-cols-[60%_40%] gap-10">
        <div>
          <div className="w-full flex bg-[#E8E8E84D]">
            <div>
              <TemplateImgs src="card4.png" alt="card4" className="w-40" />
            </div>
            <div className="flex-col px-4 pt-2">
              <div>
                <FlashSale />
              </div>
              <div className="font-[700] pt-2">Hazelnut Latte</div>
              <div className="flex gap-4 text-slate-500">
                <p>2pcs</p>|<p>Regular </p>|<p>Ice </p>|<p>Dine in</p>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <p className="line-through text-[#D00000] text-sm">IDR40.000</p>
                <p className="text-xl text-[#FF8906]">IDR20.000</p>
              </div>
            </div>

            <div className="flex items-center ml-auto pr-5">
              <TemplateImgs src="/XCircle.png" />
            </div>
          </div>
          <div className="flex bg-[#E8E8E84D] mt-4">
            <div>
              <TemplateImgs src="card4.png" alt="card4" className="w-40" />
            </div>
            <div className="flex-col px-4  items-center justify-center">
              <div>
                <FlashSale />
              </div>
              <div className="font-[700] pt-2">Hazelnut Latte</div>
              <div className="flex gap-4 text-slate-500">
                <p>2pcs</p>|<p>Regular </p>|<p>Ice </p>|<p>Dine in</p>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <p className="line-through text-[#D00000] text-sm">IDR40.000</p>
                <p className="text-xl text-[#FF8906]">IDR20.000</p>
              </div>
            </div>

            <div className="flex items-center ml-auto pr-5">
              <TemplateImgs src="/XCircle.png" />
            </div>
          </div>
        </div>

        <div className="bg-[#E8E8E84D] ml-[-20px] w-100 p-4 font-semibold">
          <div className="flex justify-between">
            <div>Order</div>
            <div>Idr 40.00</div>
          </div>
          <div className="flex justify-between py-2">
            <div>Delivery</div>
            <div>Idr 0</div>
          </div>
          <div className="flex justify-between border-b border-b-slate-200">
            <div>Tax</div>
            <div>Idr 4000</div>
          </div>
          <div className="flex justify-between py-2">
            <div>Subtotal</div>
            <div>Idr.44000</div>
          </div>
          <Button className="bg-[#ff8906] w-full py-2 rounded mt-1">
            Checkout
          </Button>
          <div className="mt-2 text-[#4F5665]">We Accept</div>
          <div className="flex items-center justify-between mt-4">
            <Button>
              <TemplateImgs src="/bri.png" />
            </Button>
            <Button>
              <TemplateImgs src="/dana.png" />
            </Button>
            <Button>
              <TemplateImgs src="/bca.png" />
            </Button>
            <Button>
              <TemplateImgs src="/gopay.png" />
            </Button>
            <Button>
              <TemplateImgs src="/ovo.png" />
            </Button>
            <Button>
              <TemplateImgs src="/paypal.png" />
            </Button>
          </div>
          <div className="text-[#4F5665] pt-3">
            *Get Discount if you pay with Bank Central Asia
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <h1 className="mt-10 text-2xl">Payment info Delivery</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
          <TemplateInputs
            htmlFor="email"
            id="email"
            type="email"
            placeholder="Enter Your Email"
            src1="/mail.png"
            alt1="Email icon"
            inputProps={{ ...register("email") }}
            className="w-50"
          >
            Email
          </TemplateInputs>
          <TemplateInputs
            htmlFor="full-name"
            id="full-name"
            placeholder="Enter Your Full Name"
            inputProps={{ ...register("fullName") }}
            src1="/Profile.png"
            alt1="Profile icon"
          >
            Full Name
          </TemplateInputs>
          <TemplateInputs
            htmlFor="address"
            id="address"
            placeholder="Enter Your Address"
            inputProps={{ ...register("address") }}
            src1="/Location.png"
            alt1="location"
          >
            Address
          </TemplateInputs>
          <div className="flex justify-between">
            <Button className="border border-[#ff8906] px-15 py-2 rounded">
              Dine in
            </Button>
            <Button className="border border-[#E8E8E8] px-12 py-2 rounded">
              Door Delivery
            </Button>
            <Button className="border border-[#E8E8E8] px-15 py-2 rounded">
              Pick Up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutProduct;
