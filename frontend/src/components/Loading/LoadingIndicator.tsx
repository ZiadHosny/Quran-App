import { Audio } from "react-loader-spinner";
import { useAppSelector } from "../../store/hooks";

export const LoadingIndicator = () => {
  const isLoading = useAppSelector((state) => state.loading.loading.length > 0);

  return isLoading ? (
    <div
      style={{
        background: "linear-gradient(to top right, #fffbea, #fef08a, #fef9c3)",
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        opacity: 0.4,
      }}
    >
      <Audio height="100" width="100" color="#ffd52d" ariaLabel="loading" />
    </div>
  ) : null;
};
