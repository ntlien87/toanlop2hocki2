// import De3 from "@/components/De3";
import dynamic from "next/dynamic";

const De3 = dynamic(() => import("@/components/De3"), { ssr: false });

const de3Page = () => {
  return (
    <div>
      <De3 />
    </div>
  );
};
export default de3Page;
