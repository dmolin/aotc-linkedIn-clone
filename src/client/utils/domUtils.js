export function getOrCreateElement (id, className = "") {
  let el = document.getElementById(id);
  if (el) return el;

  el = document.createElement("div");
  el.id = id;
  if (className) {
    el.setAttribute("className", className);
  }
  document.body.appendChild(el);
  return el;
}
