function onSelectionChanged(sender) {
    var x = document.getElementById('selectBrand');
    switch (sender.selectedIndex) {
        case 0:
            x.innerHTML =
                "<option value=\"1\">Samsung</option>" +
                "<option value=\"2\">Apple</option>" +
                "<option value=\"3\">Meizu</option>" +
                "<option value=\"4\">Lenovo</option>" +
                "<option value=\"5\">Huawei</option>";
            break;
        case 1:
            x.innerHTML =
                "<option value=\"1\">Nikon</option>" +
                "<option value=\"2\">Canon</option>" +
                "<option value=\"3\">Sony</option>" +
                "<option value=\"4\">Panasonic</option>" +
                "<option value=\"5\">Olympus</option>";
            break;
        case 2:
            x.innerHTML =
                "<option value=\"1\">ASUS</option>" +
                "<option value=\"2\">Lenovo</option>" +
                "<option value=\"3\">Acer</option>" +
                "<option value=\"4\">Apple</option>" +
                "<option value=\"5\">DELL</option>";
            break;
        case 3:
            x.innerHTML =
                "<option value=\"1\">Samsung</option>" +
                "<option value=\"2\">LG</option>" +
                "<option value=\"3\">Sony</option>" +
                "<option value=\"4\">Panasonic</option>" +
                "<option value=\"5\">Toshiba</option>";
            break;
        case 4:
            x.innerHTML =
                "<option value=\"1\">Samsung</option>" +
                "<option value=\"2\">Apple</option>" +
                "<option value=\"3\">Wileyfox</option>" +
                "<option value=\"4\">Delfa</option>" +
                "<option value=\"5\">Bravis</option>";
            break;
    }
}