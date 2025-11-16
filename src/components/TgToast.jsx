"use client";
import React, { useEffect, useState } from "react";

// Simple event-based toast system
// Exported function `tgtoast(message, { type })` can be used anywhere in client code.

const TOAST_EVENT = "tgtoast-event";

export function tgtoast(message, opts = {}) {
  const detail = {
    message,
    type: opts.type || "info",
    id: Date.now() + Math.random(),
  };
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(TOAST_EVENT, { detail }));
  }
}

export default function TgToastContainer() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    function onToast(e) {
      setToasts((t) => [...t, e.detail]);
      // auto remove after 4s
      setTimeout(() => {
        setToasts((t) => t.filter((itm) => itm.id !== e.detail.id));
      }, 4000);
    }

    window.addEventListener(TOAST_EVENT, onToast);
    return () => window.removeEventListener(TOAST_EVENT, onToast);
  }, []);

  if (!toasts.length) return null;

  return (
    <div className="tgtoast-container fixed top-6 right-6 z-50 flex flex-col gap-3">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`tgtoast min-w-[200px] max-w-sm px-4 py-3 rounded shadow-md text-sm text-white flex items-center justify-between ${
            t.type === "success"
              ? "bg-green-600"
              : t.type === "error"
              ? "bg-red-600"
              : "bg-gray-800"
          }`}
        >
          <div className="truncate">{t.message}</div>
        </div>
      ))}
    </div>
  );
}
