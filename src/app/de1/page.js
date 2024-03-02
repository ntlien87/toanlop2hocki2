// import De1 from "@/components/De1";
import dynamic from "next/dynamic";

const De1 = dynamic(() => import("@/components/De1"), { ssr: false });

const de1Page = () => {
  return (
    <div>
      <De1 />
    </div>
  );
};
export default de1Page;
