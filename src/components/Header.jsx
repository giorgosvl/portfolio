import React from 'react'

export default function Header(){
  return (
    <header className="mb-12">
      <div className="flex items-center gap-6">
        <div style={{width:110, height:110, borderRadius:18, background:'linear-gradient(135deg,#111827,#0f1724)', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 8px 30px rgba(2,6,23,0.6)'}}>
          <div style={{width:80,height:80, borderRadius:12, background:'#0b1220', display:'flex', alignItems:'center', justifyContent:'center', fontSize:28}}>GV</div>
        </div>
        <div>
          <h1 className="text-4xl font-extrabold">George Vletsas</h1>
          <p className="small mt-1">student · developer · AI engineering</p>
        </div>
      </div>

      <div className="mt-8 card">
        <p>Hey — welcome to my AI portfolio. Here you'll find projects, skills and contact info. Projects are pulled automatically from my public GitHub repos.</p>
      </div>
    </header>
  )
}
