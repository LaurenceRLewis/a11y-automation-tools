import React, { useEffect, useState } from "react";
import "./DbTabs.css";

export interface TabItem {
  id: string;
  label: string;
  content: string;
  removeTabRole?: boolean;
  removeAriaControls?: boolean;
}

export interface DbTabsProps {
  tablistRole?: string;
  tabPanelRole?: string;
  triggerActivation?: "automated" | "manual";
  tabs: TabItem[];
}

const DbTabs: React.FC<DbTabsProps> = ({
  tablistRole = "tablist",
  tabPanelRole = "tabpanel",
  triggerActivation = "automated",
  tabs,
}) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]?.id ?? "");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 400);
    };
    handleResize(); // initialize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (isMobile) {
      if (["Enter", " "].includes(event.key)) {
        event.preventDefault();
        setSelectedTab(tabs[index].id);
      }
      return;
    }

    let newIndex = index;
    if (event.key === "ArrowRight") {
      newIndex = (index + 1) % tabs.length;
    } else if (event.key === "ArrowLeft") {
      newIndex = (index - 1 + tabs.length) % tabs.length;
    } else if (event.key === "Home") {
      newIndex = 0;
    } else if (event.key === "End") {
      newIndex = tabs.length - 1;
    } else if (
      triggerActivation === "manual" &&
      ["Enter", " "].includes(event.key)
    ) {
      event.preventDefault();
      setSelectedTab(tabs[index].id);
    }

    if (newIndex !== index) {
      const newId = tabs[newIndex].id;
      if (triggerActivation === "automated") {
        setSelectedTab(newId);
      }
      const newTab = document.getElementById(newId) as HTMLButtonElement;
      newTab?.focus();
    }
  };

  const getAriaAttributes = (
    selected: boolean
  ): Partial<Record<string, string>> => {
    switch (true) {
      case triggerActivation === "manual":
        return { "aria-selected": String(selected) };
      case triggerActivation === "automated":
        return { "aria-selected": String(selected) };
      default:
        return {};
    }
  };

  return (
    <div className="tabContainer">
      {isMobile ? (
        tabs.map((tab) => (
          <div key={tab.id}>
            <button
              id={tab.id}
              className="accordionButton"
              aria-controls={`tabpanel-${tab.id}`}
              aria-expanded={selectedTab === tab.id}
              onClick={() => setSelectedTab(tab.id)}
              onKeyDown={(e) =>
                handleKeyDown(e, tabs.findIndex((t) => t.id === tab.id))
              }
            >
              {tab.label}
            </button>
            <div
              id={`tabpanel-${tab.id}`}
              className="accordionTabPanel"
              aria-labelledby={tab.id}
              role={tabPanelRole || undefined}
              hidden={selectedTab !== tab.id}
            >
              <div dangerouslySetInnerHTML={{ __html: tab.content }} />
            </div>
          </div>
        ))
      ) : (
        <>
          <div
            className="tabList"
            role={tablistRole || undefined}
            aria-label="Tabs component for accessibility testing"
          >
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                id={tab.id}
                className="tab"
                role={tab.removeTabRole ? undefined : "tab"}
                aria-controls={
                  tab.removeAriaControls ? undefined : `tabpanel-${tab.id}`
                }
                tabIndex={selectedTab === tab.id ? 0 : -1}
                aria-selected={selectedTab === tab.id}
                {...getAriaAttributes(selectedTab === tab.id)}
                onClick={() => setSelectedTab(tab.id)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              id={`tabpanel-${tab.id}`}
              className="tabPanel"
              aria-labelledby={tab.id}
              role={tabPanelRole || undefined}
              hidden={selectedTab !== tab.id}
            >
              <div dangerouslySetInnerHTML={{ __html: tab.content }} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default DbTabs;
