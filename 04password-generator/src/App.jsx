import React, { useCallback, useEffect, useRef, useState } from "react";

export default function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let psw = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_{}[]?~";

    for (let i = 0; i < length; i++) {
      let pos = Math.floor(Math.random() * str.length + 1);
      let char = str.charAt(pos)
      psw += char;
    }
    setPassword(psw);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator])

  let passwordRef = useRef(null);

  // You can use useCallback here too 
  const copyPasswordToClipboard = ()=>{
    // add selected effect
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,10);
    window.navigator.clipboard.writeText(password)
  }

  return (
    <div className=" flex flex-col items-center justify-center w-full mx-auto my-6 text-orange-400  max-w-md bg-gray-600 p-3 rounded-2xl  shadow-lg">
      <h1 className="w-full text-center text-white font-bold">
        Password Generator
      </h1>

      <div className=" w-full flex items-center justify-center">
        <input
          type="text"
          placeholder="password"
          readOnly
          value={password}
          ref={passwordRef}
          className="outline-none p-3 m-2 w-full rounded-lg rounded-r-none pr-0 mr-0 "
        ></input>
        <button
         className=" bg-blue-500 p-3 gap-0 text-white font-bold rounded-lg rounded-l-none hover:bg-blue-800"
         onClick={copyPasswordToClipboard}
         >
          Copy
        </button>
      </div>

      <div className=" w-full flex items-center gap-2 p-3">
        <div className=" flex gap-1">
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            id="len"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label htmlFor="len">Length({length})</label>
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            id="numbers"
          />
          <label htmlFor="numbers">Numbers</label>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            id="characters"
          />
          <label htmlFor="characters">Characters</label>
        </div>
      </div>
    </div>
  );
}
