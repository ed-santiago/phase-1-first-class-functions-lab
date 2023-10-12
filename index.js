const returnFirstTwoDrivers = function(scubersDrivers) {
  return scubersDrivers.slice(0,2)
}

const returnLastTwoDrivers = function(scubersDrivers) {
  return scubersDrivers.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = num => function() {
  return num * 5
}

const fareDoubler = dblFare => 2 * dblFare

const fareTripler = dblFare => 3 * dblFare

function selectDifferentDrivers(scubersDrivers, selectDrivers) {
  return selectDrivers(scubersDrivers)
}