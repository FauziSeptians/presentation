import { HtmlHTMLAttributes } from 'react';
import { AuroraText } from '../ui/aurora-text';

export default function FooterTemplates(
  props?: HtmlHTMLAttributes<HTMLDivElement>
) {
  return (
    <footer
      className="w-full border-t border-neutral-800 bg-black px-6 py-10 text-white"
      {...props}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            Fauziseptians
          </h2>
          <p className="text-sm text-neutral-400">
            <AuroraText>Software Developer</AuroraText>
          </p>
        </div>
        <div className="text-sm text-neutral-500">
          © {new Date().getFullYear()} Fauziseptians. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
