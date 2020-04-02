import emitter from "./emitter";

const refs = {};

const selectRefs = () => {
  refs.list = document.querySelector(".list");
};

const addNote = ({ note }) => {
  const markup = `<li><span >${note}</span></li>`;

  refs.list.insertAdjacentHTML("beforeend", markup);
};

selectRefs();
emitter.subscribe(emitter.types.NOTE_ADDED, addNote);
