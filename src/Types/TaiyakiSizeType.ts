const TaiyakiSize = {
  S: "小",
  M: "中",
  L: "大",
} as const;

type TaiyakiSize = (typeof TaiyakiSize)[keyof typeof TaiyakiSize];

export default TaiyakiSize;
