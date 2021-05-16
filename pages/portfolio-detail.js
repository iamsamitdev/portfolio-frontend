import MainLayout from '../src/components/layouts/MainLayout';

const PortfolioDetail = () => {
    return (
        <MainLayout 
            pageTitle="การวางแผนโครงการสำหรับองค์กร | Portfolio | SamitKoyom.com" 
            description="ผลงานของฉัน สามิตร โกยม หน้ารวบรวมผลงาน"
            KeyWords="ผลงาน, สามิตร โกยม,หน้ารวบรวมผลงาน,อาจารย์สอนเขียนเว็บ, สอน PHP and MySQL,ปรึกษาโปรเจ็กต์ทำเว็บ,รับทำเว็บ,รับออกแบบเว็บไซต์, แอพพลิเคชั่น android, แอพพลิเคชั่น ios"
            image="https://www.itgenius.co.th/assets/frondend/images/socialcover/home-social-share.jpg"
        >

        <section>
            <div className="container py-20 mx-auto">
                <div className="flex flex-wrap items-center">
                <div className="w-full p-4 lg:w-4/12">
                    <img src="images/img-work-1.jpg" className="w-full" />
                </div>
                <div className="w-full p-4 lg:w-7/12 lg:ml-auto">
                    <h6 className="font-medium text-indigo-900 mb-3">การวางแผนโครงการ</h6>
                    <h2 className="mb-3 text-4xl font-semibold leading-tight text-gray-800 capitalize">การวางแผนโครงการสำหรับองค์กร</h2>
                    <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

                    <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

                    <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
                </div>
            </div>
        </section>


        </MainLayout>
    )
}

export default PortfolioDetail
