module.exports = (keyStr, maxLen, probeStep = 0) => {
  let hash = 0;
  let probeHash = 0;
  for (let i = 0; i < keyStr.length; i++) {
    hash += keyStr.charCodeAt(i) * i;
  }

  // use double hashing
  if (probeStep > 0) {
    for (let i = 0; i < keyStr.length; i++) {
      probeHash += keyStr.charCodeAt(i) * i * i;
    }
  }
  // console.log(hash);
  return (hash + probeStep * probeHash) % maxLen;
};

