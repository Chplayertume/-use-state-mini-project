export default function Home() {
  const items = [
    {
      id: 1,
      name: "Модон сэлэм",
      emoji: "🗡️",
      rarity: "common",
      power: 12,
      type: "Зэвсэг",
    },
    {
      id: 2,
      name: "Төмөр бамбай",
      emoji: "🛡️",
      rarity: "common",
      power: 18,
      type: "Хамгаалалт",
    },
    {
      id: 3,
      name: "Улаан эм",
      emoji: "🧪",
      rarity: "common",
      power: 10,
      type: "Эм",
    },
    {
      id: 4,
      name: "Анчны нум",
      emoji: "🏹",
      rarity: "rare",
      power: 34,
      type: "Зэвсэг",
    },
    {
      id: 5,
      name: "Мөнгөн дуулга",
      emoji: "🪖",
      rarity: "rare",
      power: 30,
      type: "Хамгаалалт",
    },
    {
      id: 6,
      name: "Хөх кристал",
      emoji: "💎",
      rarity: "rare",
      power: 40,
      type: "Ид шид",
    },
    {
      id: 7,
      name: "Аянгын алх",
      emoji: "🔨",
      rarity: "epic",
      power: 68,
      type: "Зэвсэг",
    },
    {
      id: 8,
      name: "Галт ном",
      emoji: "📕",
      rarity: "epic",
      power: 72,
      type: "Ид шид",
    },
    {
      id: 9,
      name: "Шидэт бөгж",
      emoji: "💍",
      rarity: "epic",
      power: 60,
      type: "Ид шид",
    },
    {
      id: 10,
      name: "Лууны сэлэм",
      emoji: "⚔️",
      rarity: "legendary",
      power: 95,
      type: "Зэвсэг",
    },
    {
      id: 11,
      name: "Алтан титэм",
      emoji: "👑",
      rarity: "legendary",
      power: 88,
      type: "Хамгаалалт",
    },
    {
      id: 12,
      name: "Галт шувууны өд",
      emoji: "🪶",
      rarity: "legendary",
      power: 99,
      type: "Ид шид",
    },
  ];
  return (
    <div className="w-full h-screen bg-blue-950">
      <div className="max-w-170 h-full bg-blue-950 m-auto">
        <div className="mb-8">
          <h1 className="font-bold text-2xl">🎒 My backpack</h1>
          <h4 className="text-gray-300 text-sm">12 items</h4>
        </div>
        <div className="flex flex-wrap gap-1">
          {items.map((item) => {
            let color = "";
            if (item.rarity === "common") {
              color = "bg-gray-800";
            } else if (item.rarity === "rare") {
              color = "bg-blue-500";
            } else if (item.rarity === "epic") {
              color = "bg-purple-500";
            } else {
              color = "bg-amber-300";
            }
            let borderColor = "";
            if (item.rarity === "common") {
              borderColor = "border-gray-600";
            } else if (item.rarity === "rare") {
              borderColor = "border-blue-800";
            } else if (item.rarity === "epic") {
              borderColor = "border-purple-800";
            } else {
              borderColor = "border-amber-500";
            }
            let buttonColor = "";
            if (item.rarity === "common") {
              buttonColor = "bg-gray-900";
            } else if (item.rarity === "rare") {
              buttonColor = "bg-blue-900";
            } else if (item.rarity === "epic") {
              buttonColor = "bg-purple-900";
            } else {
              buttonColor = "bg-amber-600";
            }

            return (
              <div
                className={`w-41 h-32 ${color} border-solid border-2 ${borderColor} rounded-xl p-2 shadow-2xl flex flex-col items-center justify-between bg-opacity-10`}
              >
                <div className="flex flex-col items-center">
                  <h1 className="text-3xl">{item.emoji}</h1>
                  <h1 className="font-bold">{item.name}</h1>
                  <h1 className="text-sm text-gray-400">{item.type}</h1>
                </div>
                <div className="w-full flex justify-between items-center">
                  <div className={`text-xs p-2 ${buttonColor} rounded-2xl`}>
                    {item.rarity}
                  </div>
                  <div className="text-xs">{item.power}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
