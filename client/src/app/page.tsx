import NonDashboardNavbar from "@/components/NonDashboardNavbar";
import Landing from "@/app/(nondashboard)/landing/page";
import Footer from "@/components/Footer";

/* Home component for the non-dashboard layout */
export default function Home() {
  return (
    <div className="nondashboard-layout">
      {/* Renders the Navbar */}
      <NonDashboardNavbar />
      <main className="nondashboard-layout__main">
        <Landing />
      </main>
      <Footer />
    </div>
  );
}
