const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let reducer = (batteryBatches) => {
  let totalBatteries = 0;
  return batteryBatches.reduce((totalBatteries, i) => i += total, 0);
};