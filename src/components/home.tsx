import React, { useState } from "react";
import ProposalBox from "./ProposalBox";
import SuccessPage from "./SuccessPage";

const Home = () => {
  const [hasAccepted, setHasAccepted] = useState(false);

  if (hasAccepted) {
    return <SuccessPage />;
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-pink-50 to-white flex items-center justify-center p-4">
      <ProposalBox onAccept={() => setHasAccepted(true)} />
    </div>
  );
};

export default Home;
