import React from "react";

interface FooterProps {
  data: any;
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  return (
    <footer id="contact" className="py-24 px-6 glass border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="space-y-4 text-center md:text-left">
          <div className="text-3xl font-bold tracking-tighter text-gradient">
            Wei Fan Wang
          </div>
          <p className="text-gray-400 max-w-sm">
            {data.role}. Building software with purpose and precision. Open for
            collaborations and internship opportunities.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-6">
            {data.github && (
              <a
                href={data.github}
                className="text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
            )}
            {data.linkedin && (
              <a
                href={data.linkedin}
                className="text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            )}
            {data.email && (
              <a
                href={`mailto:${data.email}`}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Email
              </a>
            )}
          </div>
          <div className="text-xs text-gray-500">
            © {new Date().getFullYear()} {data.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
