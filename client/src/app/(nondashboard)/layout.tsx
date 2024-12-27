import NonDashboardNavbar from "@/components/NonDashboardNavbar";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="nondashboard-layout">
      <NonDashboardNavbar /> {/* Header component for non-dashboard pages */}
      <main className="nondashboard-layout__main">{children}</main>
      <Footer />
    </div>
  );
}
