// Inisialisasi array untuk menyimpan data anggota
let members = [
    { nama: "Budi Santoso", email: "budi@student.ac.id", minat: "Web Development" },
    { nama: "Siti Aminah", email: "siti@student.ac.id", minat: "Cybersecurity" }
];

// Cek jika ada data di localStorage agar tidak hilang saat pindah halaman
if (localStorage.getItem('techMembers')) {
    members = JSON.parse(localStorage.getItem('techMembers'));
}

// Fungsi untuk menampilkan data di tabel (halaman index)
function loadTable() {
    const tbody = document.getElementById("memberTableBody");
    if (tbody) {
        tbody.innerHTML = "";
        members.forEach(m => {
            tbody.innerHTML += `<tr>
                <td>${m.nama}</td>
                <td>${m.email}</td>
                <td>${m.minat}</td>
            </tr>`;
        });
    }
}

// Fungsi untuk menangani form submission (halaman form)
function handleForm(event) {
    event.preventDefault(); // Mencegah form melakukan refresh halaman
    
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const minat = document.getElementById("minat").value;

    // Masukkan data baru ke dalam array
    members.push({ nama, email, minat });
    
    // Simpan ke localStorage
    localStorage.setItem('techMembers', JSON.stringify(members));

    // Menampilkan Alert
    alert("Data berhasil disimpan!\nTerima kasih telah mendaftar di Tech Community.");

    // Menampilkan hasil di bawah form
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    resultDiv.innerHTML = `<strong>Data Tersimpan Sementara:</strong><br> Nama: ${nama} <br> Email: ${email} <br> Minat: ${minat}`;
    
    // Mengosongkan form
    document.getElementById("formAnggota").reset();
}

// Fungsi interaktif untuk halaman multimedia
function playAudio() {
    const audio = document.getElementById("myAudio");
    if(audio) audio.play();
}

function pauseAudio() {
    const audio = document.getElementById("myAudio");
    if(audio) audio.pause();
}

function changeImage() {
    const img = document.getElementById("myImage");
    if(img) {
        // Logika toggle: Jika gambar saat ini adalah coding.jpg, ubah ke gambar lain. Jika tidak, kembalikan ke coding.jpg
        if (img.src.includes("coding.jpg")) {
            img.src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop"; 
            alert("Gambar berhasil diubah ke tampilan alternatif!");
        } else {
            img.src = "coding.jpg"; 
            alert("Gambar dikembalikan ke tampilan awal!");
        }
    }
}

// Jalankan fungsi saat halaman dimuat
window.onload = loadTable;