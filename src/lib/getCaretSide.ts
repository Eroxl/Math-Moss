const getCaretSide = (
  event: React.MouseEvent<HTMLSpanElement, MouseEvent>,
): 'left' | 'right' => {
  const { clientX, target } = event;
  const { left, width } = (target as HTMLSpanElement).getBoundingClientRect();
  
  return clientX - left > width / 2 ? 'right' : 'left';
};

export default getCaretSide;
