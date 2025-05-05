import React from "react";
import "../index.css";

interface GlassCardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  style,
  className,
}) => {
  return (
    <div className={`glass-card ${className || ""}`} style={style}>
      {children}
    </div>
  );
};

export default GlassCard;
