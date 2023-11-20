export const isiData = (results) => {
  const inputMapping = [
    { id: "namalengkap", path: "mahasiswa.namalengkap" },
    { id: "email", path: "mahasiswa.akun.email" },
    { id: "perguruantinggi", path: "mahasiswa.perguruantinggi" },
    { id: "posisi", path: "magang.posisi" },
    { id: "namalengkapmentor", path: "mentor.namalengkap" },
    { id: "nik", path: "mentor.nik" },
    { id: "emailmentor", path: "mentor.akun.email" },
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
