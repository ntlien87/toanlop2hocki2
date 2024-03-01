import ParentText from "@/components/ParentText";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl mb-12">
        Chọn 1 trong các đề bên dưới để bắt đầu làm bài.{" "}
      </h1>
      <div className="w-full grid sm:grid-cols-2 px-8  gap-4">
        <Link
          href={"/de1"}
          className="w-full py-3 border-2 border-teal-500 text-center font-bold text-xl hover:bg-white rounded-full transition-colors"
        >
          Đề 1
        </Link>
        <Link
          href={"/de2"}
          className="w-full py-3 border-2 border-teal-500 text-center font-bold text-xl hover:bg-white rounded-full transition-colors"
        >
          Đề 2
        </Link>
        <Link
          href={"/de3"}
          className="w-full py-3 border-2 border-teal-500 text-center font-bold text-xl hover:bg-white rounded-full transition-colors"
        >
          Đề 3
        </Link>
        <Link
          href={"/de4"}
          className="w-full py-3 border-2 border-teal-500 text-center font-bold text-xl hover:bg-white rounded-full transition-colors"
        >
          Đề 4
        </Link>
        <Link
          href={"/de5"}
          className="w-full py-3 border-2 border-teal-500 text-center font-bold text-xl hover:bg-white rounded-full transition-colors"
        >
          Đề 5
        </Link>
        <Link
          href={"/de6"}
          className="w-full py-3 border-2 border-teal-500 text-center font-bold text-xl hover:bg-white rounded-full transition-colors"
        >
          Đề 6
        </Link>
      </div>
    </div>
  );
}
