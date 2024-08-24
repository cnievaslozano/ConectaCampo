import React, { ReactNode } from "react";
import { ContainerProps } from "../../types/props";

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
