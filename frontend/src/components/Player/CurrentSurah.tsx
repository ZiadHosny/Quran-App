import { toast } from 'react-toastify';
import { IoShareSocialOutline } from 'react-icons/io5';
import { SurahType } from '../../utils/types';
import { SurahInfo } from './SurahInfo';
import { useTranslation } from '../../hooks/useTranslation';


type Props = {
    imgRef: React.RefObject<HTMLInputElement>
    surah: SurahType
}

export const CurrentSurah = ({ imgRef, surah }: Props) => {
    const { t, lang } = useTranslation();
    const reciterName = lang === 'en' && surah.quranReciterEn
        ? surah.quranReciterEn
        : surah.quranReciter;
    const surahTitle = lang === 'en' && surah.titleEn ? surah.titleEn : surah.title;

    const handleShare = async () => {
        const text = lang === 'en'
            ? `Listen to ${surahTitle} recited by ${reciterName}`
            : `استمع إلى ${surah.title} بصوت ${surah.quranReciter}`;
        const url = window.location.href;

        if (navigator.share) {
            try {
                await navigator.share({ title: surahTitle, text, url });
            } catch (_) {}
        } else {
            await navigator.clipboard.writeText(`${text}\n${url}`);
            toast.success(t('linkCopied'), { autoClose: 2000 });
        }
    };

    return (
        <>
            <header>
                <h2 className={lang === 'en' ? '' : 'arabic-font'}>{surahTitle}</h2>
            </header>
            <div className="cd" ref={imgRef}>
                <div className="cd-thumb" style={{ backgroundImage: `url(${surah.photo})` }}>
                </div>
            </div>
            <h3 className='arabic-font' style={{ textAlign: 'center', fontWeight: 600 }}>{reciterName}</h3>
            <SurahInfo surah={surah} />
            <button className="share-btn" onClick={handleShare} title={t('share')}>
                <IoShareSocialOutline />
                <span>{t('share')}</span>
            </button>
        </>
    )
}
