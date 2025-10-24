import React from 'react'

export default function Header(){
  return (
    <header className="mb-12">
      <div className="flex items-center gap-6">
        <div style={{width:110, height:110, borderRadius:18, background:'linear-gradient(135deg,#111827,#0f1724)', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 8px 30px rgba(2,6,23,0.6)'}}>
          <img 
            src={`${import.meta.env.BASE_URL}me.jpeg`} 
            alt="George Vletsas" 
            style={{
              width:'20vw',
              height:'auto', 
              borderRadius:'12px', 
              objectFit:'cover'
            }}
          />
        </div>
        <div>
          <h1 className="text-4xl font-extrabold">George Vletsas</h1>
          <p className="small mt-1">student · developer · AI engineering</p>
        </div>
      </div>

      <div className="mt-8 card">
        <p>Hi! I’m a Computer Science Engineering student. I love coding, AI engineering, exploring new technologies, and turning ideas into real projects.</p>
      </div>
    </header>
  )
}
