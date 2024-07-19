import { formatCurrency } from "../../utils/formatCurrency";

interface ProductCardProps {
  link: string;
  title: string;
  normalPrice: number;
  discount: number;
  img: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  link,
  title,
  normalPrice,
  discount,
  img,
}) => {
  return (
    <div>
      <a href={link} title={title}>
        <div>
          <img src={img} alt={title} />
        </div>
        <div className="pt-2">
          <p className="text-xl overflow-hidden text-ellipsis text-nowrap">
            {title}
          </p>
        </div>
        <div className="flex items-center gap-2 text-xl ">
          <span className="text-gray-600 line-through">
            {formatCurrency(normalPrice)}
          </span>
          <span className=" text-rose-600 font-semibold">
            {formatCurrency(normalPrice - (discount % 100))}
          </span>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
