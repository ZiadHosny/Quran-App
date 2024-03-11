import { QuranReciterInWebsite } from "../../utils/types.js"
import { generateSuwarForReciter } from "../generateList.js"

export const mp3Quran: QuranReciterInWebsite[] = [
    {
        id: 'akdr',
        quranReciter: 'ابراهيم الأخضر',
        photo: 'https://ar.islamway.net/uploads/authors/0924.jpg',
        server: 6
    }, {
        id: 'qtm',
        quranReciter: 'ناصر القطامي',
        photo: 'https://ar.islamway.net/uploads/authors/naser-al-qetami.jpg',
        server: 6
    }, {
        id: 'IdrisAbkar',
        quranReciter: 'إدريس أبكر',
        photo: 'https://i.pinimg.com/564x/42/28/3e/42283eed3aa7b9639cf28caf8c1365d6.jpg',
        quranReciterInWebsite: 'abkr',
        server: 6
    }, {
        id: 'SaadElGhamidi',
        quranReciter: 'سعد الغامدي',
        photo: 'https://ar.islamway.net/uploads/authors/saad-bin-said-alghamdy.jpg',
        quranReciterInWebsite: 's_gmd',
        server: 7,
    }, {
        id: 'soodElshreem',
        quranReciter: 'سعود الشريم',
        photo: 'https://i.pinimg.com/564x/41/75/00/4175004b89851b4d92d9ba543deba383.jpg',
        quranReciterInWebsite: 'shur',
        server: 7
    }, {
        id: 'alafasy',
        quranReciter: 'مشاري بن راشد العفاسي',
        photo: 'https://i.pinimg.com/564x/93/08/8b/93088be16e324b36b2d98a12748366a6.jpg',
        quranReciterInWebsite: 'afs',
        server: 8
    }, {
        id: 'mahmoudalielbana',
        quranReciter: 'محمود علي البنا',
        photo: 'https://i.pinimg.com/564x/29/67/b3/2967b3fbc1ce1f5a70874288d34317bf.jpg',
        quranReciterInWebsite: 'bna',
        server: 8
    }, {
        id: 'faresAbaad',
        quranReciter: 'فارس عباد',
        photo: 'https://ar.islamway.net/uploads/authors/faris-abbad.jpg',
        quranReciterInWebsite: 'frs_a',
        server: 8
    }, {
        id: 'mustafaIsmail',
        quranReciter: 'مصطفى اسماعيل',
        photo: 'https://i.pinimg.com/564x/41/e5/5e/41e55ea6e5e5d70798320e94d447cdb7.jpg',
        quranReciterInWebsite: 'mustafa',
        server: 8
    }, {
        id: 'jbrl',
        quranReciter: 'محمد جبريل',
        photo: 'https://i.pinimg.com/564x/fa/8f/f8/fa8ff84527ff6c1611e304f94b1bf96d.jpg',
        server: 8
    }, {
        id: 'khaledJleel',
        quranReciter: 'خالد الجليل',
        photo: 'https://ar.islamway.net/uploads/authors/2341.png',
        quranReciterInWebsite: 'jleel',
        server: 10
    }, {
        id: 'muhammadsiddiqalminshawimurattal',
        quranReciter: 'محمد صديق المنشاوي (مرتل)',
        photo: 'https://i.pinimg.com/564x/be/0a/bd/be0abd0f3297bf93ad7eda235c625155.jpg',
        quranReciterInWebsite: 'minsh',
        server: 10
    }, {
        id: 'hatemFared',
        quranReciter: 'حاتم فريد',
        photo: 'https://ar.islamway.net/uploads/authors/hatem-fareed-alwaer.JPG',
        quranReciterInWebsite: 'hatem',
        server: 11
    }, {
        id: 'yasser',
        quranReciter: 'ياسر الدوسري',
        photo: 'https://ar.islamway.net/uploads/authors/yasser-al-dosary.jpg',
        server: 11
    }, {
        id: 'hazza',
        quranReciter: 'هزاع البلوشي',
        photo: 'https://ar.islamway.net/uploads/authors/3964.jpg',
        server: 11
    }, {
        id: 'sds',
        quranReciter: 'عبدالرحمن السديس',
        photo: 'https://ar.islamway.net/uploads/authors/sodees.jpg',
        server: 11
    }, {
        id: 'shatri',
        quranReciter: 'أبوبكر الشاطري',
        photo: 'https://i.pinimg.com/564x/f4/3a/1c/f43a1c939f6dc4c921d8e43e2e46b6e2.jpg',
        server: 11
    }, {
        id: 'maherAlMuaiqely',
        quranReciter: 'ماهر المعيقلي',
        photo: 'https://i.pinimg.com/564x/26/5d/3b/265d3b30f8d48c7acfc92d27d31c72ee.jpg',
        quranReciterInWebsite: 'maher',
        server: 12
    }, {
        id: 'mahmoudkalilAlHussary',
        quranReciter: 'محمود خليل الحصري',
        photo: 'https://thenationpress.net/imgs/2020/08/1598579203blobid0.jpg',
        quranReciterInWebsite: 'husr',
        server: 13
    }, {
        id: 'braak',
        quranReciter: 'محمد البراك',
        photo: 'https://ar.islamway.net/uploads/authors/muhammad-al-barrak.jpg',
        server: 13
    }, {
        id: 'refat',
        quranReciter: 'محمد رفعت',
        photo: 'https://i.pinimg.com/564x/08/50/f8/0850f8eacb630d7d007a1d6e4beb7c53.jpg',
        server: 14
    }, {
        id: 'mansor',
        quranReciter: 'منصور السالمي',
        photo: 'https://ar.islamway.net/uploads/authors/mansoursalmi.jpg',
        server: 14
    }
].map(({ id, photo, quranReciter, server, quranReciterInWebsite }) => {
    return {
        id,
        quranReciter,
        photo,
        websiteUrl: `https://server${server}.mp3quran.net`,
        quranReciterInWebsite
    }
})

export const getMp3Quran = () => generateSuwarForReciter({
    quranReciters: mp3Quran,
    website: 'mp3quran'
})
