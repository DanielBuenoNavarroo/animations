interface Props {
    number: number
}

const MainCard = ({ number }: Props) => {
  return <div className="w-48 h-48 bg-orange-300 rounded-xl p-2 text-gray-100">number: {number}</div>;
};

export default MainCard;
