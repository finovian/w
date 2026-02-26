import { ScoreBarItem } from "../types";

export const scoreItems: ScoreBarItem[] = [
  {
    label: "Emergency Funds",
    score: 0,
    max: 20,
    barGradient: "linear-gradient(90deg, #FF6969 0%, #FF6969 100%)",
    barWidth: 12,
  },
  {
    label: "Liquidity",
    score: 11,
    max: 20,
    barGradient: "linear-gradient(90deg, #FF6969 0%, #FF6969 42.44%, #FFBC70 53.97%, #FFBC70 60%)",
    barWidth: 148,
  },
  {
    label: "Investments",
    score: 20,
    max: 20,
    barGradient: "linear-gradient(90deg, #FF6969 0%, #FF6969 12.58%, #FFBC70 25.48%, #FFBC70 53.97%, #7EFF7E 65%, #7EFF7E 94.23%)",
    barWidth: 219,
  },
  {
    label: "Health Insurance",
    score: 20,
    max: 20,
    barGradient: "linear-gradient(90deg, #FF6969 0%, #FF6969 12.58%, #FFBC70 25.48%, #FFBC70 53.97%, #7EFF7E 65%, #7EFF7E 94.23%)",
    barWidth: 219,
  },
  {
    label: "Life Insurance",
    score: 7,
    max: 20,
    barGradient: "linear-gradient(90deg, #FF6969 0%, #FF6969 59.62%, #FFBC70 96.63%)",
    barWidth: 86,
  },
  {
    label: "Savings",
    score: 16,
    max: 20,
    barGradient: "linear-gradient(90deg, #FF6969 0%, #FF6969 21.63%, #FFBC70 33.17%, #FFBC70 62.02%, #7EFF7E 88.94%)",
    barWidth: 182,
  },
];

export const commitOptions = ["₹500", "₹1,000", "₹5,000", "₹6,000"];
