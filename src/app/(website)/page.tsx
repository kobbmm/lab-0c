import Image from "next/image";

export default function Home() {
  return (
     <>
     <div>
      <h1>หน้าหลัก</h1>
      <div className="grid  items-center justify-center h-screen">
       <div className="animate-pulse bg-blue-500 text-white p-4 rounded-lg shadow-lg">Hello, I'm bouncing!</div>
       <div className="animate-ping bg-blue-500 text-white p-4 rounded-lg shadow-lg">Hello, I'm bouncing!</div>
       <div className="animate-bounce bg-blue-500 text-white p-4 rounded-lg shadow-lg">Hello, I'm bouncing!</div>
       <div className="animate-spin bg-blue-500 text-white p-4 rounded-lg shadow-lg">Hello, I'm bouncing!</div>
      </div>

     </div>
     </>
  );
}
