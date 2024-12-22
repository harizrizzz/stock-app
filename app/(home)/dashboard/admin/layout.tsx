import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <main className="w-full overflow-y-auto ">{children}</main>
    </main>
  );
}
