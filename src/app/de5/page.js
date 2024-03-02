// import De5 from "@/components/De5";
import dynamic from "next/dynamic";

const De5 = dynamic(() => import("@/components/De5"), { ssr: false });

const de5Page = () => {
  return (
    <div>
      <De5 />
    </div>
  );
};
export default de5Page;
