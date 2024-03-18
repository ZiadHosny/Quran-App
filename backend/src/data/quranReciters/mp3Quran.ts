import { QuranReciterInWebsite } from "../../utils/types.js"
import { generateSuwarForReciter } from "../generateList.js"

interface Mp3Quran extends QuranReciterInWebsite {
    server: number
}

const mp3QuranReciter: Mp3Quran[] = [
    {
        id: 'alafasy',
        quranReciter: 'مشاري بن راشد العفاسي',
        photo: 'https://i.pinimg.com/564x/93/08/8b/93088be16e324b36b2d98a12748366a6.jpg',
        quranReciterInWebsite: 'afs',
        server: 8,
    }, {
        id: 'mahmoudkalilAlHussarymurattal',
        quranReciter: '(مرتل) محمود خليل الحصري',
        photo: 'https://thenationpress.net/imgs/2020/08/1598579203blobid0.jpg',
        quranReciterInWebsite: 'husr',
        server: 13,
    }, {
        id: 'mahmoudkalilAlHussarymujawwad',
        quranReciter: '(مجود) محمود خليل الحصري',
        photo: 'https://thenationpress.net/imgs/2020/08/1598579203blobid0.jpg',
        quranReciterInWebsite: 'husr/Almusshaf-Al-Mojawwad',
        server: 13,
    }, {
        id: 'abdulbasitmurattal',
        quranReciter: 'عبد الباسط عبد الصمد (مرتل)',
        photo: 'https://ar.islamway.net/uploads/authors/abdul-baset-abdul-samad.jpg',
        quranReciterInWebsite: 'basit',
        server: 7,
    }, {
        id: 'abdulbasitmujawwad',
        quranReciter: 'عبد الباسط عبد الصمد (مجود)',
        photo: 'https://i.pinimg.com/564x/c2/c5/57/c2c5579d6becfccbb4e98f6bcf008127.jpg',
        quranReciterInWebsite: 'basit/Almusshaf-Al-Mojawwad',
        server: 7,
    }, {
        id: 'muhammadsiddiqalminshawimurattal',
        quranReciter: 'محمد صديق المنشاوي (مرتل)',
        photo: 'https://i.pinimg.com/564x/be/0a/bd/be0abd0f3297bf93ad7eda235c625155.jpg',
        quranReciterInWebsite: 'minsh',
        server: 10,
    }, {
        id: 'muhammadsiddiqalminshawimujawwad',
        quranReciter: 'محمد صديق المنشاوي (مجود)',
        photo: 'https://ar.islamway.net/uploads/authors/1032.jpg',
        quranReciterInWebsite: 'minsh/Almusshaf-Al-Mojawwad',
        server: 10,
    }, {
        id: 'mahmoudalielbanamurattal',
        quranReciter: '(مرتل) محمود علي البنا',
        photo: 'https://i.pinimg.com/564x/29/67/b3/2967b3fbc1ce1f5a70874288d34317bf.jpg',
        quranReciterInWebsite: 'bna',
        server: 8,
    }, {
        id: 'mahmoudalielbanamujawwad',
        quranReciter: 'محمود علي البنا (مجود)',
        photo: 'https://i.pinimg.com/564x/29/67/b3/2967b3fbc1ce1f5a70874288d34317bf.jpg',
        quranReciterInWebsite: 'bna/Almusshaf-Al-Mojawwad',
        server: 8,
    }, {
        id: 'maherAlMuaiqelymurattal',
        quranReciter: '(مرتل) ماهر المعيقلي',
        photo: 'https://i.pinimg.com/564x/26/5d/3b/265d3b30f8d48c7acfc92d27d31c72ee.jpg',
        quranReciterInWebsite: 'maher',
        server: 12,
    }, {
        id: 'maherAlMuaiqelymujawwad',
        quranReciter: '(مجود) ماهر المعيقلي',
        photo: 'https://i.pinimg.com/564x/26/5d/3b/265d3b30f8d48c7acfc92d27d31c72ee.jpg',
        quranReciterInWebsite: 'maher/Almusshaf-Al-Mojawwad',
        server: 12,
    }, {
        id: 'mohamedtablawi',
        quranReciter: 'محمد محمود الطبلاوي',
        photo: 'https://i.pinimg.com/564x/c8/6b/65/c86b65fc80ab66766a662f4c3a0a4a85.jpg',
        quranReciterInWebsite: 'tblawi',
        server: 12,
    }, {
        id: 'yasser',
        quranReciter: 'ياسر الدوسري',
        photo: 'https://i.pinimg.com/564x/28/08/6e/28086e4bac69ea06098568974847d672.jpg',
        server: 11,
    }, {
        id: 'faresAbaad',
        quranReciter: 'فارس عباد',
        photo: 'https://i.pinimg.com/564x/ec/48/9d/ec489db0ef3c1608a6d8c46166e0fb0b.jpg',
        quranReciterInWebsite: 'frs_a',
        server: 8,
    }, {
        id: 'ahmedalajmi',
        quranReciter: 'أحمد علي العجمي',
        photo: 'https://ar.islamway.net/uploads/authors/ahmad-bin-ali-al-ajmy.jpg',
        quranReciterInWebsite: 'ajm',
        server: 10,
    }, {
        id: 'hazza',
        quranReciter: 'هزاع البلوشي',
        photo: 'https://i.pinimg.com/564x/bc/1e/e0/bc1ee02df0a6a1751857f1ddc7844757.jpg',
        server: 11,
    }, {
        id: 'IdrisAbkar',
        quranReciter: 'إدريس أبكر',
        photo: 'https://i.pinimg.com/564x/42/28/3e/42283eed3aa7b9639cf28caf8c1365d6.jpg',
        quranReciterInWebsite: 'abkr',
        server: 6,
    }, {
        id: 'SaadElGhamidi',
        quranReciter: 'سعد الغامدي',
        photo: 'https://i.pinimg.com/564x/14/56/7f/14567fa0c053c4f29d6b0e606f232424.jpg',
        quranReciterInWebsite: 's_gmd',
        server: 7,
    }, {
        id: 'mansor',
        quranReciter: 'منصور السالمي',
        photo: 'https://i.pinimg.com/564x/a1/97/4a/a1974a9af45a86c37eb15171c63fb730.jpg',
        server: 14,
    }, {
        id: 'shatri',
        quranReciter: 'أبوبكر الشاطري',
        photo: 'https://i.pinimg.com/564x/f4/3a/1c/f43a1c939f6dc4c921d8e43e2e46b6e2.jpg',
        server: 11,
    }, {
        id: 'yousufbinnoahahmad',
        quranReciter: 'يوسف بن نوح',
        photo: 'https://ar.islamway.net/uploads/authors/1405.jpg',
        quranReciterInWebsite: 'noah',
        server: 8,
    }, {
        id: 'ahmad_nu',
        quranReciter: 'أحمد نعينع',
        photo: 'https://i.pinimg.com/564x/e7/5f/e1/e75fe1583ffecf9e2a78d0593f66cac4.jpg',
        server: 11,
    }, {
        id: 'jbrl',
        quranReciter: 'محمد جبريل',
        photo: 'https://i.pinimg.com/564x/fa/8f/f8/fa8ff84527ff6c1611e304f94b1bf96d.jpg',
        server: 8,
    }, {
        id: 'aliHthfi',
        quranReciter: 'علي الحذيفي',
        photo: 'https://i.pinimg.com/originals/d4/3a/fe/d43afef3ae04b26f2deea396aa22a982.jpg',
        quranReciterInWebsite: 'hthfi',
        server: 9,

    }, {
        id: 'ahmad_hozefy',
        quranReciter: 'أحمد الحذيفي',
        photo: 'https://i.pinimg.com/564x/b2/de/79/b2de79bfc03b77ff5de3b68cd810d9b0.jpg',
        quranReciterInWebsite: 'ahmad_huth',
        server: 8,
    }, {
        id: 'trablsi',
        quranReciter: 'أحمد الطرابلسي',
        photo: 'https://i.pinimg.com/564x/d3/c2/9c/d3c29cc03198c3c15d380af048b2d68b.jpg',
        server: 10,
    }, {
        id: 'qtm',
        quranReciter: 'ناصر القطامي',
        photo: 'https://i.pinimg.com/564x/6f/2d/35/6f2d3586e913233f1f03ade207398949.jpg',
        server: 6,
    }, {
        id: 'khaledJleel',
        quranReciter: 'خالد الجليل',
        photo: 'https://ar.islamway.net/uploads/authors/2341.png',
        quranReciterInWebsite: 'jleel',
        server: 10,
    }, {
        id: 'muhammadayyub',
        quranReciter: 'محمد ايوب',
        photo: 'https://i.pinimg.com/564x/54/37/85/543785f830b99a296631ac2afdbe8f85.jpg',
        quranReciterInWebsite: 'ayyub',
        server: 8,
    }, {
        id: 'sds',
        quranReciter: 'عبدالرحمن السديس',
        photo: 'https://i.pinimg.com/564x/83/9f/a1/839fa1a43d6988809d0796f619eba1c8.jpg',
        server: 11,
    }, {
        id: 'soodElshreem',
        quranReciter: 'سعود الشريم',
        photo: 'https://i.pinimg.com/564x/41/75/00/4175004b89851b4d92d9ba543deba383.jpg',
        quranReciterInWebsite: 'shur',
        server: 7,
    }, {
        id: 'braak',
        quranReciter: 'محمد البراك',
        photo: 'https://ar.islamway.net/uploads/authors/muhammad-al-barrak.jpg',
        server: 13,
    }, {
        id: 'mustafaIsmailmurattal',
        quranReciter: '(مرتل) مصطفى اسماعيل',
        photo: 'https://i.pinimg.com/564x/41/e5/5e/41e55ea6e5e5d70798320e94d447cdb7.jpg',
        quranReciterInWebsite: 'mustafa',
        server: 8,
    }, {
        id: 'mustafaIsmailmujawwad',
        quranReciter: '(مجود) مصطفى اسماعيل',
        photo: 'https://i.pinimg.com/564x/41/e5/5e/41e55ea6e5e5d70798320e94d447cdb7.jpg',
        quranReciterInWebsite: 'mustafa/Almusshaf-Al-Mojawwad',
        server: 8,
    }, {
        id: 'refat',
        quranReciter: 'محمد رفعت',
        photo: 'https://i.pinimg.com/564x/08/50/f8/0850f8eacb630d7d007a1d6e4beb7c53.jpg',
        server: 14,
    }, {
        id: 'akdr',
        quranReciter: 'ابراهيم الأخضر',
        photo: 'https://i.pinimg.com/564x/06/a3/9f/06a39fbfe9c6944f1e3e4467b8f9426a.jpg',
        server: 6,
    }, {
        id: 'hatemFared',
        quranReciter: 'حاتم فريد',
        photo: 'https://i.pinimg.com/564x/cb/39/b2/cb39b2554bfcb857887dc0ad9a9e10c6.jpg',
        quranReciterInWebsite: 'hatem',
        server: 11,
    }, {
        id: 'abdullahkhayat',
        quranReciter: 'عبد الله خياط',
        photo: 'https://ar.islamway.net/uploads/authors/abdullah-bin-khayat.jpg',
        quranReciterInWebsite: 'kyat',
        server: 12,
    },
]

export const mp3Quran = mp3QuranReciter.map(({ id, photo, quranReciter, server, quranReciterInWebsite }) => {
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
});
