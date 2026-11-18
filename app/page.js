"use client";
import { useState } from "react";

export default function Home() {
  const [point, setPoint] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [locked, setLocked] = useState(true);

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12 text-slate-900 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-10">useState</h1>
      <div className="flex gap-5">
        <div className="bg-gray-200 rounded-3xl flex flex-col items-center gap-5 p-5 w-60 h-60">
          <div className="font-bold">🔢 Counter</div>
          <div className="text-8xl">{point}</div>
          <div className="flex gap-5 justify-center">
            <button
              onClick={() => setPoint(point - 1)}
              className="text-4xl bg-gray-300 rounded-full px-4"
            >
              -
            </button>
            <button
              onClick={() => setPoint(point + 1)}
              className="text-3xl bg-gray-300 rounded-full px-3"
            >
              +
            </button>
          </div>
        </div>
        <div
          className={`${!isOn ? "bg-blue-950" : "bg-yellow-200"} text-white rounded-3xl flex flex-col items-center gap-5 p-5 w-60 h-60`}
        >
          <div className="font-bold">💡 Light</div>
          <div className="text-8xl">{isOn ? "☀️" : "🌑"}</div>
          <button
            onClick={() => setIsOn(!isOn)}
            className="text-2xl font-bold bg-yellow-300 text-black rounded-full px-4 py-1"
          >
            {isOn ? "Turn Off" : "Turn On"}
          </button>
        </div>
        <div className="bg-gray-200 rounded-3xl flex flex-col items-center gap-5 p-5 w-60">
          <div className="font-bold">🔒 secret message</div>
          <div className="text-8xl">{locked ? "🔒" : "🔓"}</div>
          <div className="flex gap-5 justify-center">
            <button
              onClick={() => setLocked(!locked)}
              className="text-2xl font-bold bg-yellow-300 text-black rounded-full px-4 py-1"
            >
              {locked ? "show" : "hide"}
            </button>
          </div>
          <div style={{ display: locked ? "none" : "block" }}>Hi</div>
        </div>
      </div>
    </main>
  );
}
