import React from "react";

const Quantity = (props: {
  count: number;
  descreaseCount: any;
  increaseCount: any;
}) => {
  const { count, descreaseCount, increaseCount } = props;

  return (
    <div className="flex gap-x-4 items-center">
      <div
        className="w-8 h-8 flex justify-center items-center rounded-full text-2xl bg-gray-200 cursor-pointer"
        onClick={descreaseCount}
      >
        -
      </div>
      <span className="text-lg">{count}</span>
      <div
        className="w-8 h-8 flex justify-center items-center rounded-full text-2xl border border-black cursor-pointer"
        onClick={increaseCount}
      >
        +
      </div>
    </div>
  );
};

export default Quantity;
