import React from 'react';
import { Run, getDefaultRun } from '../../lib/run';

type AppHeaderProps = {
  hasSeed?: boolean;
  setRun: (run: Run) => void;
};

export function AppHeader({ hasSeed, setRun }: AppHeaderProps) {
  const onQuit = () => setRun(getDefaultRun());
  return (
    <div className="header">
      <div className="caption">BotW All Shrines Randomizer</div>
      {hasSeed && (
        <button id="quit" className="btn-text btn-back" onClick={onQuit}>
          Quit run
        </button>
      )}
    </div>
  );
}