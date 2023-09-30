document.addEventListener('DOMContentLoaded', function () {
    // Selector input yang dibutuhkan untuk validasi :
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const gender = document.getElementsByName("gender");
    const address = document.getElementById("address");
    const address2 = document.getElementById("address2");
    const nationality = document.getElementById("nationality");
    const languages = document.getElementsByName("language");

    // Selector button account validate pada form
    const accountValidate = document.getElementById('accountvalidate');
    // Default button account validate dinonaktifkan
    accountValidate.disabled = true;

    // Selector Error Message pada invalid-feedback
    const fnameErrorMessage = document.querySelector("#fname ~ .invalid-feedback");
    const lnameErrorMessage = document.querySelector("#lname ~ .invalid-feedback");
    const usernameErrorMessage = document.querySelector("#username ~ .invalid-feedback");
    const emailErrorMessage = document.querySelector("#email ~ .invalid-feedback");
    const genderErrorMessage = document.querySelector("#gender-invalid");
    const genderLabel1 = document.querySelector("#g1");
    const genderLabel2 = document.querySelector("#g2");
    const genderLabel3 = document.querySelector("#g3");
    const addressErrorMessage = document.querySelector("#address ~ .invalid-feedback");
    const address2ErrorMessage = document.querySelector("#address2 ~ .invalid-feedback");
    const nationalityErrorMessage = document.querySelector("#nationality ~ .invalid-feedback");
    const languagesErrorMessage = document.querySelector("#language-invalid");
    const languagesLabel1 = document.querySelector("#l1");
    const languagesLabel2 = document.querySelector("#l2");
    const languagesLabel3 = document.querySelector("#l3");

    // Fungsi untuk mengecek validasi account form 
    function validasiAkun(){
        // Default validasi :
        let valid = true;

        // Validasi
        if (fname.value === ''){
            fnameErrorMessage.textContent = 'Please enter a valid first name.';
            fname.classList.add('is-invalid');
            valid = false;
        } else {
            fname.classList.remove('is-invalid');
            valid = true;
        }

        if (lname.value === ''){
            lnameErrorMessage.textContent = 'Please enter a valid last name.';
            lname.classList.add('is-invalid');
            valid = false;
        } else {
            lname.classList.remove('is-invalid');
            valid = true;
        }

        if (username.value === ''){
            usernameErrorMessage.textContent = 'Please enter a valid username.';
            username.classList.add('is-invalid');
            valid = false;
        } else {
            username.classList.remove('is-invalid');
            valid = true;
        }

        if (email.value === ''){
            emailErrorMessage.textContent = 'Please enter a valid email.';
            email.classList.add('is-invalid');
            valid = false;
        } else {
            email.classList.remove('is-invalid');
            valid = true;
        }

        let selectedGender = false;
        for (const radio of gender) {
            if (radio.checked) {
                selectedGender = true;
                genderErrorMessage.style.display = 'none';
                genderLabel1.style.color = 'black';
                genderLabel2.style.color = 'black';
                genderLabel3.style.color = 'black';
                valid = true;
                break;
            } else if (!selectedGender) {
                genderErrorMessage.style.display = 'inline-block';
                genderLabel1.style.color = '#dc3545';
                genderLabel2.style.color = '#dc3545';
                genderLabel3.style.color = '#dc3545';
                valid = false;
            }
        }

        if (address.value === ''){
            addressErrorMessage.textContent = 'Please enter a valid address.';
            address.classList.add('is-invalid');
            valid = false;
        } else {
            address.classList.remove('is-invalid');
            valid = true;
        }

        if (address2.value === ''){
            address2ErrorMessage.textContent = 'Please enter a valid address.';
            address2.classList.add('is-invalid');
            valid = false;
        } else {
            address2.classList.remove('is-invalid');
            valid = true;
        }

        if (nationality.value === ''){
            nationalityErrorMessage.textContent = 'Please select a nationality option.';
            nationality.classList.add('is-invalid');
            valid = false;
        } else {
            nationality.classList.remove('is-invalid');
            valid = true;
        }

        let selectedLanguage = false;
        for (const radio of languages) {
            if (radio.checked) {
                selectedLanguage = true;
                languagesErrorMessage.style.display = 'none';
                languagesLabel1.style.color = 'black';
                languagesLabel2.style.color = 'black';
                languagesLabel3.style.color = 'black';
                valid = true;
                break;
            } else if (!selectedLanguage) {
                languagesErrorMessage.style.display = 'inline-block';
                languagesLabel1.style.color = '#dc3545';
                languagesLabel2.style.color = '#dc3545';
                languagesLabel3.style.color = '#dc3545';
                valid = false;
            }
        }

        return valid;
    }
    function validate() {
        // Default validasi :
        let valid = false;


        return valid;
    }

    // Selector untuk Form Account
    const accountForm = document.getElementById("accountform");

    // Digunakan untuk event handler validasi input form
    accountForm.addEventListener('input', function () {
        // Menonaktifkan tombol jika form tidak valid
        accountValidate.disabled = !validasiAkun(); 
    });

    // Selector untuk Account Table
    const accountTable = document.getElementById("accounttable");
    // Variable untuk memulai perulangan
    let iteration = 1;

    // Digunakan untuk event handler saat button di submit
    accountForm.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();

        // Selector submit yang dibutuhkan :
        const fname = document.getElementById("fname");
        const lname = document.getElementById("lname");
        const username = document.getElementById("username");
        const email = document.getElementById("email");
        const gender = document.querySelector("input[name='gender']:checked");
        const address = document.getElementById("address");
        const address2 = document.getElementById("address2");
        const nationality = document.getElementById("nationality");
        const languages = document.querySelectorAll("input[name='language']:checked");
        // const languageValues = Array.from(languages).map(language => language.value);

        // untuk menambah nilai iteration setiap menambah data
        const noIteration = iteration++;

        // Selector untuk membuat baris data account yang baru (Insert)
        const insertAccount = document.createElement("tr");
        // Digunakan untuk memanipulasi isi table
        insertAccount.innerHTML = `
            <td>${noIteration}</td>
            <td>${fname.value}</td>
            <td>${lname.value}</td>
            <td>${username.value}</td>
            <td>${email.value}</td>
            <td>${gender.value}</td>
            <td>${address.value}</td>
            <td>${address2.value}</td>
            <td>${nationality.value}</td>
            <td>${languages.value}</td>
            <td><button class="btn btn-danger btn-sm btn-delete-account">Delete</button></td>
        `;
        // untuk menambah data baru pada baris baru
        accountTable.appendChild(insertAccount);
        // untuk mereset form agar bersih dari inputan
        accountForm.reset();

        // Selector untuk Delete Account
        const deleteAccount = insertAccount.querySelector(".btn-delete-account");
        // Digunakan untuk event handler delete
        deleteAccount.addEventListener("click", function () {
            insertAccount.remove();
        });

        // Selector untuk Search Account
        const searchAccount = document.getElementById("searchaccount");
        // Digunakan untuk event handler search
        searchAccount.addEventListener("input", function () {
            // membuat inputkan search menjadi kecil untuk menyamakan pencarian
            const searchValue = this.value.toLowerCase();
            // Selector baris pada tabel
            const rows = AccountTable.getElementsByTagName("tr");

            // Perulangan linier searching
            for (let i = 0; i < rows.length; i++) {
                const row = rows[i];
                // Mengambil kolom Account name
                const nameCell = row.getElementsByTagName("td")[1];
                if (nameCell) {
                    // membuat inputkan search menjadi kecil untuk menyamakan pencarian
                    const name = nameCell.textContent.toLowerCase();
                    if (name.includes(searchValue)) {
                        // Menampilkan baris data yang dicari
                        row.style.display = "";
                    } else {
                        // Menghilangkan baris data, saat data yang dicari yang tidak ada
                        row.style.display = "none";
                    }
                }
            }
        });
    });
});