import React, { useState } from "react";
import { FiAlignCenter, FiAlignLeft, FiAlignRight } from "react-icons/fi";
import { LuCopyCheck } from "react-icons/lu";
import { RxFontBold, RxFontItalic } from "react-icons/rx";
import { VscReplace, VscReplaceAll } from "react-icons/vsc";
import { TiMediaPlayReverse } from "react-icons/ti";
import { MdDownload, MdRemoveCircle, MdDelete, MdOutlineTextDecrease, MdTextIncrease, } from "react-icons/md";
import { RxLetterCaseUppercase, RxLetterCaseLowercase } from "react-icons/rx";
import logo from './utils/images/logo.png';

const Text = () => {
  const [text, setText] = useState("");
  const [rep, setRep] = useState("");
  const [repWith, setRepWith] = useState("");
  const [fontSize, setFontSize] = useState(16);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [textAlign, setTextAlign] = useState("left");

  const handleOnUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnReplace = () => {
    let newText = text.replace(rep, repWith);
    setText(newText);
  };
  const handleOnReplaceAll = () => {
    let newText = text.replaceAll(rep, repWith);
    setText(newText);
  };
  const handleCopy = () => {
    let newText = document.getElementById("mybox");
    newText.select();
    newText.setSelectionRange(0, Infinity);
    navigator.clipboard.writeText(newText.value);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleClearOnClick = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleRepChange = (event) => {
    setRep(event.target.value);
  };

  const handleRepWithChange = (event) => {
    setRepWith(event.target.value);
  };
  const handleReverse = () => {
    const reversedText = text.split(" ").reverse().join(" ");
    setText(reversedText);
  };
  const handleFontSizeIncrease = () => {
    setFontSize(fontSize + 2);
  };
  const handleFontSizeDecrease = () => {
    setFontSize(fontSize - 2);
  };
  const handleTextAlign = (alignment) => {
    setTextAlign(alignment);
  };
  const handleToggleBold = () => {
    setIsBold(!isBold);
  };
  const handleToggleItalic = () => {
    setIsItalic(!isItalic);
  };
  const handleDownload = () => {
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "text.txt";
    link.click();
  };
  const getWordAndCharacterCount = () => {
    const words = text.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    const characterCount = text.length;
    return { wordCount, characterCount };
  };
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="container mx-auto p-4">
        <div className="justify-center space-y-3 items-center p-4 bg-gray-200 border-b-2 border-gray-600">
          <div className="flex justify-center flex-col items-center">
            <img src={logo} alt="Logo" className="mb-4 h-8 w-8" />
            <h1 className="text-3xl font-bold mb-4 text-center text-blue-900">
              Syntax Sphere
            </h1>
          </div>
          <button
            onClick={handleOnReplace}
            className="bg-blue-500 text-white px-4 py-2 mr-2 rounded item-center "
          >
            <VscReplace />
          </button>
          <button
            onClick={handleOnReplaceAll}
            className="bg-blue-500 text-white px-4 py-2 mr-2 rounded item-center "
          >
            <VscReplaceAll />
          </button>
          <button
            onClick={handleCopy}
            className="bg-blue-500 text-white px-4 py-2 mr-2 rounded item-center "
          >
            <LuCopyCheck />
          </button>
          <button
            onClick={handleReverse}
            className="bg-blue-500 text-white px-4 py-2 mr-2 rounded item-center "
          >
            <TiMediaPlayReverse />
          </button>
          <button
            onClick={handleToggleBold}
            className={`bg-blue-500 text-white px-4 py-2 mr-2 rounded item-center  ${isBold ? "font-bold" : ""
              }`}
          >
            <RxFontBold />
          </button>
          <button
            onClick={handleToggleItalic}
            className={`bg-blue-500 text-white px-4 py-2 mr-2 rounded item-center  ${isItalic ? "italic" : ""
              }`}
          >
            <RxFontItalic />
          </button>
          <button
            onClick={() => handleTextAlign("left")}
            className="bg-blue-500 text-white px-4 py-2 mr-2 rounded item-center "
          >
            <FiAlignLeft />
          </button>
          <button
            onClick={() => handleTextAlign("center")}
            className="bg-blue-500 text-white px-4 py-2 mr-2 rounded item-center "
          >
            <FiAlignCenter />
          </button>
          <button
            onClick={() => handleTextAlign("right")}
            className="bg-blue-500 text-white px-4 py-2 mr-2 rounded item-center "
          >
            <FiAlignRight />
          </button>
          <button
            onClick={handleFontSizeIncrease}
            className="bg-blue-500 text-white px-4 py-2 mr-2 rounded item-center "
          >
            <MdTextIncrease />
          </button>
          <button
            onClick={handleFontSizeDecrease}
            className="bg-blue-500 text-white px-4 py-2 mr-2 rounded item-center "
          >
            <MdOutlineTextDecrease />
          </button>
          <button
            onClick={handleDownload}
            className="bg-blue-500 text-white px-4 py-2 mr-2 rounded item-center "
          >
            <MdDownload />
          </button>
          <button
            onClick={handleExtraSpaces}
            className="bg-blue-500 text-white px-4 py-2 mr-2 rounded item-center "
          >
            <MdRemoveCircle />
          </button>
          <button
            onClick={handleOnUpClick}
            className="bg-blue-500 text-white px-4 py-2 mr-2 rounded item-center "
          >
            <RxLetterCaseUppercase />
          </button>
          <button
            onClick={handleOnLoClick}
            className="bg-blue-500 text-white px-4 py-2 mr-2 rounded item-center "
          >
            <RxLetterCaseLowercase />
          </button>
          <button
            onClick={handleClearOnClick}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            <MdDelete />
          </button>
        </div>

        <div className="flex-1 p-4 flex flex-col">
          <div className="my-4 flex items-center">
            <p className="font-bold">Replace</p>
            <textarea
              id="replacebox"
              value={rep}
              onChange={handleRepChange}
              rows="1"
              cols="10"
              className="border-2 border-black p-2 mx-3 justify-center items-center"
            ></textarea>
            <textarea
              id="replaceboxWith"
              value={repWith}
              onChange={handleRepWithChange}
              rows="1"
              cols="10"
              className="border-2 border-black p-2 justify-center items-center"
            ></textarea>
          </div>
          <textarea
            id="mybox"
            value={text}
            onChange={handleOnChange}
            rows="15"
            cols="95"
            style={{
              fontWeight: isBold ? "bold" : "normal",
              fontStyle: isItalic ? "italic" : "normal",
              textAlign: textAlign,
              fontSize: `${fontSize}px`,
            }}
            className="border-2 border-black p-2 "
          ></textarea>
        </div>
        <div className="p-4 text-right">
          <p className="text-base font-bold">Text Summary</p>
          <p className="text-right">
            {getWordAndCharacterCount().wordCount} words and {getWordAndCharacterCount().characterCount} characters
          </p>
        </div>
      </div>
    </div>
  );
};

export default Text;
