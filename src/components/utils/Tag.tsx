interface TagProps {
  link: string;
  content: string;
}

const Tag: React.FC<TagProps> = ({ link, content }) => {
  return (
    <>
      <a
        href={link}
        className="border border-[rgba(0,0,0,.1)] p-2 rounded-md w-full"
      >
        {content}
      </a>
    </>
  );
};

export default Tag;
