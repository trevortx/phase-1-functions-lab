const hq = 42;
const feet = 264;
const price = .02;
const flat = 25;

function distanceFromHqInBlocks(street) {
  if (street > 42) {
    return (street - hq);
  } else return (hq - street);
}

function distanceFromHqInFeet(street) {
  distanceFromHqInBlocks(street);
  return (distanceFromHqInBlocks(street) * feet);
}

function distanceTravelledInFeet(start, destination) {
  if (start > destination) {
    return ((start - destination) * feet);
  } else return ((destination - start) * feet);
}

function calculatesFarePrice(start, destination) {
  distanceTravelledInFeet(start, destination);
  if (distanceTravelledInFeet(start, destination) > 2500) {
    return ('cannot travel that far');
  } else if (distanceTravelledInFeet(start, destination) > 2000) {
    return (flat);
  } else if (distanceTravelledInFeet(start, destination) > 400) {
    return ((distanceTravelledInFeet(start, destination) - 400) * price);
  } else return (0);
}
