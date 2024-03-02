// import De2 from "@/components/De2";
import dynamic from "next/dynamic";

const De2 = dynamic(() => import("@/components/De2"), { ssr: false });

const de2Page = () => {
  return (
    <div>
      <De2 />
    </div>
  );
};
export default de2Page;
