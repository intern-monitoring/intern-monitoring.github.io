export const isiDataProfile = (results) => {
  const inputMapping = [
    { id: "namanarahubung", path: "namanarahubung" },
    { id: "nohpnarahubung", path: "nohpnarahubung" },
    { id: "kategori", path: "kategori" },
    { id: "sektorindustri", path: "sektorindustri" },
    { id: "alamat", path: "alamat" },
    { id: "website", path: "website" },
    // { id: "tentang", path: "tentang" },
    // { id: "nama", path: "nama" },
  ];

  inputMapping.forEach(({ id, path, index, property }) => {
    const inputElement = document.getElementById(id);
    const value = getNestedValue(results, path, index, property);
    inputElement.value = value;
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
