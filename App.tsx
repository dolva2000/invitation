
import React, { useState } from 'react';
import { Envelope } from './components/Envelope';
import { InvitationContent } from './components/InvitationContent';

const App: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="relative overflow-x-hidden min-h-screen">
      {!showContent ? (
        <Envelope onOpenComplete={() => setShowContent(true)} />
      ) : (
        <InvitationContent />
      )}
    </div>
  );
};

export default App;
