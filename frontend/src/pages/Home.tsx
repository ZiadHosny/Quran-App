import { useEffect } from "react";
import { QuranReciter } from "../components/QuranReciter";
import { useProgress } from "../hooks/useProgress";
import { useSurah } from "../hooks/useSurah";
import { useTranslation } from "../hooks/useTranslation";

export const Home = () => {
  const { getAllQuranReciters } = useProgress();
  const { quranRecitersFilter } = useSurah();
  const { t, lang } = useTranslation();

  useEffect(() => {
    if (
      typeof Notification !== "undefined" &&
      Notification.permission !== "granted"
    ) {
      Notification.requestPermission()
        .then(function (permission) {
          console.log("permission : ", permission);
        })
        .catch((error) => {
          console.error("Permission request failed: ", error);
        });
    }
    const fn = async () => {
      await getAllQuranReciters();
    };
    fn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="home-grid" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <QuranReciter
        key={"mostPlayed"}
        bgColor={"#ffd52d"}
        imgSize={100}
        quranReciter={{
          id: "mostPlayed",
          quranReciter: t('mostPlayed'),
          photo:
            "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
      />
      {quranRecitersFilter.map((quranReciter) => (
        <QuranReciter key={quranReciter.id} quranReciter={quranReciter} />
      ))}
    </div>
  );
};
