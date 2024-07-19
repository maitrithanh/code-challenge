import Tag from "../utils/Tag";

const SuggestionTag = () => {
  return (
    <div className="sm:grid lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-2 hidden text-center gap-4  overflow-x-auto">
      <Tag link={"#"} content={"Thương hiệu"} />
      <Tag link={"#"} content={"Sản phẩm mới"} />
      <Tag link={"#"} content={"Chăm sóc da"} />
      <Tag link={"#"} content={"Chăm sóc cơ thể"} />
      <Tag link={"#"} content={"Dưỡng da"} />
      <Tag link={"#"} content={"Trang điểm"} />
      <Tag link={"#"} content={"Khuyến mãi"} />
      <Tag link={"#"} content={"Blog làm đẹp"} />
    </div>
  );
};

export default SuggestionTag;
