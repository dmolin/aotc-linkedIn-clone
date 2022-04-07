/**
 * When called it will return a function that can be passed as an event handler and will "swallow" the event,
 * preventing propagation (noProp = true) and/or default behaviour (noDef = true)
 * @param {Boolean} [noDef = true] if true, the default event is prevented
 * @param {Boolean} [noProp = true] if true, event propagation is stopped when the event fires up
 */
export const swallowEvent = (noDef = true, noProp = true) => e => {
  noDef && e?.preventDefault && e.preventDefault();
  noProp && e?.stopPropagation && e.stopPropagation();
}
