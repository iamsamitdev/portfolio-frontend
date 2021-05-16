import Link from 'next/link';
import MainLayout from '../src/components/layouts/MainLayout';

export default function Home() {
  return (
    
    <MainLayout 
      pageTitle="หน้าหลัก | Portfolio | SamitKoyom.com" 
      description="ผลงานของฉัน สามิตร โกยม หน้ารวบรวมผลงาน"
      KeyWords="ผลงาน, สามิตร โกยม,หน้ารวบรวมผลงาน,อาจารย์สอนเขียนเว็บ, สอน PHP and MySQL,ปรึกษาโปรเจ็กต์ทำเว็บ,รับทำเว็บ,รับออกแบบเว็บไซต์, แอพพลิเคชั่น android, แอพพลิเคชั่น ios"
      image="https://www.itgenius.co.th/assets/frondend/images/socialcover/home-social-share.jpg"
    >
      
      <section>
        <div className="container py-20 mx-auto text-center">
          
          <div className="w-full px-4 mb-4 lg:mx-auto lg:w-1/2">
            <h2 className="mb-2 text-4xl font-semibold leading-tight text-gray-800 capitalize">รวมผลงานล่าสุดของฉัน</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue tortor. </p>
          </div>

          <div className="flex flex-wrap items-center mb-4">

            <div className="w-full p-4 lg:w-3/12 sm:w-6/12">
              <Link href="/portfolio-detail">
                <a className="block text-left hover:opacity-75"> 
                  <img src="images/img-work-1.jpg" className="object-cover w-full h-64" /> 
                  <div className="flex items-center justify-between px-4 py-3 bg-indigo-100">
                    <h5 className="text-base font-semibold text-gray-900">Project 1</h5>
                    <i className="fa-plus fas" />
                  </div> 
                </a>
              </Link>
            </div>
            
            <div className="w-full p-4 lg:w-3/12 sm:w-6/12">
              <Link href="/portfolio-detail">
                <a className="block text-left hover:opacity-75"> 
                  <img src="images/img-work-2.jpg" className="object-cover w-full h-64" /> 
                  <div className="flex items-center justify-between px-4 py-3 bg-indigo-100">
                    <h5 className="text-base font-semibold text-gray-900">Project 2</h5>
                    <i className="fa-plus fas" />
                  </div> 
                </a>
              </Link>
            </div>
            
            <div className="w-full p-4 lg:w-3/12 sm:w-6/12">
              <Link href="/portfolio-detail">
                <a className="block text-left hover:opacity-75"> 
                  <img src="images/img-work-3.jpg" className="object-cover w-full h-64" /> 
                  <div className="flex items-center justify-between px-4 py-3 bg-indigo-100">
                    <h5 className="text-base font-semibold text-gray-900">Project 3</h5>
                    <i className="fa-plus fas" />
                  </div> 
                </a>
              </Link>
            </div>
            
            <div className="w-full p-4 lg:w-3/12 sm:w-6/12">
              <Link href="/portfolio-detail">
                <a className="block text-left hover:opacity-75"> 
                  <img src="images/img-work-4.jpg" className="object-cover w-full h-64" /> 
                  <div className="flex items-center justify-between px-4 py-3 bg-indigo-100">
                    <h5 className="text-base font-semibold text-gray-900">Project 4</h5>
                    <i className="fa-plus fas" />
                  </div> 
                </a>
              </Link>
            </div>

          </div>

         </div> 
      </section>


    </MainLayout>
  )
}
