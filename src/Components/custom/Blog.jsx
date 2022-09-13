import useLinkNewTab from "./userLinkNewTab";
import useHover from "./useHover";

const Blog = () => {
  const { contentRef } = useLinkNewTab();
  const { hover, nodeRef } = useHover();
  return (
    <div className="entry-content" ref={contentRef}>
      <p className="mb-5">
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam{" "}
        <a
          href="https://google.com"
          className={`underline ${hover ? "text-green-400 " : ""}`}
          ref={nodeRef}
        >
          google.com
        </a>
      </p>
      <p className="mb-5">
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam{" "}
        <a
          href="https://google.com"
          className={`underline ${hover ? "text-green-400 " : ""}`}
          ref={nodeRef}
        >
          google.com
        </a>
      </p>
      <p className="mb-5">
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam{" "}
        <a
          href="https://google.com"
          className={`underline ${hover ? "text-green-400 " : ""}`}
          ref={nodeRef}
        >
          google.com
        </a>
      </p>
    </div>
  );
};

export default Blog;
