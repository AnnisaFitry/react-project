document.addEventListener('DOMContentLoaded', function () {
    // Selector input yang dibutuhkan untuk validasi :
    const productName = document.getElementById('productname');
    const productCategory = document.getElementById('productcategory');
    const productFreshness = document.getElementsByName('productfreshness');
    const imageProduct = document.getElementById('imageproduct');
    const additionalDescription = document.getElementById('additionaldescription');
    const productPrice = document.getElementById('productprice');
    
    // Selector button product validate pada form
    const productValidate = document.getElementById('productvalidate');
    // Default button product validate dinonaktifkan
    productValidate.disabled = true;

    // Selector Error Message pada invalid-feedback
    const productNameErrorMessage = document.querySelector("#productname ~ .invalid-feedback");
    const productCategoryErrorMessage = document.querySelector("#productcategory ~ .invalid-feedback");
    const productFreshnessErrorMessage = document.querySelector("#productfreshness-invalid");
    const productFreshnessErrorLabel1 = document.querySelector("#pf1");
    const productFreshnessErrorLabel2 = document.querySelector("#pf2");
    const productFreshnessErrorLabel3 = document.querySelector("#pf3");
    const imageProductErrorMessage = document.querySelector("#imageproduct ~ .invalid-feedback");
    const additionalDescriptionErrorMessage = document.querySelector("#additionaldescription ~ .invalid-feedback");
    const productPriceErrorMessage = document.querySelector("#productprice ~ .invalid-feedback");
    
    // Fungsi untuk mengecek validasi product form 
    function validateForm() {
        // Default validasi :
        let valid = false;
        // Validasi Product Name
        if (productName.value.length > 25) {
            productNameErrorMessage.textContent = 'Product Name must not exceed 25 characters.';
            productName.classList.add('is-invalid');
            valid = false;
        } else if (/[!@#{}]/.test(productName.value)) {
            productNameErrorMessage.textContent = 'Name must not contain symbols.';
            productName.classList.add('is-invalid');
            valid = false;
        } else {
            productName.classList.remove('is-invalid');
            valid = true;
        }
        // Validasi Product Category
        if (productCategory.value === '') {
            productCategoryErrorMessage.textContent = 'The product category field must be filled in.';
            productCategory.classList.add('is-invalid');
            valid = false;
        } else {
            productCategory.classList.remove('is-invalid');
            valid = true;
        }
        // Validasi Product Freshness
        let selectedFreshness = false;
        for (const radio of productFreshness) {
            if (radio.checked) {
                selectedFreshness = true;
                productFreshnessErrorMessage.style.display = 'none';
                productFreshnessErrorLabel1.style.color = 'black';
                productFreshnessErrorLabel2.style.color = 'black';
                productFreshnessErrorLabel3.style.color = 'black';
                valid = true;
                break;
            } else if (!selectedFreshness) {
                productFreshnessErrorMessage.style.display = 'inline-block';
                productFreshnessErrorLabel1.style.color = '#dc3545';
                productFreshnessErrorLabel2.style.color = '#dc3545';
                productFreshnessErrorLabel3.style.color = '#dc3545';
                valid = false;
            }
        }
        // Validasi Image Product
        if (imageProduct.value === '') {
            imageProductErrorMessage.textContent = 'The image product field must be filled in.';
            imageProduct.classList.add('is-invalid');
            valid = false;
        } else {
            imageProduct.classList.remove('is-invalid');
            valid = true;
        }
        // Validasi Additional Description
        if (additionalDescription.value === '') {
            additionalDescriptionErrorMessage.textContent = 'The additional description field must be filled in.';
            additionalDescription.classList.add('is-invalid');
            valid = false;
        } else {
            additionalDescription.classList.remove('is-invalid');
            valid = true;
        }
        // Validasi Product Price
        if (productPrice.value === '') {
            productPriceErrorMessage.textContent = 'The Product Price field must be filled in.';
            productPrice.classList.add('is-invalid');
            valid = false;
        } else if (!/^[0-9]+$/.test(productPrice.value)) {
            productPriceErrorMessage.textContent = 'The Product Price must contain numbers only.';
            productPrice.classList.add('is-invalid');
            valid = false;
        } else {
            productPrice.classList.remove('is-invalid');
            valid = true;
        }

        return valid;
    }

    // Selector untuk Form Product
    const productForm = document.getElementById("productform");

    // Digunakan untuk event handler validasi input form
    productForm.addEventListener('input', function () {
        // Menonaktifkan tombol jika form tidak valid
        productValidate.disabled = !validateForm(); 
    });

    // Selector untuk Product Table
    const productTable = document.getElementById("producttable");
    // Variable untuk memulai perulangan
    let iteration = 1;

    // Digunakan untuk event handler saat button di submit
    productForm.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();

        // Selector submit yang dibutuhkan :
        const productName = document.getElementById("productname");
        const productCategory = document.getElementById("productcategory");
        const productFreshness = document.querySelector("input[name='productfreshness']:checked");
        const imageProduct = document.getElementById("imageproduct");
        const additionalDescription = document.getElementById("additionaldescription");
        const productPrice = document.getElementById("productprice");

        // untuk menambah nilai iteration setiap menambah data
        const noIteration = iteration++;

        // Selector untuk membuat baris data product yang baru (Insert)
        const insertProduct = document.createElement("tr");
        // Digunakan untuk memanipulasi isi table
        insertProduct.innerHTML = `
            <td>${noIteration}</td>
            <td>${productName.value}</td>
            <td>${productCategory.value}</td>
            <td>${productFreshness.value}</td>
            <td><img src="${imageProduct.value}"></td>
            <td>${additionalDescription.value}</td>
            <td>${productPrice.value}</td>
            <td><button class="btn btn-primary btn-sm btn-delete-product">Delete</button></td>
        `;
        // untuk menambah data baru pada baris baru
        productTable.appendChild(insertProduct);
        // untuk mereset form agar bersih dari inputan
        productForm.reset();
        
        // Selector untuk Delete Product
        const deleteProduct = insertProduct.querySelector(".btn-delete-product");
        // Digunakan untuk event handler delete
        deleteProduct.addEventListener("click", function () {
            insertProduct.remove();
        });

        // Selector untuk Search Product
        const searchProduct = document.getElementById("searchproduct");
        // Digunakan untuk event handler search
        searchProduct.addEventListener("input", function () {
            // membuat inputkan search menjadi kecil untuk menyamakan pencarian
            const searchValue = this.value.toLowerCase();
            // Selector baris pada tabel
            const rows = productTable.getElementsByTagName("tr");

            // Perulangan linier searching
            for (let i = 0; i < rows.length; i++) {
                const row = rows[i];
                // Mengambil kolom product name
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