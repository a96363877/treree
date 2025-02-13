import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, Phone, PhoneIcon as WhatsApp } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#002921] text-white py-8 px-4 mt-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4">:تواصل معنا</h2>
          <div className="flex justify-center gap-4 rtl">
            <Link href="#" className="hover:text-[#00F0AC] transition-colors">
              <WhatsApp className="w-6 h-6" />
              <span className="sr-only">WhatsApp</span>
            </Link>
            <Link href="#" className="hover:text-[#00F0AC] transition-colors">
              <Facebook className="w-6 h-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="hover:text-[#00F0AC] transition-colors">
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="hover:text-[#00F0AC] transition-colors">
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </Link>
            <Link href="#" className="hover:text-[#00F0AC] transition-colors">
              <Phone className="w-6 h-6" />
              <span className="sr-only">Phone</span>
            </Link>
            <Link href="#" className="hover:text-[#00F0AC] transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.99 0H20.298L13.071 8.26L21.573 19.5H14.916L9.702 12.683L3.736 19.5H0.426L8.156 10.665L0 0H6.826L11.539 6.231L16.99 0ZM15.829 17.52H17.662L5.83 1.876H3.863L15.829 17.52Z"
                  fill="currentColor"
                />
              </svg>
              <span className="sr-only">X (Twitter)</span>
            </Link>
            <Link href="#" className="hover:text-[#00F0AC] transition-colors">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>

        <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center md:text-right">
          <Link href="#" className="hover:text-[#00F0AC] transition-colors">
            تأمين السيارات
          </Link>
          <Link href="#" className="hover:text-[#00F0AC] transition-colors">
            تأمين السفر
          </Link>
          <Link href="#" className="hover:text-[#00F0AC] transition-colors">
            تأمين الحيوانات الأليفة
          </Link>
          <Link href="#" className="hover:text-[#00F0AC] transition-colors">
            مركز تحميل الوثائق
          </Link>
          <Link href="#" className="hover:text-[#00F0AC] transition-colors">
            ارفع مطالبة
          </Link>
          <Link href="#" className="hover:text-[#00F0AC] transition-colors">
            ابدأ محادثة أونلاين
          </Link>
          <Link href="#" className="hover:text-[#00F0AC] transition-colors">
            تسجيل الدخول
          </Link>
        </nav>

        <div className="flex justify-between items-center pt-8 border-t border-gray-700">
          <div className="flex gap-4">
            <Image
              src="/authorized-by-AI.png"
              alt="Certification Logos"
              width={150}
              height={50}
              className="h-12 w-auto"
            />
          </div>
          <div className="text-[#00F0AC] text-2xl font-bold">tree</div>
        </div>
      </div>
    </footer>
  )
}

