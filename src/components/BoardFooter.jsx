import React from "react";
import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { footerLinks } from "../config/navigation";
import { socialIconStyles } from "../config/styles";

const socialIcons = {
  linkedin: FaLinkedinIn,
  x: FaXTwitter,
  facebook: FaFacebookF,
  email: FaEnvelope,
};

function BoardFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 bg-black text-slate-300">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div>
          <p className="font-display text-2xl font-bold text-white">CS - Ticket System</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            CS - Ticket System helps support teams organize, prioritize, and resolve customer issues in
            one workflow. Keep every ticket visible from first response to final resolution.
          </p>
        </div>

        <div>
          <p className="text-lg font-medium text-white">Company</p>
          <div className="mt-3 space-y-2 text-sm text-slate-400">
            {footerLinks.company.map((item) => (
              <a key={item.label} href={item.href} className="block transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-lg font-medium text-white">Services</p>
          <div className="mt-3 space-y-2 text-sm text-slate-400">
            {footerLinks.services.map((item) => (
              <a key={item.label} href={item.href} className="block transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-lg font-medium text-white">Information</p>
          <div className="mt-3 space-y-2 text-sm text-slate-400">
            {footerLinks.information.map((item) => (
              <a key={item.label} href={item.href} className="block transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-lg font-medium text-white">Social Links</p>
          <div className="mt-3 space-y-2 text-sm text-slate-400">
            {footerLinks.social.map((item) => {
              const Icon = socialIcons[item.icon] ?? FaEnvelope;
              const iconStyle = socialIconStyles[item.icon] ?? socialIconStyles.email;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={item.label}
                  className="group flex items-center gap-2 rounded-sm px-1 py-1 transition hover:bg-white/5 hover:text-white"
                >
                  <span
                    className={`inline-grid h-6 w-6 place-items-center rounded-full ring-1 transition group-hover:scale-105 ${iconStyle}`}
                  >
                    <Icon aria-hidden="true" className="h-3.5 w-3.5" />
                  </span>
                  <span className="leading-none">{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto h-px w-full max-w-7xl bg-slate-800" />
      <div className="mx-auto w-full max-w-7xl px-4 py-4 text-center text-xs text-slate-500 sm:px-6 lg:px-8">
        Copyright © {year} CS - Ticket System. All rights reserved.
      </div>
    </footer>
  );
}

export default BoardFooter;
