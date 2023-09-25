// pengambilan dom untuk form dan input

var form = document.getElementById("asgn2")
var nama = document.getElementById("nama")
var availability = document.getElementById("availability")
var usia = document.getElementById("usia")
var lokasi = document.getElementById("lokasi")
var pengalaman = document.getElementById("pengalaman")
var email = document.getElementById("email")


// pengambilan dom untuk label

var labelNama = document.getElementById("labelNama")
var labelAvaliability = document.getElementById("labelAvaliability")
var labelUsia = document.getElementById("labelUsia")
var labelLokasi = document.getElementById("labelLokasi")
var labelPengalaman = document.getElementById("labelPengalaman")
var labelEmail = document.getElementById("labelEmail")



// event saat form di submit

form.addEventListener("submit",function(event){
    // agar form tidak ter submit (nosave)
    event.preventDefault() 
    
    // set nilai dari input form ke label

    //local storage
    localStorage.setItem( 'nama', nama.value )
    localStorage.setItem( 'availability', availability.value )
    localStorage.setItem( 'usia', usia.value )
    localStorage.setItem( 'lokasi', lokasi.value )
    localStorage.setItem( 'pengalaman', pengalaman.value )
    localStorage.setItem( 'email', email.value )



    labelNama.innerText = localStorage.getItem ('nama')
    labelAvaliability.innerText = localStorage.getItem ('availability')
    labelUsia.innerText = localStorage.getItem ('usia')
    labelLokasi.innerText = localStorage.getItem ('lokasi')
    labelPengalaman.innerText = localStorage.getItem ('pengalaman')
    labelEmail.innerText = localStorage.getItem ('email')

})
