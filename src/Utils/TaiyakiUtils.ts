import type { taiyaki } from "../Types/TaiyakiType";

export const taiyakiInfos: taiyaki[] = [
  { name: "通常たい焼き", type: "あんこ", price: [200, 150, 100] },
  { name: "カスタードたい焼き", type: "カスタード", price: [250, 200, 150] },
  {
    name: "デラックスたい焼き",
    type: "生クリームとカスタード",
    price: [300],
  },
];

export const taiyakiSizes: string[] = ["大", "中", "小"];
