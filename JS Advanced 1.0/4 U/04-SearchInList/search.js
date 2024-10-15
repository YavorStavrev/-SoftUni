function search() {
   
    const searchText = $('#searchText').val().toLowerCase();
    
    let matches = 0;
    $('#towns li').each(function() {
        const town = $(this).text().toLowerCase();
        if (town.includes(searchText)) {
            $(this).css('font-weight', 'bold').css('text-decoration', 'underline');
            matches++;
        }
    });

    let result = document.getElementById('result');
    result.textContent = `${matches} matches found`;
}
