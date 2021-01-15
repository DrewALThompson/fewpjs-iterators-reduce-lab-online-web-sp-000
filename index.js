const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = (batteryBatches) => {
  return batteryBatches.reduce((total, i) => i += total, 0);
};