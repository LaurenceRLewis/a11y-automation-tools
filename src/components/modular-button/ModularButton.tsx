import React, { useEffect, useState } from "react";
import "./ModularButton.css";

export type ButtonTypes = Partial<Record<"button" | "submit" | "reset", boolean>>;

interface ModularButtonProps {
  buttonTypes?: ButtonTypes;
  label?: string;
}

const ModularButton: React.FC<ModularButtonProps> = ({
  buttonTypes = { button: true },
  label = "My Button",
}) => {
  const [resolvedType, setResolvedType] = useState<"button" | "submit" | "reset">("button");

  useEffect(() => {
    const entries = Object.entries(buttonTypes) as [string, boolean][];
    for (const [key, value] of entries) {
      if (value) {
        setResolvedType(key as "button" | "submit" | "reset");
        break;
      }
    }
  }, [buttonTypes]);

  return <button type={resolvedType}>{label}</button>;
};

export default ModularButton;
