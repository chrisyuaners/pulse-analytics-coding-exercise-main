export default function filterBy(data, searchTerm, keys) {
  // * Write function here
  return data.filter(person => {
    let match = false;
    for (let key of keys) {
      const searchValue = person[key].toLowerCase();
      const searchTermLower = searchTerm.toLowerCase();
      if (searchValue.includes(searchTermLower)) {
        match = true;
      }
    }
    return match;
  });
}
