import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-bold text-primary-600">404</h1>
          <p className="mb-4 text-2xl text-neutral-900">Página não encontrada</p>
          <p className="mx-auto mb-8 max-w-md text-neutral-600">
            Desculpe, a página que você está procurando não existe ou foi removida.
          </p>
          <Link
            href="/"
            className="inline-block rounded-lg bg-primary-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-700"
          >
            Voltar à página inicial
          </Link>
        </div>
      </div>
    </div>
  );
}

