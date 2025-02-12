document.getElementById('menu-toggle').addEventListener('click', function() {
    var navigation = document.getElementById('navigation');
    if (navigation.style.display === "block") {
        navigation.style.display = "none";
    } else {
        navigation.style.display = "block";
    }
});
