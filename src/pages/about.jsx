import React from 'react'

export default function About() {
  return (
    <div className="flex flex-col relative justify-center items-center min-h-[100vh] px-16 py-10">
        <div className="text-[var(--clr-text-1)] font-['Poppins'] text-3xl">About <span className="text-white">Us</span></div> 
        <div className="text-center font-['Poppins'] ">
          <p className="text-[var(--clr-text-1)] text-md">Website adalah kumpulan halaman web atau ‘lokasi’ di internet tempat kita menyimpan informasi dan menyajikannya agar bisa diakses oleh siapa pun secara online.🚀</p>
          <p><span className="text-[var(--clr-text-1)] text-3xl">Hello Semua Teman-teman</span>, Kita disini akan menjelaskan website buatan kita yang akan menambahkan edukasi kepada kita semua. Jadi website kita itu adalah website yang kita gabung-gabungkan menjadi satu.</p>
          <p className="hidden md:block">Maksudnya apa sih? Jadi website ini tuh ada website lain di dalam website tersebut. 

          Ada apa saja sih websitenya? Websitenya ada weather forecast app, web ai Ilama, web film list, dan ada web wikipedia Indonesia.</p>
        </div>

    </div>
  )
}
