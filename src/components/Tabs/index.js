import React from "react";
import Tabs from "./Component";

function Index() {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <div className="flex flex-col gap-5 items-start">
      <div className="p-5 border border-gray-300 w-full flex flex-col gap-5">
        <span>Outlined tabs</span>
        <Tabs
          tabNames={["Tab 1", "Tab 2", "Tab 3"]}
          tabContents={[<>Tab1</>, <>Tab2</>, <>Tab3</>]}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          variant="outlined"
        />
      </div>

      <div className="p-5 border border-gray-300 w-full flex flex-col gap-5">
        <span>Underlined tabs</span>
        <Tabs
          tabNames={["Tab 1", "Tab 2", "Tab 3"]}
          tabContents={[<>Tab1</>, <>Tab2</>, <>Tab3</>]}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          variant="underlined"
        />
      </div>

      <div className="p-5 border border-gray-300 w-full flex flex-col gap-5">
        <span>Vertial Outlined Tabs</span>
        <Tabs
          tabNames={["Tab 1", "Tab 2", "Tab 3"]}
          tabContents={[<>Tab1</>, <>Tab2</>, <>Tab3</>]}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          variant="outlined"
          orientation="vertical"
        />
      </div>

      <div className="p-5 border border-gray-300 w-full flex flex-col gap-5">
        <span>Vertial Underlined Tabs</span>
        <Tabs
          tabNames={["Tab 1", "Tab 2", "Tab 3"]}
          tabContents={[<>Tab1</>, <>Tab2</>, <>Tab3</>]}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          variant="underlined"
          orientation="vertical"
        />
      </div>

      <div className="p-5 border border-gray-300 w-full flex flex-col gap-5">
        <span>Disabled tabs</span>
        <Tabs
          tabNames={["Tab 1", "Tab 2", "Tab 3"]}
          tabContents={[<>Tab1</>, <>Tab2</>, <>Tab3</>]}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          variant="underlined"
          disabledTabs={[1]}
        />
      </div>
    </div>
  );
}

export default Index;
