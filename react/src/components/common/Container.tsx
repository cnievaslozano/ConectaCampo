import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const ProfileContainer: React.FC<ContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`mx-auto max-w-[1500px] p-11 bg-gray-50 rounded-lg shadow-lg overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export default ProfileContainer;
