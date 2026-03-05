import React, { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { menuItems } from "../config/navigation";

function BoardNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-slateink font-display text-sm font-bold text-white shadow-soft">
            CS
          </div>
          <div>
            <p className="font-display text-lg font-bold leading-tight text-slateink">CS - Ticket System</p>
            <p className="text-[11px] font-medium text-slate-500">Customer Support Workspace</p>
          </div>
        </div>

        <nav className="hidden items-center gap-7 lg:flex">
          {menuItems.map((item, index) => (
            <button
              key={item}
              className={`text-[13px] font-semibold transition ${
                index === 0 ? "text-slateink" : "text-slate-600 hover:text-slateink"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button className="hidden rounded-md bg-brand px-4 py-2 text-xs font-semibold text-white transition hover:brightness-110 sm:inline-flex">
            + New Ticket
          </button>

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="inline-grid h-9 w-9 place-items-center rounded-md border border-slate-200 text-slate-700 transition hover:bg-slate-100 lg:hidden"
          >
            {isMobileMenuOpen ? <FaXmark className="h-4 w-4" /> : <FaBars className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            {menuItems.map((item, index) => (
              <button
                key={item}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`rounded-md px-2 py-2 text-left text-sm font-semibold transition ${
                  index === 0
                    ? "bg-slate-100 text-slateink"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slateink"
                }`}
              >
                {item}
              </button>
            ))}

            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 rounded-md bg-brand px-4 py-2 text-xs font-semibold text-white transition hover:brightness-110"
            >
              + New Ticket
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default BoardNavbar;
