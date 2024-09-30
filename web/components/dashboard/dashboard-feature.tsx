'use client';

import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  return (
    <div>
      <AppHero title="gm" subtitle="Welcome to DX Journal dApp." />
      <div className="max-w-xl mx-auto sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <p>DX Journal is your go to Developer friendly journal dApp. Here you can create, update and delete journals.</p>
        </div>
      </div>
    </div>
  );
}
