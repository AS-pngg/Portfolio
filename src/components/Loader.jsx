import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center text-white">

        {/* Planet Spinner */}
        <div className="w-20 h-20 rounded-full overflow-hidden animate-spinSlow">
          <img
            src="/1.jpg"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Progress Text */}
        <p className="mt-6 text-lg tracking-widest">
          Loading Universe...
        </p>

        <p className="text-white/70 text-sm mt-2">
          {progress.toFixed(0)}%
        </p>

      </div>
    </Html>
  );
}