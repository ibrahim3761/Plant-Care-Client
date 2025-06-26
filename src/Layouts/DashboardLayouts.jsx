import React from 'react';
import { Outlet } from 'react-router';
import DashAside from '../Componenets/DashAside';
import Footer from '../Componenets/Footer';

const DashboardLayouts = () => {
  return (
    <div className="bg-gradient-to-r from-green-50 to-green-100 min-h-screen flex flex-col">
      <main className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-6 flex-grow">
        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="bg-green-200 rounded-xl lg:sticky lg:top-24 max-h-[90vh] overflow-y-auto p-4 shadow-md">
            <DashAside />
          </div>
        </aside>

        {/* Main Content */}
        <section className="lg:col-span-3">
          <div className="bg-white rounded-xl p-4 mt-3 shadow-md">
            <Outlet />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default DashboardLayouts;
