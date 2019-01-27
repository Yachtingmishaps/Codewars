var capitals = function (word) {
	let wordAllCaps = word.toUpperCase();
  let orderedList = [];
  for (let i = 0; i < word.length; i++) {
  if (word[i] === wordAllCaps[i]) {
  orderedList.push(i);
  };
  
  };
  return orderedList;
};
