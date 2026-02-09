import prisma from "@/lib/db-client";

export default async function Home() {
  const users = await prisma.user.findMany();

  return <div className="p-4">{JSON.stringify(users)}</div>;
}
