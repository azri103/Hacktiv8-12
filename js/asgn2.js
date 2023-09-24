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

    labelNama.innerText = nama.value
    labelAvaliability.innerText = availability.value
    labelUsia.innerText = usia.value
    labelLokasi.innerText = lokasi.value
    labelPengalaman.innerText = pengalaman.value
    labelEmail.innerText = email.value

})
