import React from "react";
import "./DbLists.css";

type ListType = "ul" | "ol";
type Scenario =
  | "Default"
  | "Div with no role"
  | "Missing opening tag"
  | "Missing closing tag"
  | "Slot list items";

interface DbListsProps {
  listType?: ListType;
  scenario?: Scenario;
  children?: React.ReactNode;
}

const carBrands = ["Toyota", "Ford", "BMW", "Hyundai", "Mazda"];

const DbLists: React.FC<DbListsProps> = ({
  listType = "ul",
  scenario = "Default",
  children,
}) => {
  const renderItems = () => {
    if (scenario === "Slot list items") return children;
    return carBrands.map((item) => <li key={item}>{item}</li>);
  };

  switch (scenario) {
    case "Div with no role":
      return <div className="list-container">{renderItems()}</div>;

    case "Missing opening tag": {
      const html = carBrands
        .map((brand) => `<li>${brand}</li>`)
        .join("");
      const closing = listType === "ul" ? "</ul>" : "</ol>";
      return (
        <div
          className="list-container"
          dangerouslySetInnerHTML={{ __html: html + closing }}
        />
      );
    }

    case "Missing closing tag": {
      const html = carBrands
        .map((brand) => `<li>${brand}</li>`)
        .join("");
      const opening = listType === "ul" ? "<ul>" : "<ol>";
      return (
        <div
          className="list-container"
          dangerouslySetInnerHTML={{ __html: opening + html }}
        />
      );
    }

    case "Slot list items":
      return listType === "ul" ? (
        <ul>{children}</ul>
      ) : (
        <ol>{children}</ol>
      );

    case "Default":
    default:
      return listType === "ul" ? (
        <ul>{renderItems()}</ul>
      ) : (
        <ol>{renderItems()}</ol>
      );
  }
};

export default DbLists;
