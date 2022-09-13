import { useEffect, useState } from "react";

// Side effect

// 1. useEffect(callback)
// - Gọi callback mỗi khi component re-render
// - Gọi callback sau khi component thêm element vào DOM
// - Callback trong useEffect chỉ được gọi sau khi element đã được render vào DOM.

// 2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component mounted

// 3. useEffect(callback, [deps])
// - callback được gọi lại mỗi khi depedencies thay đổi
// - Chỉ khi dependencies thay đổi thì callback trong useEffect mới được gọi lại.

// -------------------------
// 1. Callback luôn được gọi sau khi component mounted
// 2. Cleanup function luôn được gọi trước khi component unmount.
function ExUseEffect() {
  const tabs = ["posts", "comments", "albums"];
  const [posts, setPost] = useState([]);
  const [type, setType] = useState("posts");
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPost(posts);
      });
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY >= 500);
    };
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    console.log("addEventListener");
    //Cleanup Function :  gọi trc khi component bị unmoun
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      console.log("removeEventListener");
    };
  }, []);

  return (
    <div>
      <h1>{width}</h1>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setType(tab)}
          style={
            type === tab
              ? {
                  color: "#FFF",
                  backgroundColor: "#333",
                }
              : {}
          }
        >
          {tab}
        </button>
      ))}
      <div style={{ padding: 20 }}>
        {posts.map((post) => (
          <h1 key={post.id}>{post.name || post.title}</h1>
        ))}
      </div>
      {showGoToTop && (
        <button
          style={{
            position: "fixed",
            right: 20,
            bottom: 20,
          }}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          Go to Top
        </button>
      )}
    </div>
  );
}

export default ExUseEffect;
