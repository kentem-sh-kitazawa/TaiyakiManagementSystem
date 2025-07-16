const TaiyakiName = {
  0: "通常たい焼き",
  1: "カスタードたい焼き",
  2: "デラックスたい焼き",
} as const;

type TaiyakiName = (typeof TaiyakiName)[keyof typeof TaiyakiName];

export default TaiyakiName;
