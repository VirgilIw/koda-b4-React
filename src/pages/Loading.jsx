import { RotatingLines } from "react-loader-spinner";

const Loading = () => (
  <div className="flex justify-center items-center h-screen">
    <RotatingLines
      strokeColor="blue"
      strokeWidth="5"
      animationDuration="0.75"
      width="60"
      visible={true}
    />
  </div>
);
export default Loading;
