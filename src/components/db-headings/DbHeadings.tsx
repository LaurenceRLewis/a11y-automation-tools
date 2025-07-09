import React from "react";
import "./DbHeadings.css";

export type HeadingScenario =
  | "valid"
  | "missingH1"
  | "skippedLevels"
  | "multipleH1"
  | "notSemantic";

interface DbHeadingsProps {
  scenario?: HeadingScenario;
}

const DbHeadings: React.FC<DbHeadingsProps> = ({ scenario = "valid" }) => {
  const renderScenario = () => {
    switch (scenario) {
      case "missingH1":
        return (
          <section>
            <h2>Page Title</h2>
            <p>
              No <code>&lt;h1&gt;</code> is used — violates structural
              expectations.
            </p>
          </section>
        );
      case "skippedLevels":
        return (
          <section>
            <h1>Main Title</h1>
            <h3>Subsection (Skipped h2)</h3>
            <h5>Details (Skipped h4)</h5>
          </section>
        );
      case "multipleH1":
        return (
          <section>
            <h1>Page Title</h1>
            <h1>Another Top-Level Heading</h1>
          </section>
        );
      case "notSemantic":
        return (
          <section>
            <div className="fake-h1" role="heading" aria-level={1}>
              Styled as H1
            </div>
            <div className="fake-h2" role="heading" aria-level={2}>
              Styled as H2
            </div>
          </section>
        );
      default:
        return (
          <section>
            <h1>Main Title</h1>
            <h2>Section</h2>
            <h3>Subsection</h3>
            <h4>Details</h4>
            <h5>More Info</h5>
            <h6>Fine Print</h6>
          </section>
        );
    }
  };

  return <div className="db-headings">{renderScenario()}</div>;
};

export default DbHeadings;
