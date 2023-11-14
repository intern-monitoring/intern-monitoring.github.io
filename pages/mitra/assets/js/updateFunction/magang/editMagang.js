export const isiData = (results) => {
  const inputMapping = [
    { id: "posisi", path: "posisi" },
    { id: "lokasi", path: "lokasi" },
    { id: "expired", path: "expired" },
  ];

  inputMapping.forEach(({ id, path, index, property }) => {
    const inputElement = document.getElementById(id);
    const value = getNestedValue(results, path, index, property);
    inputElement.value = value;
  });

  const inputMappingTiptap = [
    { id: "deskripsimagang", path: "deskripsimagang" },
    { id: "infotambahanmagang", path: "infotambahanmagang" },
  ];

  inputMappingTiptap.forEach(({ id, path, index, property }) => {
    const inputElement = document.getElementById(id);
    const value = getNestedValue(results, path, index, property);
    inputElement.innerHTML = value;
  });
};

const getNestedValue = (obj, path, index, property) => {
  const value = path
    .split(".")
    .reduce((value, key) => (value && value[key] ? value[key] : ""), obj);

  if (
    Array.isArray(value) &&
    value.length > index &&
    value[index].hasOwnProperty(property)
  ) {
    return value[index][property];
  }

  return value;
};
