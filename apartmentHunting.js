// O(b^2*r) time | O(b) space - r=reqs, b=blocks
// function apartmentHunting(blocks, reqs) {
//   const maxDistanceAtBlocks = new Array(blocks.length).fill(-Infinity);
//   for (let i = 0; i < blocks.length; i++) {
//     for (const req of reqs) {
//       let closestReqDistance = Infinity;
//       for (let j = 0; j < blocks.length; j++) {
//         if (blocks[j][req]) {
//           closestReqDistance = Math.min(
//             closestReqDistance,
//             distanceBetween(i, j)
//           );
//         }
//       }
//       maxDistanceAtBlocks[i] = Math.max(
//         maxDistanceAtBlocks[i],
//         closestReqDistance
//       );
//     }
//   }
//   return getIdxAtMinValue(maxDistanceAtBlocks); //?
// }

// O(br) time | O(br) space
function apartmentHunting(blocks, reqs) {
  const minDistancesFromBlocks = reqs.map((req) =>
    getMinDistances(blocks, req)
  );
  const maxDistanceAtBlocks = getMaxDistancesAtBlocks(
    blocks,
    minDistancesFromBlocks //?
  );
  return getIdxAtMinValue(maxDistanceAtBlocks); //?
}

function getMinDistances(blocks, req) {
  const minDistances = new Array(blocks.length);
  let closestReqIdx = Infinity;
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i][req]) closestReqIdx = i;
    minDistances[i] = distanceBetween(i, closestReqIdx);
  }
  for (let i = blocks.length - 1; i >= 0; i--) {
    if (blocks[i][req]) closestReqIdx = i;
    minDistances[i] = Math.min(
      minDistances[i],
      distanceBetween(i, closestReqIdx)
    );
  }
  return minDistances; //?
}

function getMaxDistancesAtBlocks(blocks, minDistancesFromBlocks) {
  const maxDistanceAtBlocks = new Array(blocks.length);
  for (let i = 0; i < blocks.length; i++) {
    const minDistancesAtBlock = minDistancesFromBlocks.map(
      (distances) => distances[i]
    ); //?
    maxDistanceAtBlocks[i] = Math.max(...minDistancesAtBlock); //?
  }
  return maxDistanceAtBlocks; //?
}

function getIdxAtMinValue(array) {
  let idxAtMinValue = 0;
  let minValue = Infinity;
  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];
    if (currentValue < minValue) {
      minValue = currentValue;
      idxAtMinValue = i;
    }
  }
  return idxAtMinValue; //?
}

function distanceBetween(a, b) {
  return Math.abs(a - b);
}

apartmentHunting(
  [
    { gym: false, school: true, store: false },
    { gym: true, school: false, store: false },
    { gym: true, school: true, store: false },
    { gym: false, school: true, store: false },
    { gym: false, school: true, store: true },
  ],
  ["gym", "school", "store"]
);
