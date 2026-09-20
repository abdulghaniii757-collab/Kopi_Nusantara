$(document).ready(function() {

    // 1. FITUR ACCORDION FAQ
    $('.faq-question').click(function() {
        var $answer = $(this).next('.faq-answer');
        $('.faq-answer').not($answer).slideUp(300);
        $answer.slideToggle(300);
    });

    // 2. FITUR INTERAKTIF: TOMBOL LIKE COUNTER PADA MENU
    $('.btn-like').click(function() {
        var $countSpan = $(this).find('.like-count');
        var currentLikes = parseInt($countSpan.text());
        var newLikes = currentLikes + 1;
        $countSpan.text(newLikes);

        $(this).animate({ fontSize: '0.95rem' }, 100).animate({ fontSize: '0.85rem' }, 100);
    });

    // 3. FITUR INTERAKTIF TAMBAHAN: KALKULATOR HARGA PESANAN
    function hitungTotal() {
        var hargaSatuan = parseInt($('#pilihan-menu').val()) || 0;
        var jumlah = parseInt($('#jumlah-pesanan').val()) || 0;
        
        // Mencegah nilai minus pada jumlah pesanan
        if (jumlah < 1) {
            jumlah = 1;
            $('#jumlah-pesanan').val(1);
        }

        var total = hargaSatuan * jumlah;

        // Memformat angka ke format mata uang Rupiah
        var formatRupiah = 'Rp ' + total.toLocaleString('id-ID');

        // Menampilkan hasil kalkulasi ke elemen DOM dengan efek fadeIn halus
        $('#total-harga').hide().text(formatRupiah).fadeIn(200);
    }

    // Menjalankan fungsi hitung saat pilihan menu atau jumlah cangkir diubah
    $('#pilihan-menu, #jumlah-pesanan').on('change keyup', function() {
        hitungTotal();
    });

});