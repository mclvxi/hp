const zeroPadding = (NUM: number, LEN: number) => {
  return (Array(LEN).join("0") + NUM).slice(-LEN);
};
export default zeroPadding;
