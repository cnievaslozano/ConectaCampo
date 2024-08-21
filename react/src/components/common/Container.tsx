import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className: string;
}

const ProfileContainer: React.FC<ContainerProps> = ({
  children,
  className,
}) => {
  const containerStyle: React.CSSProperties = {
    margin: "0 auto",
    padding: "45px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  };

  return (
    <div className={className} style={containerStyle}>
      {children}
    </div>
  );
};

export default ProfileContainer;
