import MainLayout from '../src/components/layouts/MainLayout'

const contact = () => {
    
    return (
        <MainLayout 
            pageTitle="ติดต่อเรา | Portfolio | SamitKoyom.com" 
            description="ผลงานของฉัน สามิตร โกยม หน้ารวบรวมผลงาน"
            KeyWords="ผลงาน, สามิตร โกยม,หน้ารวบรวมผลงาน,อาจารย์สอนเขียนเว็บ, สอน PHP and MySQL,ปรึกษาโปรเจ็กต์ทำเว็บ,รับทำเว็บ,รับออกแบบเว็บไซต์, แอพพลิเคชั่น android, แอพพลิเคชั่น ios"
            image="https://www.itgenius.co.th/assets/frondend/images/socialcover/home-social-share.jpg"
        >

        <section>
            <div className="container py-20 mx-auto text-center">
                <div className="w-full px-4 mb-4 lg:mx-auto lg:w-1/2">
                    <h2 className="mb-2 text-4xl font-semibold leading-tight text-gray-800 capitalize">ติดต่อเรา</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue tortor. </p>
                </div>
            </div>
        </section>

        </MainLayout>
    )
}

export default contact
