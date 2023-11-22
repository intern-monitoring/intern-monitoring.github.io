const urlParams = new URLSearchParams(window.location.search);
const mentorId = urlParams.get("mentorId");

export const urlFetch =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-mentor?id=" +
  mentorId;
