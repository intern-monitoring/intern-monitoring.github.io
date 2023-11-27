import { get } from "./getMhsMagangFunction.js";

const URLGet =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-mahasiswa-magang";

export let pembimbingID;
export let mentorID;

const responseID = (results) => {
  results.forEach((result) => {
    getIDMentor(result);
    getIDPembimbing(result);
  });
};

const getIDMentor = (value) => {
  if (value.status === 1) {
    pembimbingID = value.pembimbing._id;
  }
  console.log(mentorID);
};

const getIDPembimbing = (value) => {
  if (value.status === 1) {
    mentorID = value.mentor._id;
  }
  console.log(pembimbingID);
};

get(URLGet, responseID);
