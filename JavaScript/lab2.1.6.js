function thirtyEightYearsPastFromNow() {
    var date = new Date(1980, 8, 24).getDay();
    switch (birthday) {
        case 0:
            window.status = ('Понеділок');
            break;
        case 1:
            window.status = ('Вівторок');
            break;
        case 2:
            window.status = ('Середа');
            break;
        case 3:
            window.status = ('Четвер');
            break;
        case 4:
            window.status = ('П\'ятниця');
            break;
        case 5:
            window.status = ('Субота');
            break;
        case 6:
            window.status = ('Неділя');
            break;
    }
}