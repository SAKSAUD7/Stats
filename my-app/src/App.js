import React, { useState } from "react";
import OptionTree from "./components/OptionTree";
import optionsData from "./data/options";
import "./App.css";
import pieLogo from "./assets/pielogo.png";

const App = () => {
  const initialNode = {
    title: "What do you need to do?",
    children: optionsData,
  };

  const [activeTab, setActiveTab] = useState("wizard");
  const [history, setHistory] = useState([]);
  const [currentNode, setCurrentNode] = useState(initialNode);
  const [selectedTest, setSelectedTest] = useState(null);

  const handleBack = () => {
    if (selectedTest) {
      setSelectedTest(null);
    } else if (history.length > 0) {
      const prev = history[history.length - 1];
      setHistory((h) => h.slice(0, -1));
      setCurrentNode(prev);
    }
  };

  const handleSelect = (node) => {
    if ((!node.children || node.children.length === 0) && node.title.includes("→")) {
      const [parent, child] = node.title.split("→").map((s) => s.trim());
      setHistory((h) => [...h, currentNode]);
      setCurrentNode({
        title: parent,
        children: [{ id: node.id + "-split", title: child, children: [] }],
      });
      setSelectedTest(null);
      return;
    }

    setHistory((h) => [...h, currentNode]);
    let next = node;
    while (next.children && next.children.length === 1) {
      next = next.children[0];
    }

    if (!next.children || next.children.length === 0) {
      setSelectedTest(next);
      return;
    }

    const same = next.title === currentNode.title;
    setCurrentNode({
      title: same ? "" : next.title,
      children: next.children,
    });
    setSelectedTest(null);
  };

  const runTest = () => {
    alert(`Running test: ${selectedTest.title}`);
    setSelectedTest(null);
  };

  const cancelTest = () => {
    setSelectedTest(null);
  };

  const switchToWizard = () => {
    setActiveTab("wizard");
    setSelectedTest(null);
    setHistory([]);
    setCurrentNode(initialNode); // 💡 Reset to first question
  };

  return (
    <div className="wizard-container">
      <div className="wizard-box">
        {/* Header */}
        <div className="wizard-header">
          <div className="tabs-group">
            <span
              className={activeTab === "wizard" ? "tab active-tab" : "tab"}
              onClick={switchToWizard}
            >
              Advisor Wizard ▾
            </span>
            <span
              className={activeTab === "stat" ? "tab active-tab" : "tab"}
              onClick={() => setActiveTab("stat")}
            >
              Stat Master AI
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="wizard-content">
          <div className="wizard-left">
            <img src={pieLogo} alt="wizard icon" className="wizard-logo" />
          </div>
          <div className="wizard-right">
            {activeTab === "wizard" ? (
              <>
                {!selectedTest ? (
                  <>
                    {currentNode.title && <h2>{currentNode.title}</h2>}
                    <OptionTree node={currentNode} onSelect={handleSelect} />
                  </>
                ) : (
                  <h2>{selectedTest.title}</h2>
                )}
              </>
            ) : (
              <div>
                <h2>Stat Master AI</h2>
                <p style={{ opacity: 0.6 }}>Coming soon...</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="wizard-footer">
          {activeTab === "wizard" ? (
            !selectedTest ? (
              <>
                <button className="footer-btn">Help</button>
                <button
                  className="footer-btn"
                  onClick={handleBack}
                  disabled={history.length === 0}
                >
                  &lt; Back
                </button>
                <button className="footer-btn" disabled>
                  Next &gt;
                </button>
                <button className="footer-btn cancel-btn">Cancel</button>
              </>
            ) : (
              <>
                <button className="footer-btn" onClick={runTest}>
                  Run Test
                </button>
                <button className="footer-btn cancel-btn" onClick={cancelTest}>
                  Cancel
                </button>
                <button className="footer-btn" onClick={handleBack}>
                  &lt; Back
                </button>
              </>
            )
          ) : (
            <div className="footer-placeholder" />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
