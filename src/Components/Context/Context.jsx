import React, { createContext } from "react";
import { useContext } from "react";

const CountContext = createContext();

const CountProvider = (props) => {
  console.log(props);
  const [count, setCount] = React.useState(0);

  const value = [count, setCount];
  return <CountContext.Provider {...props} value={value} />;
};

const Coundisplay = () => {
  const contetx = useContext(CountContext);
  return <div>The count is : {contetx}</div>;
};

const Counter = () => {
  const [, setCount] = useContext(CountContext);
  const inscrement = () => setCount((c) => c + 1);
  return (
    <button
      onClick={inscrement}
      className="p-4 font-semibold text-white bg-purple-500 rounded-lg"
    >
      inscrement Count
    </button>
  );
};
const Contetx = () => {
  //compA => CompB => CompC
  //1 create context
  //2 provider
  //3 Consumer

  return (
    <CountProvider>
      <div className="flex items-center justify-center p-5 gap-x-5">
        <Coundisplay />
        <Counter />
      </div>
    </CountProvider>
  );
};

export default Contetx;
