import { IoChevronForwardOutline } from "react-icons/io5";

const CardLink = ({ text }) => (
  <div className="intent">
    <h2 className="text-xl">{text}</h2>
    <IoChevronForwardOutline className="text-gray-700" />

  </div>
);

export default CardLink;
