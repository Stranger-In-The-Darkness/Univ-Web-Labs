function birthday() {
    var birthday = new Date(1998, 2, 16).getDay();
    switch (birthday) {
        case 0:
            window.status = ('��������');
            break;
        case 1:
            window.status = ('³������');
            break;
        case 2:
            window.status = ('������');
            break;
        case 3:
            window.status = ('������');
            break;
        case 4:
            window.status = ('�\'������');
            break;
        case 5:
            window.status = ('������');
            break;
        case 6:
            window.status = ('�����');
            break;
    }
}