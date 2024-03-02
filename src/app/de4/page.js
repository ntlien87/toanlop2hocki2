// import De4 from "@/components/De4";
import dynamic from "next/dynamic";

const De4 = dynamic(() => import("@/components/De4"), { ssr: false });

const de4Page = () => {
  return (
    <div>
      <De4 />
    </div>
  );
};
export default de4Page;
