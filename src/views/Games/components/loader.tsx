import { Skeleton } from "../../../../packages/uikit/src/components/Skeleton";

const LoaderDisplay = () => {
  return (
    <div className="col-12 col-xl-4 col-md-6">
      {/* @ts-ignore */}
      <Skeleton className="mb-2" width={"60%"} />
      {/* @ts-ignore */}
      <Skeleton className="mb-2" width={"100%"} />
      {/* @ts-ignore */}
      <Skeleton className="mb-2" width={"50%"} />
      {/* @ts-ignore */}
      <Skeleton className="mb-2" width={"80%"} height={100} />
      {/* @ts-ignore */}
      <Skeleton className="mb-2" width={"80%"} />
    </div>
  );
};

export default LoaderDisplay;
