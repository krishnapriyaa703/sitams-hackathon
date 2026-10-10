const title = document.getElementById("title");
const notes = document.getElementById("notes");
const status = document.getElementById("status");
window.onload = function () {
    title.value = localStorage.getItem("khTitle") || "";
    notes.value = localStorage.getItem("khNotes") || "";
};
function saveNote() {
    localStorage.setItem("khTitle", title.value);
    localStorage.setItem("khNotes", notes.value);
    status.textContent = "Note saved successfully!";
}
function clearNote() {
    title.value = "";
    notes.value = "";
    status.textContent = "New note started.";
}
function downloadNote() {
    const content = title.value + "\n\n" + notes.value;
    const file = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");

    link.href = URL.createObjectURL(file);
    link.download = (title.value || "study-notes") + ".txt";
    link.click();

    URL.revokeObjectURL(link.href);
}
title.addEventListener("input", saveNote);
notes.addEventListener("input", saveNote);
