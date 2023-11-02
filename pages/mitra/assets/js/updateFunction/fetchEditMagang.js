import { get } from "https://jscroot.github.io/api/croot.js";
import { isiData } from "./editMagang.js";

const urlParams = new URLSearchParams(window.location.search);
const magangId = urlParams.get("magangId");

let urlFetch =
  "https://asia-southeast2-bursakerja-project.cloudfunctions.net/intermoni-magang-mitra/" +
  magangId;

get(urlFetch, isiData);
