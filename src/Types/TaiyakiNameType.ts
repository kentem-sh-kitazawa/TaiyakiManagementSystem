const TaiyakiName = {
  default: "通常たい焼き",
  custard: "カスタードたい焼き",
  deluxe: "デラックスたい焼き",
} as const;

type TaiyakiName = (typeof TaiyakiName)[keyof typeof TaiyakiName];

export default TaiyakiName;
