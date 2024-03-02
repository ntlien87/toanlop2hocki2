// import De6 from "@/components/De6";
import dynamic from "next/dynamic";

const De6 = dynamic(() => import("@/components/De6"), { ssr: false });

const de6Page = () => {
  return (
    <div>
      <De6 />
    </div>
  );
};
export default de6Page;
