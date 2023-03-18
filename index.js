function distanceFromHqInBlocks(pickupLocation) {
  const hqLocation = 42;
  return Math.abs(hqLocation - pickupLocation);
  
}
function distanceFromHqInFeet(pickupLocation) {
  const feetPerBlock = 264;
  const distanceInBlocks = distanceFromHqInBlocks(pickupLocation);
  return distanceInBlocks * feetPerBlock;
}
function distanceTravelledInFeet(startBlock, endBlock) {
  const feetPerBlock = 264;
  const distanceInBlocks = Math.abs(endBlock - startBlock);
  return distanceInBlocks * feetPerBlock;
}
function calculatesFarePrice(startBlock, endBlock) {
  const distance = distanceTravelledInFeet(startBlock, endBlock);
  let fare;
  
  if (distance <= 400) {
    fare = 0;
  } else if (distance > 400 && distance <= 2000) {
    fare = (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    fare = 25;
  } else {
    fare = 'cannot travel that far';
  }
  
  return fare;
}
