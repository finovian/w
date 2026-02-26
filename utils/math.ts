export function getArcPath(score: number, total: number, radius: number, centerX: number, centerY: number, startX: number, startY: number) {
  const percentage = score / total;
  const angle = Math.PI - percentage * Math.PI;
  const endX = centerX + radius * Math.cos(angle);
  const endY = centerY - radius * Math.sin(percentage * Math.PI);
  
  return `M ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${endX} ${endY}`;
}
