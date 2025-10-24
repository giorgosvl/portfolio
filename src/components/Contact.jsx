import React from 'react'

export default function Contact(){
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card">
          <h4 className="font-medium">Email</h4>
          <p className="small">giorgosvletsas@gmail.com</p>
        </div>
        <div className="card">
          <h4 className="font-medium">Profiles</h4>
          <p className="small"><a className="link" href="https://github.com/giorgosvl" target="_blank" rel="noreferrer">GitHub: giorgosvl</a></p>
          <p className="small mt-2"><a className="link" href="https://www.linkedin.com/in/George Vletsas" target="_blank" rel="noreferrer">LinkedIn: George Vletsas</a></p>
        </div>
      </div>
    </section>
  )
}
