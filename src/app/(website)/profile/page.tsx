import React from "react";

export default function Page() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-black via-black to-black text-white flex items-center justify-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full m-4">
                <h1 className="text-2xl font-bold mb-6 text-center border-b border-gray-600 pb-4">
                    ข้อมูลส่วนตัว
                </h1>
                
                <div className="space-y-4">
                    <div className="flex">
                        <div className="w-32 text-gray-400">ชื่อ:</div>
                        <div className="flex-1 font-medium">คมกฤช</div>
                    </div>

                    <div className="flex">
                        <div className="w-32 text-gray-400">นามสกุล:</div>
                        <div className="flex-1 font-medium">มั่นประสงค์</div>
                    </div>

                    <div className="flex">
                        <div className="w-32 text-gray-400">รหัสนิสิต:</div>
                        <div className="flex-1 font-medium">66022444</div>
                    </div>

                    <div className="flex">
                        <div className="w-32 text-gray-400">คณะ:</div>
                        <div className="flex-1 font-medium">ICT</div>
                    </div>

                    <div className="flex">
                        <div className="w-32 text-gray-400">ชั้นปีที่:</div>
                        <div className="flex-1 font-medium">2</div>
                    </div>
                </div>
            </div>
        </div>
    );
}