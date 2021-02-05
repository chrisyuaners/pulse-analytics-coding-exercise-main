export default function uniqueBy(data, key) {
  // * Write function here
  const uniqueKeys = {};
  const dataToReplace = {};

  for (let i = 0; i < data.length; i++) {
    const keyValue = data[i][key];
    if (!uniqueKeys[keyValue]) {
      uniqueKeys[keyValue] = true;
    } else {
      dataToReplace[keyValue] = data.splice(i, 1);
    }
  }

  for (let j = 0; j < data.length; j++) {
    const keyValue = data[j][key];
    if (dataToReplace[keyValue]) {
      data.splice(j, 1, dataToReplace[keyValue][0]);
    }
  }
  
  return data;
}
