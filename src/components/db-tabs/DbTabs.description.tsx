import React from 'react';

export function TabsDescription() {
  return (
    <div className="docs--wrapper">
      <h1>Accessible Tabs Testing</h1>
      <p>
        This component demonstrates a fully accessible tab interface with options to deliberately misconfigure roles,
        states, or associations for automated accessibility tool validation.
      </p>

      <h2>Component Structure</h2>
      <ul>
        <li>
          <strong>Tablist</strong>: Renders a container with a configurable <code>role</code> (default:
          <code>tablist</code>).
        </li>
        <li>
          <strong>Tabs</strong>: Each tab button can have its <code>role</code> and <code>aria-selected</code> (or
          alternate) attribute applied or removed.
        </li>
        <li>
          <strong>Panels</strong>: Each panel is associated via <code>aria-controls</code> and has a configurable{' '}
          <code>role</code> such as <code>tabpanel</code>, <code>region</code>, or none.
        </li>
      </ul>

      <h2>Test Options</h2>
      <p>
        Use Storybook controls to toggle between valid and invalid ARIA configurations. These help assess how well tools
        and assistive tech handle:
      </p>
      <ul>
        <li>Missing roles (e.g. no <code>role="tab"</code>)</li>
        <li>Missing <code>aria-controls</code> relationships</li>
        <li>Incorrect <code>aria-selected</code> or alternate attribute types</li>
        <li>Tab activation modes (manual vs focus-driven)</li>
        <li>Panels with <code>role=region</code> or no role at all</li>
      </ul>

      <h2>Slot Usage</h2>
      <p>
        The tabs component is modular, using standard <code>props</code> to inject tab titles and panel content. Unlike
        Lit's <code>&lt;slot&gt;</code> system, this React version expects all content passed via structured tab arrays.
      </p>

      <h2>Developer Note</h2>
      <p>
        When testing automation tools, remember that accessibility violations may only be detectable if rendered DOM is
        valid and visible. This setup ensures the DOM output is consistent even when attributes are missing or invalid.
      </p>
    </div>
  );
}
