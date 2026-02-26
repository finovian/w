export interface ScoreBarItem {
  label: string;
  score: number;
  max: number;
  barGradient: string;
  barWidth: number;
}

export interface LockedStepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  buttonLabel: string;
  points: number;
}
