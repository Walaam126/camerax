import PulseLoader from "react-spinners/PulseLoader";
import { Override } from "../styles";

const Loading = () => {
  return (
    <Override>
      <PulseLoader color="#9d0208" size={20} />
    </Override>
  );
};
export default Loading;
