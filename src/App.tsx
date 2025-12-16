import './tailwind.tw.css';
import ProviderButton from 'goformComponents/controls/button';
import ShortText from 'goformComponents/controls/short-text';
import Form from 'goformComponents/survey-form';
//import ViteButton from 'viteRemote/button';
//import ShortText from 'viteRemote/shorttext';

//import Theme from 'viteRemote/theme';

const formData = {
  id: 21,
  name: "Feedback ร้านที่มีการกดปุ่มป้ายราคาผิด",
  code: "1faa05b9",
  status: true,
  formId: "68ac15f6874983611bb17fd3",
  alertId: "",
  alertActivityId: "",
  createdBy: "",
  createdDate: "",
  modifiedBy: "",
  modifiedDate: "",
  form: {
    id: "68ac15f6874983611bb17fd3",
    refCode: "",
    name: "Feedback ร้านที่มีการกดปุ่มป้ายราคาผิด",
    status: "published",
    theme: "generic",
    type: "classic",
    serviceId: "676932dad9b6ebbb8e7dcaf2",
    serviceCode: "all-alert",
    serviceName: "",
    isResubmitable: true,
    sections: [
      {
        id: "68ac15f6874983611bb17fd4",
        sort: 1,
        name: "ผลการตรวจสอบร้านกดปุ่มป้ายราคาผิด",
        description: "",
        elements: [
          {
            id: "68ac15f6874983611bb17fd5",
            name: "button_status",
            sort: 1,
            type: "choice",
            isQuestion: true,
            config: {
              label: "สถานะหลังตรวจสอบ",
              subLabel: "",
              isRequired: true,
              options: [
                {
                  id: "68ac15f6874983611bb17fd6",
                  label: "ปกติ",
                  sort: 1,
                  image: "",
                  isOther: false,
                  nextSectionId: "68ac15f6874983611bb17fd8",
                  nextSectionName: "สถานะ ปกติ",
                  isSubmit: false
                },
                {
                  id: "68ac15f6874983611bb17fd7",
                  label: "ผิดปกติ",
                  sort: 2,
                  image: "",
                  isOther: false,
                  nextSectionId: "68ac18b7b0ca575c9540ebd1",
                  nextSectionName: "สถานะ ผิดปกติ",
                  isSubmit: false
                }
              ]
            },
            response: null
          }
        ]
      },
      {
        id: "68ac15f6874983611bb17fd8",
        sort: 2,
        name: "สถานะ ปกติ",
        description: "",
        elements: [
          {
            id: "68ac162db0ca57d7b68f291f",
            name: "normal_reason",
            sort: 1,
            type: "choice",
            isQuestion: true,
            config: {
              label: "สาเหตุที่ปกติ",
              subLabel: "",
              isRequired: true,
              options: [
                {
                  id: "68ac1634b0ca575f6bb539e0",
                  label: "ป้ายราคาผิด",
                  sort: 1,
                  image: "",
                  isOther: false,
                  nextSectionId: "68ac16c9b0ca576d5d720a0f",
                  nextSectionName: "แนบหลักฐาน (สถานะปกติ)",
                  isSubmit: false
                },
                {
                  id: "68ac1635b0ca57052614119c",
                  label: "วางสินค้าผิดตำแหน่ง",
                  sort: 2,
                  image: "",
                  isOther: false,
                  nextSectionId: "68ac16c9b0ca576d5d720a0f",
                  nextSectionName: "แนบหลักฐาน (สถานะปกติ)",
                  isSubmit: false
                },
                {
                  id: "68ac1636b0ca576d01a18f46",
                  label: "โปรโมชั่น ไม่ลดราคา",
                  sort: 3,
                  image: "",
                  isOther: false,
                  nextSectionId: "68ad84f4b0ca57b2945339dc",
                  nextSectionName: "สาเหตุเกิดจากโปรโมชั่นไม่ลดราคา",
                  isSubmit: false
                },
                {
                  id: "68ac1af0486d3dff52fa993a",
                  label: "อื่นๆ ระบุ",
                  sort: 4,
                  image: "",
                  isOther: true,
                  nextSectionId: "68ac16c9b0ca576d5d720a0f",
                  nextSectionName: "แนบหลักฐาน (สถานะปกติ)",
                  isSubmit: false
                }
              ]
            },
            response: null
          }
        ]
      },
      {
        id: "68ac16c9b0ca576d5d720a0f",
        sort: 3,
        name: "แนบหลักฐาน (สถานะปกติ)",
        description: "",
        elements: [
          {
            id: "68ac17fbb0ca57365394b6a8",
            name: "S3-E1-sub_header-name",
            sort: 1,
            type: "sub_header",
            isQuestion: false,
            config: {
              label: "!!โปรดอ่าน!! ถ้าตอบ ป้ายราคาผิด แนบ ภาพถ่าย Plan-o-gram หลังแก้ไข",
              subLabel: "",
              isRequired: false,
              alignment: "left"
            },
            response: null
          },
          {
            id: "68ac1816b0ca576cc28e2dc3",
            name: "S3-E2-sub_header-name",
            sort: 2,
            type: "sub_header",
            isQuestion: false,
            config: {
              label: "!!โปรดอ่าน!! ถ้าตอบ วางสินค้าผิดตำแหน่ง แนบ ภาพถ่าย การจัดวางสินค้า หลังแก้ไข",
              subLabel: "",
              isRequired: false,
              alignment: "left"
            },
            response: null
          },
          {
            id: "68ac1851b0ca576ab731d729",
            name: "upload_file",
            sort: 3,
            type: "uploads",
            isQuestion: true,
            config: {
              label: "",
              subLabel: "",
              isRequired: false,
              allowFileTypes: ["image/jpeg", "image/png"],
              maxNumberOfFile: 1,
              maxFileSize: 1048576
            },
            response: null
          },
          {
            id: "68ac1857b0ca570b00114eab",
            name: "confirm",
            sort: 4,
            type: "choice",
            isQuestion: true,
            config: {
              label: "ยืนยันข้อมูล",
              subLabel: "",
              isRequired: false,
              options: [
                {
                  id: "68ac1867b0ca57125772c67a",
                  label: "ยืนยัน",
                  sort: 1,
                  image: "",
                  isOther: false,
                  nextSectionId: "",
                  nextSectionName: "",
                  isSubmit: true
                }
              ]
            },
            response: null
          }
        ]
      },
      {
        id: "68ac18b7b0ca575c9540ebd1",
        sort: 4,
        name: "สถานะ ผิดปกติ",
        description: "",
        elements: [
          {
            id: "68ac18ceb0ca57f7a909096f",
            name: "abnormal_reason",
            sort: 1,
            type: "choice",
            isQuestion: true,
            config: {
              label: "สาเหตุที่ผิดปกติ",
              subLabel: "",
              isRequired: false,
              options: [
                {
                  id: "68ac18f3b0ca57589bd624fa",
                  label: "ทุจริตลดราคาสินค้าให้ตัวเอง",
                  sort: 1,
                  image: "",
                  isOther: false,
                  nextSectionId: "68ac193fb0ca572f341e3904",
                  nextSectionName: "ตำแหน่งของพนักงานที่กดปุ่มป้ายราคาผิด",
                  isSubmit: false
                },
                {
                  id: "68ac18f9b0ca57dcd63003c1",
                  label: "ทุจริตลดราคาสินค้าให้พนง.ภายในร้าน",
                  sort: 2,
                  image: "",
                  isOther: false,
                  nextSectionId: "68ac193fb0ca572f341e3904",
                  nextSectionName: "ตำแหน่งของพนักงานที่กดปุ่มป้ายราคาผิด",
                  isSubmit: false
                },
                {
                  id: "68ac18f9b0ca57ff92cc450c",
                  label: "ทุจริตลดราคาสินค้าให้ลูกค้า / คนรู้จัก",
                  sort: 3,
                  image: "",
                  isOther: false,
                  nextSectionId: "68ac193fb0ca572f341e3904",
                  nextSectionName: "ตำแหน่งของพนักงานที่กดปุ่มป้ายราคาผิด",
                  isSubmit: false
                },
                {
                  id: "68ac18fab0ca57470fe5c338",
                  label: "ขายสินค้าป้ายเหลือง หมดเวลาจำหน่าย",
                  sort: 4,
                  image: "",
                  isOther: false,
                  nextSectionId: "68ac193fb0ca572f341e3904",
                  nextSectionName: "ตำแหน่งของพนักงานที่กดปุ่มป้ายราคาผิด",
                  isSubmit: false
                },
                {
                  id: "68ac18fab0ca57f8d1fe5af7",
                  label: "ขายสินค้าป้ายเหลือง บาร์โค้ดชำรุด /ซีดจาง",
                  sort: 5,
                  image: "",
                  isOther: false,
                  nextSectionId: "68ac193fb0ca572f341e3904",
                  nextSectionName: "ตำแหน่งของพนักงานที่กดปุ่มป้ายราคาผิด",
                  isSubmit: false
                },
                {
                  id: "68ac18fcb0ca57ca9f4e343d",
                  label: "อื่นๆ ระบุ",
                  sort: 6,
                  image: "",
                  isOther: true,
                  nextSectionId: "68ac193fb0ca572f341e3904",
                  nextSectionName: "ตำแหน่งของพนักงานที่กดปุ่มป้ายราคาผิด",
                  isSubmit: false
                }
              ]
            },
            response: null
          }
        ]
      },
      {
        id: "68ac193fb0ca572f341e3904",
        sort: 5,
        name: "ตำแหน่งของพนักงานที่กดปุ่มป้ายราคาผิด",
        description: "",
        elements: [
          {
            id: "68ac19d1b0ca57f79f01f6b3",
            name: "position",
            sort: 1,
            type: "choice",
            isQuestion: true,
            config: {
              label: "ตำแหน่ง",
              subLabel: "",
              isRequired: false,
              options: [
                {
                  id: "68ac19e3b0ca5711bae7753a",
                  label: "FC",
                  sort: 1,
                  image: "",
                  isOther: false,
                  nextSectionId: "68c9212eb0ca57ecb31e624e",
                  nextSectionName: "แจ้ง FC รับทราบ ความผิดปกติแล้วหรือไม่",
                  isSubmit: false
                },
                {
                  id: "68ac19e4b0ca57b995d5dd7c",
                  label: "เจ้าของ SBP",
                  sort: 2,
                  image: "",
                  isOther: false,
                  nextSectionId: "68c9212eb0ca57ecb31e624e",
                  nextSectionName: "แจ้ง FC รับทราบ ความผิดปกติแล้วหรือไม่",
                  isSubmit: false
                },
                {
                  id: "68ac19e5b0ca576f0b66b58d",
                  label: "ผู้จัดการร้าน",
                  sort: 3,
                  image: "",
                  isOther: false,
                  nextSectionId: "68c9212eb0ca57ecb31e624e",
                  nextSectionName: "แจ้ง FC รับทราบ ความผิดปกติแล้วหรือไม่",
                  isSubmit: false
                },
                {
                  id: "68ac19e6b0ca57828b9d7fad",
                  label: "ผู้ช่วยผู้จัดการ",
                  sort: 4,
                  image: "",
                  isOther: false,
                  nextSectionId: "68c9212eb0ca57ecb31e624e",
                  nextSectionName: "แจ้ง FC รับทราบ ความผิดปกติแล้วหรือไม่",
                  isSubmit: false
                },
                {
                  id: "68ac19e7b0ca572e226deb0b",
                  label: "พนักงาน",
                  sort: 5,
                  image: "",
                  isOther: false,
                  nextSectionId: "68c9212eb0ca57ecb31e624e",
                  nextSectionName: "แจ้ง FC รับทราบ ความผิดปกติแล้วหรือไม่",
                  isSubmit: false
                },
                {
                  id: "68ac19e8b0ca579a3c088c25",
                  label: "Parttime",
                  sort: 6,
                  image: "",
                  isOther: false,
                  nextSectionId: "68c9212eb0ca57ecb31e624e",
                  nextSectionName: "แจ้ง FC รับทราบ ความผิดปกติแล้วหรือไม่",
                  isSubmit: false
                },
                {
                  id: "68ac1a15b0ca5757c894b5e0",
                  label: "ทวิ",
                  sort: 7,
                  image: "",
                  isOther: false,
                  nextSectionId: "68c9212eb0ca57ecb31e624e",
                  nextSectionName: "แจ้ง FC รับทราบ ความผิดปกติแล้วหรือไม่",
                  isSubmit: false
                }
              ]
            },
            response: null
          }
        ]
      },
      {
        id: "68ad84f4b0ca57b2945339dc",
        sort: 7,
        name: "สาเหตุเกิดจากโปรโมชั่นไม่ลดราคา",
        description: "",
        elements: [
          {
            id: "68ad8579b0ca5740ae3363e9",
            name: "S7-E3-sub_header-name",
            sort: 1,
            type: "sub_header",
            isQuestion: false,
            config: {
              label: "กรุณาใส่หมายเลขงานที่แจ้ง Help desk",
              subLabel: "",
              isRequired: false,
              alignment: "left"
            },
            response: null
          },
          {
            id: "68ad851fb0ca57cf5be57bce",
            name: "call_no",
            sort: 2,
            type: "short_text",
            isQuestion: true,
            config: {
              label: "ใส่เลข Call",
              subLabel: "",
              isRequired: false,
              validate: "string",
              minLength: 1,
              maxLength: 100
            },
            response: null
          },
          {
            id: "68ad8525b0ca5799efce8512",
            name: "confirm_call_no",
            sort: 3,
            type: "choice",
            isQuestion: true,
            config: {
              label: "ยืนยันข้อมูล",
              subLabel: "",
              isRequired: false,
              options: [
                {
                  id: "68ad8538b0ca57871881b975",
                  label: "ยืนยัน",
                  sort: 1,
                  image: "",
                  isOther: false,
                  nextSectionId: "",
                  nextSectionName: "",
                  isSubmit: true
                }
              ]
            },
            response: null
          }
        ]
      },
      {
        id: "68c9212eb0ca57ecb31e624e",
        sort: 9,
        name: "แจ้ง FC รับทราบ ความผิดปกติแล้วหรือไม่",
        description: "",
        elements: [
          {
            id: "68c9222eb0ca57c9a4d99012",
            name: "tell_fc",
            sort: 1,
            type: "choice",
            isQuestion: true,
            config: {
              label: "แจ้ง FC รับทราบ",
              subLabel: "",
              isRequired: false,
              options: [
                {
                  id: "6913061eb0ca57286a7d1fdc",
                  label: "ยังไม่ได้แจ้ง FC ระบุสาเหตุ",
                  sort: 1,
                  image: "",
                  isOther: true,
                  nextSectionId: "",
                  nextSectionName: "",
                  isSubmit: true
                },
                {
                  id: "6912f32fb0ca57c62a3a3c34",
                  label: "ดำเนินการแจ้ง FC เรียบร้อย",
                  sort: 2,
                  image: "",
                  isOther: false,
                  nextSectionId: "",
                  nextSectionName: "",
                  isSubmit: true
                }
              ]
            },
            response: null
          }
        ]
      }
    ]
  }
};

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <div>
        <ProviderButton size="large" type="ok">
          TEST
        </ProviderButton>


        {/* <ViteButton size="large" type="ok">
          TEST
        </ViteButton> */}

        <ShortText label="test123" />
      </div>
      <div className='container'>
        <Form data={formData} useI18n={false} onSubmit={()=>{}} mode={"form"} fileDomainUrl={""} onClosePreview={()=>{}} />
      </div>
    </div>
  );
};

export default App;
