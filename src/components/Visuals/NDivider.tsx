import React from 'react';
import NightMediaIcon from '../Logo/NightMediaIcon';

interface NDividerProps {
  label?: string;
  className?: string;
}

/**
 * Signature section divider — a hairline rule interrupted by the
 * metallic "N" mark. Used between major page sections to reinforce
 * brand recognition without visual noise.
 */
const NDivider: React.FC<NDividerProps> = ({ label, className = '' }) => {
  return (
    <div className={`w-full flex items-center justify-center gap-6 py-14 ${className}`}>
      <span className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-border" />
      <div className="flex items-center gap-3">
        <NightMediaIcon variant="metallic" size={22} />
        {label && (
          <span className="text-[10px] font-mono uppercase tracking-[0.32em] text-muted-foreground">
            {label}
          </span>
        )}
      </div>
      <span className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-border" />
    </div>
  );
};

export default NDivider;
