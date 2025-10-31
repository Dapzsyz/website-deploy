document.addEventListener('DOMContentLoaded', () => {
    const showFileInputBtn = document.getElementById('showFileInput');
    const showCodeInputBtn = document.getElementById('showCodeInput');
    const fileInputSection = document.getElementById('fileInputSection');
    const codeInputSection = document.getElementById('codeInputSection');
    const deployButton = document.getElementById('deployButton');
    const statusDiv = document.getElementById('status');
    const vercelTokenInput = document.getElementById('vercelToken');
    const githubTokenInput = document.getElementById('githubToken');

    // --- Fungsi Transisi Opsi Input (Tanpa Delay) ---
    function setActiveOption(activeBtn, inactiveBtn, activeSection, inactiveSection) {
        // Cepat mengganti kelas untuk respons cepat
        inactiveBtn.classList.remove('active');
        activeBtn.classList.add('active');
        inactiveSection.classList.remove('active');
        activeSection.classList.add('active');
    }

    showFileInputBtn.addEventListener('click', () => {
        setActiveOption(showFileInputBtn, showCodeInputBtn, fileInputSection, codeInputSection);
    });

    showCodeInputBtn.addEventListener('click', () => {
        setActiveOption(showCodeInputBtn, showFileInputBtn, codeInputSection, fileInputSection);
    });


    // --- Fungsi Simulasi Deploy ---
    deployButton.addEventListener('click', () => {
        const vercelToken = vercelTokenInput.value.trim();
        const githubToken = githubTokenInput.value.trim();

        // Validasi Token
        if (!vercelToken || !githubToken) {
            statusDiv.style.backgroundColor = '#f8d7da';
            statusDiv.style.color = '#721c24';
            statusDiv.textContent = '❌ Error: Token Vercel dan GitHub harus diisi!';
            return;
        }

        // Tampilkan status loading
        deployButton.disabled = true;
        deployButton.textContent = '⏳ Memproses Deploy... (Membutuhkan Backend)';
        statusDiv.style.backgroundColor = '#fff3cd';
        statusDiv.style.color = '#856404';
        statusDiv.textContent = 'Memulai proses...';

        // Logika untuk menentukan input mana yang digunakan
        let inputType = fileInputSection.classList.contains('active') ? 'File ZIP' : 'Kode Manual';

        // 🚨 Simulasi Proses (Perlu Backend/Server Asli!)
        setTimeout(() => {
            statusDiv.style.backgroundColor = '#d4edda';
            statusDiv.style.color = '#155724';
            
            let message = `✅ Simulasi Selesai! Menggunakan input: **${inputType}**.`;
            message += `<br>❗ PENTING: Untuk interaksi API (Vercel/GitHub) yang aman dan fungsional, **Anda membutuhkan Sisi Backend (Node.js, Python, dll.)**`;
            message += `<br>Token Anda tidak boleh diekspos di kode JavaScript frontend.`;
            message += `<br>Proyek di-deploy ke: [Link Deploy Simulasi] dan disimpan ke GitHub: [Link Repo Simulasi]`;

            statusDiv.innerHTML = message;
            
            // Kembalikan tombol ke keadaan semula
            deployButton.disabled = false;
            deployButton.textContent = '✨ Deploy & Simpan ke GitHub';

        }, 2000); // Simulasi delay 2 detik
    });
});
