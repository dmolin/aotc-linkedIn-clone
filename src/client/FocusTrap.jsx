import _ from "lodash";
import { Fragment, useCallback, useEffect, useRef } from "react";

const FocusTrap = props => {
  const { children, className = "", onExit } = props;
  const trapRef = useRef();

  const _checkFocus = useCallback((ev) => {
    // console.log("target", ev.target);
    if (!trapRef.current) return;
    if (trapRef.current.contains(ev.target)) return;
    // console.log("trying to escape. target", ev.target);
    // focus trying to escape!
    setTimeout(() => trapRef.current.focus(), 10);
  })

  const _onKeydown = e => {
    console.log("keydown", e);
    if (e.key === "Escape" && _.isFunction(onExit)) {
      onExit();
    }
  };

  useEffect(() => {
    trapRef.current?.children[0]?.focus();
    document.addEventListener("focus", _checkFocus, true);
    return () => {
      document.removeEventListener("focus", _checkFocus, true);
    }
  }, []);


  return (
    <div className={className} onKeyDown={_onKeydown} tabIndex={-1} ref={trapRef}>
      {children}
    </div>
  )
};

export default FocusTrap;
