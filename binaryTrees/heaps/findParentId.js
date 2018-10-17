module.exports = function findParentId(childId) {
  return Math.floor((childId - 1) / 2);
};