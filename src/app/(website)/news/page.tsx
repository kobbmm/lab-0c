import newsdb from "./[id]/db"
import Link from "next/link"
import React from 'react';
async function GetAllNews() {
    return newsdb
}

export default async function newspage(){
    
    const news_list = await GetAllNews()

    return (
       
    <div className="bg-gradient-to-r from-black via-black to-black text-white">
      <div>
        หน้าแสดงรายการข่าว
      </div>

      <div>
        <ul>
            {news_list.map(item => (
                <li key={item.id}><Link href={`/news/${item.id}`}>{item.title}</Link></li>
            ))}
        </ul>
      </div>
    </div>
      
    )
}

