function isiData(results) {
  const inputMapping = [
    { id: "posisi", path: "posisi" },
    { id: "lokasi", path: "lokasi" },
    { id: "deskripsimagang", path: "deskripsimagang" },
    { id: "infotambahanmagang", path: "infotambahanmagang" },
    { id: "tentangmitra", path: "tentangmitra" },
    { id: "expired", path: "expired" },
  ];

  inputMapping.forEach(({ id, path, index, property }) => {
    const inputElement = document.getElementById(id);
    const value = getNestedValue(results, path, index, property);
    inputElement.value = value;
  });
}

function getNestedValue(obj, path, index, property) {
  const value = path
    .split(".")
    .reduce((value, key) => (value && value[key] ? value[key] : ""), obj);
  // console.log(`Value at path ${path}:`, value);

  if (
    Array.isArray(value) &&
    value.length > index &&
    value[index].hasOwnProperty(property)
  ) {
    return value[index][property];
  }

  return value;
}
