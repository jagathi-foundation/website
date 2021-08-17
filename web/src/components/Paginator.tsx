import React from "react";

interface Props {
  len: number;
  setPlen: React.Dispatch<React.SetStateAction<number>>;
  plen: number;
}

const Paginator: React.FC<Props> = ({ len, setPlen, plen }) => {
  const noMoreContent = plen * 9 >= len;
  return (
    <>
      {len > 9 && (
        <div className="pt-4 pb-5">
          <button
            className="items-center flex text-center m-auto bg-yellow-500  py-2 px-7 text-white rounded shadow-md cursor-pointer"
            onClick={() => (noMoreContent ? setPlen(1) : setPlen(plen + 1))}
          >
            {noMoreContent ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </>
  );
};

export default Paginator;
