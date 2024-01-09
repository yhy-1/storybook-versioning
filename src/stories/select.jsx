import React from "react";
import { Dropdown, Button } from "antd";

/**
 * Primary UI component for user interaction
 */
export const SelectVersion = () => {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://v23-x--657a22d9f0d80affc749676c.chromatic.com"
        >
          v23.x
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://v22-x--657a22d9f0d80affc749676c.chromatic.com"
        >
          v22.x
        </a>
      ),
    },
  ];
  return (
    <label>
      View older design system versions:{" "}
      <Dropdown menu={{ items }}>
        <Button>Version</Button>
      </Dropdown>
    </label>
  );
};
