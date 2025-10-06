import Button from "./Button";
import TemplateImgs from "./TemplateImgs";

const Hazelnut = ({ className }) => {
  return (
    <div className={className}>
      <div>
        <h1 className="text-lg">Hazelnut Late</h1>
      </div>
      <div>
        <p className="text-sm">
          You can explore the menu that we provide with fun and have their own
          taste and make your day better.
        </p>
      </div>
      <div className="text-lg text-[#ff8906]">IDR 20.000</div>
      <div className="flex gap-2">
        <Button className="text-sm w-full bg-[#ff8906] rounded">Buy</Button>
        <Button className="border border-[#ff8906]">
          <TemplateImgs src="/ShoppingCart2.png" />
        </Button>
      </div>
    </div>
  );
};

export default Hazelnut;
