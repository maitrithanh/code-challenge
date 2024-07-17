import React from "react";

interface CategoryCardProps {
  link: string;
  content: string;
  img: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ link, content, img }) => {
  return (
    <>
      <div className="p-2 bg-lightMain w-fit rounded-md border border-dashed border-main text-center">
        <a href={link}>
          <div className="p-4">
            <img
              className="rounded-md"
              src={img}
              alt="cate1"
              height={121}
              width={121}
            />
          </div>
          {content}
        </a>
      </div>
    </>
  );
};

export default CategoryCard;
