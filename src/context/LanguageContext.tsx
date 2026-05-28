import React, { useEffect, useState, createContext, useContext } from 'react';
type Language = 'en' | 'ar';
type Direction = 'ltr' | 'rtl';
interface LanguageContextType {
  lang: Language;
  dir: Direction;
  toggleLanguage: () => void;
  t: (key: string) => string;
}
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    'nav.service': 'Our Service',
    'nav.projects': 'Our Projects',
    'nav.about': 'About Us',
    'nav.contact': 'Contact Us',
    'nav.cta': 'Start Your Project',
    // Hero
    'hero.title1': 'Design & Delivery of\nYour Villa Interiors',
    'hero.title2': 'Made Simple',
    'hero.subtitle':
    'Kitchens, closets, doors, and premium uPVC windows designed, manufactured, and installed by one trusted Emirati factory.',
    'hero.cta': 'Get Your FREE 3D Design Now',
    // Solutions Outlined
    'sol.out.1': 'OUR',
    'sol.out.2': 'INTERIOR',
    'sol.out.3': 'SOLUTIONS',
    // Solutions Circle
    'sol.circle.title': 'Our Solutions',
    'sol.circle.sub1': 'We provide all type of modular',
    'sol.circle.sub2': 'KITCHEN, CLOSET, DOOR Services',
    // Solutions Grid
    'sol.grid.kitchens': 'Kitchens',
    'sol.grid.kitchens.desc':
    'Designed for daily use, built for long-term performance',
    'sol.grid.closets': 'Wardrobes & Closets',
    'sol.grid.closets.desc':
    'Structured storage that stays organized over time',
    'sol.grid.doors': 'Wooden Doors',
    'sol.grid.doors.desc': 'Precise finishes that hold up with everyday use',
    'sol.grid.windows': 'Premium Window Systems',
    'sol.grid.windows.desc': 'Sealed systems for better comfort and control',
    'sol.grid.cta': 'Explore Our Projects',
    // Why Difficult
    'diff.title': 'Why Villa Interior Projects Often Become Difficult?',
    'diff.desc':
    'When interior systems are sourced from multiple suppliers, the process becomes fragmented, making it difficult to coordinate a consistent final result. The lack of commitment leads to:',
    'diff.prob1': 'Quality Problems',
    'diff.prob2': 'Delays during execution',
    'diff.prob3': 'Poor value for money',
    'diff.prob4': 'Weak after-sales support',
    'diff.app.title': 'The Ideal Factory\nApproach',
    'diff.app1.title': 'Multiple Interior Systems',
    'diff.app1.desc':
    'One Factory. Kitchens, wardrobes, doors, and premium window systems—manufactured together in one facility for coordinated villa interiors.',
    'diff.app2.title': 'Coordinated Design',
    'diff.app2.desc':
    'Our designers ensure that kitchens, closets, doors, & window systems complement each other in style & proportion.',
    'diff.app3.title': 'After-Sales Support & Maintenance',
    'diff.app3.desc':
    'Our team installs every product with precision to ensure the final result reflects the original design.',
    'diff.app4.title': 'Precision Manufacturing & Installation',
    'diff.app4.desc':
    'Manufactured in-house. Installed with precision. One accountable team.',
    // Design Before Spending
    'design.title': 'Design Your Villa Interiors Before Spending a Dirham',
    'design.desc':
    'Upload your villa floor plan and collaborate live with our designers to create a full 3D interior concept within an hour.',
    'design.check1': 'No guessing',
    'design.check2': 'No Expensive Redesigns',
    'design.check3': 'No Delays',
    'design.cta': 'Start Your 3D Interior Design',
    'design.step1': 'Upload Floor\nPlan',
    'design.step2': 'Get 3D Design',
    'design.step3': 'Live Design Edit',
    // Gallery
    'gal.title': 'Designed. Built. Delivered',
    'gal.all': 'All',
    'gal.kitchen': 'Kitchen',
    'gal.door': 'Door',
    'gal.closet': 'Closet',
    'gal.windows': 'uPVC Windows',
    'gal.cta': 'Explore Projects',
    // Why Choose
    'choose.title': 'Why Villa Owners Choose Ideal Factory',
    'choose.check1':
    'One factory for kitchens, wardrobes, doors, and premium window systems.',
    'choose.check2': 'Fast 3D design before production',
    'choose.check3': 'Precision manufacturing with European machinery',
    'choose.check4': 'Solutions designed for UAE villas',
    'choose.cta': 'Start Your Free 3D Design',
    // Testimonials
    'test.label': 'Testimonials',
    'test.title': "What They're Talking About Company ?",
    'test.role': 'Customer',
    // Contact
    'contact.badge': 'Get in touch',
    'contact.title1': "Let's discuss your project!",
    'contact.desc':
    'Contact us today and learn more about how our interior fit out & custom manufacturing services can bring your ideas to life.',
    'contact.title2': 'We Love to Hear From You',
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.phone': 'Phone Number',
    'contact.msg': 'Message',
    'contact.submit': 'Submit',
    // Footer
    'footer.desc':
    'Our kitchens may not be able to whisk you away to sun kissed foreign shores, but our collection boasts all the quality craftsmanship and style..',
    'footer.links': 'Quick Links',
    'footer.explore': 'Explore',
    'footer.contact': 'Contact',
    'footer.copy': 'Copyright ©2025 lumicore all rights reserved',
    'footer.terms': 'Terms & Condition',
    'footer.privacy': 'Privacy Policy',
    // Agent
    'agent.help': 'Need help? Chat with us'
  },
  ar: {
    // Nav
    'nav.service': 'خدماتنا',
    'nav.projects': 'مشاريعنا',
    'nav.about': 'من نحن',
    'nav.contact': 'اتصل بنا',
    'nav.cta': 'ابدأ مشروعك',
    // Hero
    'hero.title1': 'تصميم وتنفيذ\nديكورات فيلتك',
    'hero.title2': 'بكل بساطة',
    'hero.subtitle':
    'مطابخ، خزائن، أبواب، ونوافذ uPVC فاخرة مصممة ومصنعة ومركبة من قبل مصنع إماراتي موثوق.',
    'hero.cta': 'احصل على تصميم 3D مجاناً الآن',
    // Solutions Outlined
    'sol.out.1': 'حلولنا',
    'sol.out.2': 'الداخلية',
    'sol.out.3': 'المتكاملة',
    // Solutions Circle
    'sol.circle.title': 'حلولنا',
    'sol.circle.sub1': 'نقدم جميع أنواع خدمات',
    'sol.circle.sub2': 'المطابخ، الخزائن، والأبواب',
    // Solutions Grid
    'sol.grid.kitchens': 'المطابخ',
    'sol.grid.kitchens.desc':
    'مصممة للاستخدام اليومي، ومبنية لأداء يدوم طويلاً',
    'sol.grid.closets': 'الخزائن وغرف الملابس',
    'sol.grid.closets.desc': 'تخزين منظم يبقى مرتباً بمرور الوقت',
    'sol.grid.doors': 'الأبواب الخشبية',
    'sol.grid.doors.desc': 'تشطيبات دقيقة تتحمل الاستخدام اليومي',
    'sol.grid.windows': 'أنظمة النوافذ الفاخرة',
    'sol.grid.windows.desc': 'أنظمة محكمة لراحة وتحكم أفضل',
    'sol.grid.cta': 'استكشف مشاريعنا',
    // Why Difficult
    'diff.title': 'لماذا تصبح مشاريع التصميم الداخلي للفلل صعبة غالباً؟',
    'diff.desc':
    'عندما يتم توريد الأنظمة الداخلية من موردين متعددين، تصبح العملية مجزأة، مما يجعل من الصعب تنسيق نتيجة نهائية متسقة. يؤدي نقص الالتزام إلى:',
    'diff.prob1': 'مشاكل في الجودة',
    'diff.prob2': 'تأخيرات أثناء التنفيذ',
    'diff.prob3': 'قيمة ضعيفة مقابل المال',
    'diff.prob4': 'دعم ضعيف بعد البيع',
    'diff.app.title': 'نهج\nأيديال فاكتوري',
    'diff.app1.title': 'أنظمة داخلية متعددة',
    'diff.app1.desc':
    'مصنع واحد. مطابخ، خزائن، أبواب، وأنظمة نوافذ فاخرة—تُصنع معاً في منشأة واحدة لتصميمات داخلية متناسقة للفلل.',
    'diff.app2.title': 'تصميم متناسق',
    'diff.app2.desc':
    'يضمن مصممونا أن المطابخ، الخزائن، الأبواب، وأنظمة النوافذ تكمل بعضها البعض في الأسلوب والنسب.',
    'diff.app3.title': 'دعم وصيانة ما بعد البيع',
    'diff.app3.desc':
    'يقوم فريقنا بتركيب كل منتج بدقة لضمان أن النتيجة النهائية تعكس التصميم الأصلي.',
    'diff.app4.title': 'تصنيع وتركيب دقيق',
    'diff.app4.desc': 'تصنيع داخلي. تركيب بدقة. فريق واحد مسؤول.',
    // Design Before Spending
    'design.title': 'صمم ديكورات فيلتك قبل إنفاق درهم واحد',
    'design.desc':
    'ارفع مخطط فيلتك وتعاون مباشرة مع مصممينا لإنشاء مفهوم داخلي 3D كامل في غضون ساعة.',
    'design.check1': 'لا للتخمين',
    'design.check2': 'لا لإعادة التصميم المكلفة',
    'design.check3': 'لا للتأخير',
    'design.cta': 'ابدأ تصميمك الداخلي 3D',
    'design.step1': 'رفع المخطط',
    'design.step2': 'احصل على تصميم 3D',
    'design.step3': 'تعديل التصميم المباشر',
    // Gallery
    'gal.title': 'تم التصميم. تم البناء. تم التسليم',
    'gal.all': 'الكل',
    'gal.kitchen': 'مطبخ',
    'gal.door': 'باب',
    'gal.closet': 'خزانة',
    'gal.windows': 'نوافذ uPVC',
    'gal.cta': 'استكشف المشاريع',
    // Why Choose
    'choose.title': 'لماذا يختار أصحاب الفلل أيديال فاكتوري',
    'choose.check1':
    'مصنع واحد للمطابخ، الخزائن، الأبواب، وأنظمة النوافذ الفاخرة.',
    'choose.check2': 'تصميم 3D سريع قبل الإنتاج',
    'choose.check3': 'تصنيع دقيق بآلات أوروبية',
    'choose.check4': 'حلول مصممة للفلل الإماراتية',
    'choose.cta': 'ابدأ تصميمك 3D المجاني',
    // Testimonials
    'test.label': 'آراء العملاء',
    'test.title': 'ماذا يقولون عن شركتنا؟',
    'test.role': 'عميل',
    // Contact
    'contact.badge': 'تواصل معنا',
    'contact.title1': 'دعنا نناقش مشروعك!',
    'contact.desc':
    'اتصل بنا اليوم وتعرف أكثر على كيف يمكن لخدمات التجهيز الداخلي والتصنيع المخصص أن تحول أفكارك إلى واقع.',
    'contact.title2': 'نسعد بسماع رأيك',
    'contact.name': 'اسمك',
    'contact.email': 'بريدك الإلكتروني',
    'contact.phone': 'رقم الهاتف',
    'contact.msg': 'الرسالة',
    'contact.submit': 'إرسال',
    // Footer
    'footer.desc':
    'قد لا تأخذك مطابخنا إلى شواطئ أجنبية مشمسة، لكن مجموعتنا تتميز بكل جودة الحرفية والأناقة..',
    'footer.links': 'روابط سريعة',
    'footer.explore': 'استكشف',
    'footer.contact': 'اتصال',
    'footer.copy': 'حقوق النشر ©2025 لوميكور جميع الحقوق محفوظة',
    'footer.terms': 'الشروط والأحكام',
    'footer.privacy': 'سياسة الخصوصية',
    // Agent
    'agent.help': 'تحتاج مساعدة؟ تواصل معنا'
  }
};
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);
export const LanguageProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [lang, setLang] = useState<Language>('en');
  const dir: Direction = lang === 'ar' ? 'rtl' : 'ltr';
  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [lang, dir]);
  const toggleLanguage = () => {
    setLang((prev) => prev === 'en' ? 'ar' : 'en');
  };
  const t = (key: string): string => {
    return translations[lang][key] || key;
  };
  return (
    <LanguageContext.Provider
      value={{
        lang,
        dir,
        toggleLanguage,
        t
      }}>
      
      <div className={lang === 'ar' ? 'font-arabic' : 'font-sans'}>
        {children}
      </div>
    </LanguageContext.Provider>);

};
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};