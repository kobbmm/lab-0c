
export default async function DisplayNewsByIDPage({
    params
} : {
    params : {id:number}
}) {

    params = await params

    return (
      <>
      <div className="text-white">
        หน้าแสดงข้อมูลข่าวที่ {params.id}
      </div>
      </>
    )
} 
/*<div className="flex-repeat(1,0) items-center justify-center">
        <h2 className="flex text-red-500 text-3xl justify-center p-12 text-bold">
        “เศรษฐกิจโลกฟื้นตัวอย่างช้า ผลกระทบจากสงครามและความขัดแย้ง”
        </h2>
       <h2 className="text-center jutify-center  max-w-2xl min-w-xl items-center ">
       เศรษฐกิจโลกกำลังเผชิญกับความท้าทายในการฟื้นตัวจากวิกฤตเศรษฐกิจที่เกิดขึ้นอย่างต่อเนื่องจากการระบาดของโควิด-19 และความขัดแย้งทางการเมืองระหว่างประเทศมหาอำนาจ ในขณะที่หลายประเทศเริ่มเปิดเศรษฐกิจและดำเนินมาตรการกระตุ้นการเติบโต ผู้เชี่ยวชาญกลับมองว่าการฟื้นตัวยังมีแนวโน้มไปอย่างช้า ๆ โดยเฉพาะประเทศที่พึ่งพาการค้าระหว่างประเทศและการท่องเที่ยวเป็นหลัก

นอกจากนี้ ราคาสินค้าและพลังงานยังคงอยู่ในระดับสูง ส่งผลให้ค่าครองชีพในหลายประเทศพุ่งสูงขึ้น ประชาชนในหลายภูมิภาคเริ่มมีความกังวลเกี่ยวกับการดำเนินชีวิตและค่าใช้จ่ายที่เพิ่มขึ้น สถานการณ์ดังกล่าวทำให้รัฐบาลในหลายประเทศต้องพิจารณามาตรการสนับสนุนเพิ่มเติมเพื่อช่วยเหลือประชาชน ขณะเดียวกัน ผู้เชี่ยวชาญย้ำถึงความสำคัญของการปรับโครงสร้างเศรษฐกิจและการพัฒนาอย่างยั่งยืนเพื่อรองรับการเปลี่ยนแปลงในอนาคต
       </h2>
      </div>*/