import React, { useState } from "react";
import {
  setTipsAmount,
  removeTipsAmount,
  showCustom,
  hideCustom,
} from "../../../store/reducer/cartSlice";
import { useDispatch, useSelector } from "react-redux";
function TipsController() {
  const { tipsAmount, isCustom } = useSelector((state) => state.cartSlice);
  const [customTip, setCustomTip] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleTipsAmount = async (tips) => {
    setLoading(true);
    try {
      await dispatch(setTipsAmount(tips));
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const tip = Number(e.target.value);
    if (tip < 10) {
      setError("Tips should be gratter than 10");
    }
    if (tip > 10) {
      setError("");
    }
    setCustomTip(tip);
  };

  const handleCustomTip = () => {
    const tip = customTip ? Number(customTip) : 0;
    dispatch(setTipsAmount(tip));
    dispatch(hideCustom());
    setCustomTip("");
  };

  return (
    <div className="flex flex-col px-2 py-5 bg-white rounded-lg gap-2">
      <div className="flex">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">Tip your delivery partner</h2>
          <p className="text-xs text-gray-500 leading-3">
            Your kindness means a lot! 100% of your tip will go directly to your
            delivery partner.
          </p>
        </div>
        {tipsAmount > 0 && (
          <div className="flex flex-col items-center  text-xs px-3">
            <p>₹{tipsAmount}</p>
            <button
              className="p-0 text-custom-purple"
              onClick={() => dispatch(removeTipsAmount())}
            >
              clear
            </button>
          </div>
        )}
      </div>
      {!isCustom ? (
        <>
          {!loading ? (
            <div className="cart_tips flex items-center justify-between gap-1 w-full">
              <div
                className={`${
                  tipsAmount === 10 &&
                  "border-custom-purple bg-custom-purple/20"
                } border flex gap-1 rounded-lg cursor-pointer h-auto w-[100px] px-1 py-2 items-center`}
                onClick={() => handleTipsAmount(10)}
              >
                <div className="h-[20px] w-[20px]">
                  <img
                    src="https://em-content.zobj.net/source/apple/391/grinning-face-with-smiling-eyes_1f604.png"
                    alt="grinning-face-with-smiling-eyes_1f604.png"
                    className="h-[20px]"
                  />
                </div>
                <h1>₹10</h1>
              </div>
              <div
                className={`${
                  tipsAmount === 30 &&
                  "border-custom-purple bg-custom-purple/20"
                } border flex flex-col gap-1 rounded-lg cursor-pointer h-auto w-[100px] px-1 items-center justify-center `}
                onClick={() => handleTipsAmount(30)}
              >
                <p className="flex items-center justify-center gap-1 w-[20px]">
                  <img
                    src="https://em-content.zobj.net/source/apple/391/star-struck_1f929.png"
                    alt="star-struck_1f929.png"
                    className="h-[20px]"
                  />
                  <h1>₹30</h1>
                </p>
                <p className="text-[8px] text-custom-purple">MOST TIPPED</p>
              </div>
              <div
                className={`${
                  tipsAmount === 50 &&
                  "border-custom-purple bg-custom-purple/10"
                } border flex gap-1 rounded-lg cursor-pointer h-auto w-[100px] px-1 py-2 items-center`}
                onClick={() => handleTipsAmount(50)}
              >
                <div className="h-[20px] w-[20px]">
                  <img
                    src="https://em-content.zobj.net/source/apple/391/smiling-face-with-heart-eyes_1f60d.png"
                    alt="smiling-face-with-heart-eyes_1f60d.png"
                    className="h-[20px]"
                  />
                </div>
                <h1>₹50</h1>
              </div>
              <div
                className={`${
                  ![10, 30, 50].includes(tipsAmount) &&
                  "border-custom-purple bg-custom-purple/10"
                } border flex gap-1 rounded-lg cursor-pointer h-auto w-[100px] px-1 py-2 items-center`}
                onClick={() => dispatch(showCustom())}
              >
                <div className="h-[20px] w-[20px]">
                  <img
                    src="https://em-content.zobj.net/source/apple/391/clapping-hands_1f44f.png"
                    alt="clapping-hands_1f44f.png"
                  />
                </div>
                <h1>Custom</h1>
              </div>
            </div>
          ) : (
            <div>Loading</div>
          )}
        </>
      ) : (
        <div className="flex gap-2 items-center justify-between">
          <div
            className={`${
              isCustom && "border-custom-purple bg-custom-purple/10"
            } border flex gap-1 rounded-lg cursor-pointer h-auto w-[100px] px-1 py-2 items-center`}
            onClick={() => dispatch(hideCustom())}
          >
            <div className="h-[20px] w-[20px]">
              <img
                src="https://em-content.zobj.net/source/apple/391/clapping-hands_1f44f.png"
                alt="clapping-hands_1f44f.png"
              />
            </div>
            <h1>Custom</h1>
          </div>
          <div className="flex flex-col">
            <div className="border-b">
              <input
                type="number"
                value={![10, 30, 50].includes(customTip) ? customTip : ""}
                placeholder="Enter tips"
                onChange={handleChange}
                className="w-full outline-none h-[15px] text-xs"
              />
            </div>
            <p className="text-[9px] text-red-400 h-[11px]">{error}</p>
          </div>

          <div>
            {customTip ? (
              <button
                className="text-custom-purple w-[50px]"
                onClick={handleCustomTip}
              >
                ADD
              </button>
            ) : (
              <button
                className="text-custom-purple w-[50px]"
                onClick={() => dispatch(hideCustom())}
              >
                CLOSE
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default TipsController;
