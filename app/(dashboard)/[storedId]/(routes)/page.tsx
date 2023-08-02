import prismadb from "@/lib/prismadb";

interface DashboardPageProps {
  params: { storedId: string };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storedId,
    },
  });
  return <div>Active Store: {store?.name}</div>;
};
export default DashboardPage;
