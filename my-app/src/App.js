import React, { useState, useRef, useEffect } from "react";
import OptionTree from "./components/OptionTree";
import optionsData from "./data/options";
import "./App.css";
import pieLogo from "./assets/pielogo.png";

const App = () => {
  // initial wizard content
  const initialNode = {
    title: "What do you need to do?",
    children: optionsData,
  };

  // Wizard state
  const [activeTab, setActiveTab] = useState("wizard");
  const [history, setHistory] = useState([]);
  const [currentNode, setCurrentNode] = useState(initialNode);
  const [selectedTest, setSelectedTest] = useState(null);

  // Wizard dragging state
  const [wizardDragging, setWizardDragging] = useState(false);
  const [wizardPos, setWizardPos] = useState({ x: 0, y: 0 });
  const wizardOffset = useRef({ x: 0, y: 0 });

  // Popup dragging state
  const [popupDragging, setPopupDragging] = useState(false);
  const [popupPos, setPopupPos] = useState({ x: 175, y: 150 });
  const popupOffset = useRef({ x: 0, y: 0 });

  // Global mouse events for both drags
  useEffect(() => {
    const onMouseMove = (e) => {
      if (wizardDragging) {
        setWizardPos({
          x: e.clientX - wizardOffset.current.x,
          y: e.clientY - wizardOffset.current.y,
        });
      }
      if (popupDragging) {
        setPopupPos({
          x: e.clientX - popupOffset.current.x,
          y: e.clientY - popupOffset.current.y,
        });
      }
    };
    const onMouseUp = () => {
      setWizardDragging(false);
      setPopupDragging(false);
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [wizardDragging, popupDragging]);

  // Handlers to start drags
  const startWizardDrag = (e) => {
    // only if clicked on header background, not the tabs
    if (e.target.classList.contains("wizard-header")) {
      setWizardDragging(true);
      wizardOffset.current = {
        x: e.clientX - wizardPos.x,
        y: e.clientY - wizardPos.y,
      };
    }
  };
  const startPopupDrag = (e) => {
    if (e.target.closest(".tm-header")) {
      setPopupDragging(true);
      popupOffset.current = {
        x: e.clientX - popupPos.x,
        y: e.clientY - popupPos.y,
      };
    }
  };

  // Navigation and selection logic (unchanged)
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
    // split arrow-cases
    if ((!node.children || node.children.length === 0) && node.title.includes("→")) {
      const [parent, child] = node.title.split("→").map((s) => s.trim());
      setHistory((h) => [...h, currentNode]);
      setCurrentNode({
        title: parent,
        children: [{ ...node, title: child, children: [] }],
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
    setCurrentNode({ title: same ? "" : next.title, children: next.children });
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
    setHistory([]);
    setCurrentNode(initialNode);
    setSelectedTest(null);
  };

  return (
    <div className="wizard-container">
      <div
        className="wizard-box"
        style={{
          transform: `translate(${wizardPos.x}px, ${wizardPos.y}px)`,
          position: "absolute", // This ensures it moves freely
        }}
        onMouseDown={startWizardDrag}
      >
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
                  /* Draggable Popup */
                  <div
                    className="tm-overlay"
                    onMouseDown={startPopupDrag}
                  >
                    <div
                      className="tm-dialog"
                      style={{
                        position: "absolute",
                        left: popupPos.x,
                        top: popupPos.y,
                      }}
                    >
                      <div className="tm-header">Ready to run the test?</div>
                      <div className="tm-body">{selectedTest.title}</div>
                      <div className="tm-footer">
                        <button className="tm-btn tm-run" onClick={runTest}>
                          Run Test
                        </button>
                        <button className="tm-btn tm-cancel" onClick={cancelTest}>
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
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
              <div className="footer-placeholder" />
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
